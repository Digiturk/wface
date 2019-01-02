import * as React from 'react'
import Mdx from './mdx'
import PageLayout from '../../components/page-layout';

export default class BlogPage extends React.Component<any, any> {
  public render() {
    return (
      <PageLayout menuTree={menuTree}/>
    );
  }
}

const menuTree = [
  {
    id: 'new-screen-definition',
    text: 'Yeni Ekran Tanımı',
    path: 'new-screen-definition',
    mdx: Mdx.NewScreenDefinition,
  },
  {
    id: 'how-to-version-upgrade',
    text: 'Version Yükseltme',
    path: 'how-to-version-upgrade',
    mdx: Mdx.HowToVersionUpgrade,
  },
  {
    id: 'production-build',
    text: 'Production Build',
    path: 'production-build',
    mdx: Mdx.ProductionBuild,
  },  
  {
    id: 'general-variable-usage',
    text: 'Genel Değişken Kullanımı',
    path: 'general-variable-usage',
    mdx: Mdx.GeneralVariableUsage,
  }, 
  {
    id: 'open-close-screen',
    text: 'Ekran Açma/Kapama',
    path: 'open-close-screen',
    mdx: Mdx.OpenCloseScreen,
  },
  {
    id: 'form-data-persistency',
    text: 'Form Datasının Korunması',
    path: 'form-data-persistency',
    mdx: Mdx.FormDataPersistency,
  },
  {
    id: 'screen-mode-usage',
    text: 'Ekran Modu Kullanımı',
    path: 'screen-mode-usage',
    mdx: Mdx.ScreenModeUsage,
  }, 
  {
    id: 'localstorage-usage',
    text: 'Localstorage Kullanımı',
    path: 'localstorage-usage',
    mdx: Mdx.LocalstorageUsage,
  },
]


