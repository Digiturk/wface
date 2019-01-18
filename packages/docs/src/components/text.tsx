import * as React from 'react'
import { AppContextActions } from '../store';
import { connect } from 'react-redux';
import AppContext from '../store/app-context/models';

export interface TextProps {
  en: string;
  tr: string;
  appContext?: AppContext;
}

class Text extends React.Component<TextProps, any> {
  render() {
    return this.props[this.props.appContext.lang];    
  }
}

const mapStateToProps = (state: any) => ({
  appContext: state.appContext
});

const mapDispatchToProps = (dispatch: any) => ({
  changeLang: (lang: 'en' | 'tr', value: any) => dispatch(AppContextActions.changeLang(lang)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Text);
