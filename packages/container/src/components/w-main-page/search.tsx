import * as WFace from '@wface/components';
import { UserContextActions, WStore, AppContextActions } from '@wface/store';
import { createStyles, withStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { connect } from 'react-redux';
import { IMenuTreeItem, MenuTreeUtil } from '@wface/ioc';

interface SearchState {
  focused: boolean;
  value: string;
}

export interface SearchProps {
  classes?: any;
}

export interface DispatchProps {
  openScreen: (menuTreeItem: IMenuTreeItem) => void;
  clearAppContext: () => void;
  logout: () => void;
}

class Search extends React.Component<SearchProps & WStore & DispatchProps, SearchState> {
  private textFieldRef: any;

  constructor(props) {
    super(props);
    
    this.textFieldRef = React.createRef();

    this.state = {
      focused: false,
      value: ""
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

  public render() {
    return (
      <div>
        <WFace.WTextField
          value={this.state.value}
          onChange={(e) => this.setState({ value: e.target.value })}
          ref={this.textFieldRef}
          classes={this.props.classes}          
          style={{ width: this.state.focused ? 400 : 200, backgroundColor: this.state.focused ? '#FFFFFF33' : '#FFFFFF11' }}
          onFocus={() => this.setState({ focused: true })}
          onBlur={() => this.setState({ focused: false })}
          InputProps={{
            disableUnderline: true,
            startAdornment: <WFace.WIcon style={{ color: '#ffffffaa', padding: '0 10px' }}>search</WFace.WIcon>,
            style: {
              color: '#fff',
            }
          }}
          InputLabelProps={{
            classes: this.props.classes
          }}
          placeholder="Search..."
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => ({
  openScreen: (menuTreeItem: IMenuTreeItem, initialValues?: any) => dispatch(AppContextActions.openScreen({ menuTreeItem, initialValues })),
  clearAppContext: () => dispatch(AppContextActions.clear()),
  logout: () => dispatch(UserContextActions.logout())
})


const styles = (theme: WFace.WTheme) => createStyles({
  root: {
    borderRadius: 4,
    transition: 'all ease 400ms',
    color: '#FFF'
  },
});

export default connect<WStore, DispatchProps, SearchProps>(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: false })((props) => <Search {...props} />))