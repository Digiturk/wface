import NoSsr from '@mui/material/NoSsr';
import { Theme, emphasize } from '@mui/material/styles';
import { WithStyles } from '@mui/styles';
import createStyles from '@mui/styles/createStyles';
import withStyles from '@mui/styles/withStyles';
import * as React from 'react';
import Select from 'react-select';
import selectComponents from './components';
import { DistributiveOmit } from '@mui/types';
import { WTheme } from '../../others/w-theme-provider/w-theme';
import { BaseComponentProps } from '../../base/base-component-props';
import { WTextFieldProps } from '../w-text-field';

export interface WSelectOptionGroup {
  label: string;
  options: WSelectOption[];
}

export interface WSelectOption {
  icon?: string | React.ReactElement<any>;
  iconSource?: 'material-icons' | 'fontawesome';
  label?: string;
  value: any;
}

export type WSelectProps = BaseComponentProps & DistributiveOmit<WithStyles<typeof styles>, "classes"> & { 
  isClearable?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  isMulti?: boolean;
  isSearchable?: boolean;
  error?: boolean;
  label?: string;
  helperText?: string;
  name?: string;
  onBlur?: (event: React.FocusEvent<HTMLElement>) => void;
  onChange?: (value: any, object?: any) => void;
  onFocus?: (event: React.FocusEvent<HTMLElement>) => void;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
  options?: (WSelectOption)[];
  value?: any;
  defaultValue?: any;
  theme?: any;
  style?: React.CSSProperties;
  components?: any;
  hideSelectedOptions?:boolean;
  size?: WTextFieldProps["size"]
}

class WSelectInner extends React.Component<WSelectProps, { focused: boolean }> {
  private select: any;

  constructor(props: WSelectProps) {
    super(props);
    this.select = React.createRef();

    this.state = {
      focused: false,
    }
  }


  private getCleanValue = () => {
    const find = (value: any) => {
      return this.props.options?.find(option => option.value == value)
    }

    if (this.props.isMulti && this.props.value) {
      const result: any[] = [];
      (this.props.value as any as string[]).forEach(value => {
        const option = find(value);
        if (option) {
          result.push(option);
        }
      });
      return result;
    }
    else if (typeof this.props.value !== 'object') {
      return find(this.props.value);
    }
    else {
      return this.props.value;
    }
  }

  private setFocus = (event: any, focused: boolean) => {
    this.setState({ focused: focused });

    if (focused && this.props.onFocus) {
      this.props.onFocus(event);
    }
    else if (!focused && this.props.onBlur) {
      this.props.onBlur(event);
    }
  }

  onChange = (value: any) => {
    if (this.props.onChange) {
      if (this.props.isMulti) {
        this.props.onChange(value.map((item: any) => item.value), value);
      }
      else {
        this.props.onChange(value ? value.value : null, value);
      }

    }
  }

  render() {
    // @ts-ignore
    const cleanValue = this.getCleanValue();
    let hasValue = (this.select.current && this.select.current.commonProps.getValue().length > 0);
    hasValue = hasValue || (this.props.isMulti ? cleanValue && cleanValue.length > 0 : cleanValue);

    return (
      <NoSsr>
        {/* 
        // @ts-ignore */}        
        <Select
          ref={this.select}
          {...this.props}
          components={{...selectComponents,...this.props.components}}
          styles={customStyles}
          onFocus={(event) => this.setFocus(event, true)}
          onBlur={(event) => this.setFocus(event, false)}          
          onChange={this.onChange}
          classNamePrefix="w_select"
          placeholder=""
          value={cleanValue}    
          //@ts-ignore
          textFieldProps={{            
            label: this.props.label,        
            InputLabelProps: {
              shrink: this.state.focused || hasValue,
            },
            error: this.props.error,
            helperText: this.props.helperText,
            style: this.props.style,
            size: this.props.size
          }}          
          // menuPortalTarget={document.body}
        />
      </NoSsr>
    );
  }
}

const customStyles = {
  dropdownIndicator: (provided: any) => ({
    ...provided,
    padding: 6
  }),
  clearIndicator: (provided: any) => ({
    ...provided,
    padding: 6
  }),
  menuPortal: (provided: any) => ({
    ...provided,
    zIndex: 9999
  }),
}

const styles = (theme: WTheme) => createStyles({
  input: {
    display: 'flex !important',
    padding: '9.5px 14px !important',
    height: 'auto !important'
  },
  valueContainer: {
    display: 'flex',
    // flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  chip: {
    margin: `${theme.spacing(0.25)} ${theme.spacing(0.25)}`,
    height: 28
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.mode === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
      0.08,
    ),
  },
  noOptionsMessage: {
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  },
  singleValue: {
    fontSize: 16,
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    fontSize: 16,
  },
  paper: {
    position: 'absolute',
    zIndex: theme.zIndex.modal + 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0
  },
  dropdownIndicator: {
    padding: 40
  }
});

export const WSelect = withStyles(styles, { withTheme: false })((props: WSelectProps) => <WSelectInner {...props} />) as any;

