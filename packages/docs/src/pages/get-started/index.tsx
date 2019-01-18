import * as React from 'react'
import Mdx from './mdx'
import PageLayout from '../../components/page-layout';
import Text from '../../components/text';

export default class GetStartedPage extends React.Component<any, any> {
  public render() {
    return (
      <PageLayout menuTree={menuTree}/>
    );
  }
}

const menuTree = [
  {
    id: 'wface',
    text: 'WFace Framework',
    path: 'wface',
    mdx: Mdx.WFace,
    next: 'modules'
  },
  {
    id: 'modules',
    text: <Text tr="Modüller" en="Modules"/>,
    path: 'modules',
    mdx: Mdx.Modules,
    prev: 'wface',
    next: 'requirements'
  },
  {
    id: 'requirements',
    text: <Text tr="Gereksinimler" en="Requirements"/>,
    path: 'requirements',
    mdx: Mdx.Requirements,
    prev: 'modules',
    next: 'setup'
  },
  {
    id: 'setup',
    text: <Text tr="Kurulum" en="Setup"/>,
    path: 'setup',
    mdx: Mdx.Setup,
    prev: 'requirements',
    next: 'usage'
  },
  {
    id: 'usage',
    text: <Text tr="Kullanım" en="Usage"/>,
    path: 'usage',
    mdx: Mdx.Usage,
    prev: 'setup',
    next: 'additional-tools'
  },
  {
    id: 'additional-tools',
    text: <Text tr="Ek Araçlar" en="Additional Tools"/>,
    path: 'additional-tools',
    mdx: Mdx.AdditionalTools,
    prev: 'usage',
    next: 'supported-platforms'
  },
  {
    id: 'supported-platforms',
    text: <Text tr="Desteklenen Ortamlar" en="Supported Platforms"/>,
    path: 'supported-platforms',
    mdx: Mdx.SupportedPlatforms,
    prev: 'additional-tools'
  }
]


