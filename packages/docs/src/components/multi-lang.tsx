import * as React from 'react'
import MDX from '@mdx-js/runtime/src'
import components from './mdx-components';
import { AppContextActions } from '../store';
import { connect } from 'react-redux';
import AppContext from '../store/app-context/models';

export interface MultiLangProps {
  lang: "en" | "tr";
  appContext?: AppContext;
}

class MultiLang extends React.Component<MultiLangProps, any> {
  render() {
    if(this.props.lang == this.props.appContext.lang) {
      return <MDX components={components}>{this.props.children}</MDX>;
    }
    else {
      return null;
    }
  }
}

const mapStateToProps = (state: any) => ({
  appContext: state.appContext
});

const mapDispatchToProps = (dispatch: any) => ({
  changeLang: (lang: 'en' | 'tr', value: any) => dispatch(AppContextActions.changeLang(lang)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MultiLang);
