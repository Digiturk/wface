import NoSsr from '@material-ui/core/NoSsr';
import { createStyles, withStyles, WithStyles, Theme } from '@material-ui/core/styles';
import { emphasize } from '@material-ui/core/styles/colorManipulator';
import * as React from 'react';
import Select from 'react-select';
import selectComponents from './components';
import { Omit } from '@material-ui/core';
import { WTheme } from '../../others/w-theme-provider/w-theme';

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

export interface WSelectProps extends Omit<WithStyles<typeof styles>, "classes"> {
  classes?: any;
  id?: string;
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
}

class WSelectInner extends React.Component<WSelectProps, { focused: boolean }> {
  private select: any;

  constructor(props) {
    super(props);
    this.select = React.createRef();

    this.state = {
      focused: false,
    }
  }


  private getCleanValue = () => {
    const find = (value) => {
      return this.props.options.find(option => option.value == value)
    }

    if (this.props.isMulti && this.props.value) {
      const result = [];
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

  onChange = value => {
    if (this.props.onChange) {
      if (this.props.isMulti) {
        this.props.onChange(value.map(item => item.value), value);
      }
      else {
        this.props.onChange(value ? value.value : null, value);
      }

    }
  }

  render() {
    // @ts-ignore
    const { classes } = this.props;
    const cleanValue = this.getCleanValue();
    let hasValue = (this.select.current && this.select.current.select.commonProps.getValue().length > 0);
    hasValue = hasValue || (this.props.isMulti ? cleanValue && cleanValue.length > 0 : cleanValue);

    return (
      <NoSsr>
        {/* 
        // @ts-ignore */}        
        <Select
          ref={this.select}
          components={selectComponents}
          {...this.props}
          styles={customStyles}
          onFocus={(event) => this.setFocus(event, true)}
          onBlur={(event) => this.setFocus(event, false)}          
          onChange={this.onChange}
          placeholder=""
          value={cleanValue}          
          // @ts-ignore
          classes={classes}
          textFieldProps={{            
            label: this.props.label,
            InputLabelProps: {
              shrink: this.state.focused || hasValue,
            },
            error: this.props.error,
            helperText: this.props.helperText,
            style: this.props.style
          }}          
          menuPortalTarget={document.body}
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
  })
}

const styles = (theme: WTheme) => createStyles({
  input: {
    display: 'flex',
    padding: 0,
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center'
  },
  chip: {
    margin: `${theme.spacing.unit / 4}px ${theme.spacing.unit / 4}px`,
    height: 28
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
      0.08,
    ),
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
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
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0
  },
  dropdownIndicator: {
    padding: 40
  }
});

const WSelect = withStyles(styles, { withTheme: false })((props: WSelectProps) => <WSelectInner {...props} />)

export { WSelect };
