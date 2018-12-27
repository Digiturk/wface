import * as React from 'react'
import Mdx from './mdx'
import PageLayout from '../../components/page-layout';

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
    next: 'requirements'
  },
  {
    id: 'requirements',
    text: 'Gereksinimler',
    path: 'requirements',
    mdx: Mdx.Requirements,
    prev: 'wface',
    next: 'setup'
  },
  {
    id: 'setup',
    text: 'Kurulum',
    path: 'setup',
    mdx: Mdx.Setup,
    prev: 'requirements',
    next: 'usage'
  },
  {
    id: 'usage',
    text: 'Kullanım',
    path: 'usage',
    mdx: Mdx.Usage,
    prev: 'setup',
    next: 'additional-tools'
  },
  {
    id: 'additional-tools',
    text: 'Ek Araçlar',
    path: 'additional-tools',
    mdx: Mdx.AdditionalTools,
    prev: 'usage',
    next: 'supported-platforms'
  },
  {
    id: 'supported-platforms',
    text: 'Desteklenen Ortamlar',
    path: 'supported-platforms',
    mdx: Mdx.SupportedPlatforms,
    prev: 'additional-tools'
  }
]


