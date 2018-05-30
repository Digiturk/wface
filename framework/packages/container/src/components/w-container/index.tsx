import * as WFace from '@wface/components';
import * as React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import WLoginPage from '../w-login-page';
import WMainPage from '../w-main-page';
import WMuiThemeProvider from './WMuiThemeProvider';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';


class WContainer extends WFace.WComponentBase<any, {}> { 
    constructor(props, context) {
        super(props, context);
    }  
    
    render() {                
        return ( 
            <BrowserRouter> 
                <WMuiThemeProvider>    
                    <Route path="/login" component={WLoginPage} />    
                    <Route path="/" component={WMainPage} />
                </WMuiThemeProvider >
            </BrowserRouter>
        );
    }
};

const mapStateToProps = (state) => ({
    userContext: state.userReducer
});


// export default connect(mapStateToProps)(WContainer);
export default WContainer;


export const MyContext = React.createContext("deneme");


// export default props => (
//     <MyContext.Consumer>
//       {theme => <WContainer {...props} value={theme} />}
//     </MyContext.Consumer>
//   );