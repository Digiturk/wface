import IOC, { ISearchProvider } from '@wface/ioc';
import { WStore } from '@wface/store';
import * as React from 'react';
import *  as WFace from '@wface/components';
import { connect } from 'react-redux';
import Select from 'react-select';
import { withTheme } from '@material-ui/core';


interface SearchState {
  focused: boolean;
  value: string;
  searchResults: any[];
  isLoading: boolean;
  anchorEl: any;
}

export interface SearchProps {
  classes?: any;
  theme?: WFace.WTheme;
}

class Search extends React.Component<SearchProps, SearchState> {
  private textFieldRef: any;
  private searchProvider: ISearchProvider = IOC.get<ISearchProvider>("ISearchProvider");

  constructor(props) {
    super(props);

    this.textFieldRef = React.createRef();

    this.state = {
      focused: false,
      value: "",
      searchResults: [],
      isLoading: false,
      anchorEl: null
    }

    this.focusSearch = this.focusSearch.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keydown", this.focusSearch);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.focusSearch);
  }

  focusSearch(e) {
    if (e.ctrlKey && e.shiftKey && e.keyCode === 70) {
      this.textFieldRef.current && this.textFieldRef.current.focus()
      e.stopPropagation();
    }
  }

  onChange = (value, action) => {
    if (action.action !== "input-blur" && action.action !== "menu-close") {
      this.setState({ value }, () => {
        this.searchResults();
      });
    }
  }

  searchResults = () => {
    if (this.state.value.length === 0) {
      this.setState({ searchResults: [] });
      return;
    }

    this.setState({ isLoading: true }, () => {
      this.searchProvider.search(this.state.value)
        .then(results => {
          this.setState({ searchResults: results });
        })
        .catch(reason => {
          this.setState({ searchResults: [] });
        })
        .finally(() => {
          this.setState({ isLoading: false });
        })
    });
  }

  public render() {
    return (
      <div>
        <Select
          ref={this.textFieldRef}
          isSearchable
          value={this.state.value}
          onChange={(option, e) => this.searchProvider.onItemSelected(option)}
          noOptionsMessage={() => "No result found"}
          blurInputOnSelect={true}
          inputValue={this.state.value}
          onInputChange={(value, action) => this.onChange(value, action)}
          options={this.state.searchResults}
          formatOptionLabel={(option, context) => this.searchProvider.renderSearchItem(option)}
          getOptionValue={(option) => this.state.value}
          menuIsOpen={this.state.value.length > 0 && this.state.focused}
          placeholder="Search..."
          isLoading={this.state.isLoading}
          onFocus={() => this.setState({ focused: true })}
          onBlur={() => this.setState({ focused: false })}
          styles={{
            control: (base) => ({
              ...base,
              width: this.state.focused ? 400 : 200,
              backgroundColor: this.state.focused ? '#00000066' : '#00000033',
              border: '0',
              height: 30,
              minHeight: 30,
              transition: 'all ease 400ms',
              // color: '#FFF',
              boxShadow: 'none',
              fontSize: 14,
            }),
            placeholder: (base) => ({
              ...base,
              color: '#FFFFFF66',
              lineHeight: '26px',
            }),
            container: (base) => ({
              ...base,
              border: 'none',
            }),
            dropdownIndicator: (base) => ({
              height: 30
            }),
            input: (base) => ({
              ...base,
              color: '#FFF'
            }),
            option: (base, state) => ({
              ...base,
              color: 'initial',
              backgroundColor: state.isFocused ? this.props.theme.palette.background.default : 'initial',
              padding: 0,
            }),
          }}
          components={{
            DropdownIndicator: (props) => (
              <div style={{ padding: '2px 5px 0px' }}>
                <WFace.WIcon icon="search" style={{ color: '#FFFFFF66' }} />
              </div>
            ),
            IndicatorSeparator: () => null,
            LoadingIndicator: (props) => (
              <div style={{ padding: '2px 5px 0px' }}>
                <WFace.WCircularProgress size={22} style={{ color: '#FFFFFFCC' }} />
              </div>
            )
          }}
        />
      </div>
    )
  }
}

const mapStateToProps = (state: WStore) => ({ ...state });


export default connect<WStore, {}, SearchProps>(mapStateToProps)(withTheme((props) => <Search {...props} />));