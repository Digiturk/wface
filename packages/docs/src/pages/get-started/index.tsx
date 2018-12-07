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
    id: '1.-1',
    text: 'WFace Framework',
    path: 'architecture',
    mdx: Mdx.Architecture,
    next: '1.0'
  },
  {
    id: '1.0',
    text: 'Gereksinimler',
    path: 'requirements',
    mdx: Mdx.Requirements,
    prev: '1.-1',
    next: '1.1'
  },
  {
    id: '1.1',
    text: 'Kurulum',
    path: 'setup',
    mdx: Mdx.Setup,
    prev: '1.0',
    next: '1.2'
  },
  {
    id: '1.2',
    text: 'Kullanım',
    path: 'usage',
    mdx: Mdx.Usage,
    prev: '1.1',
    next: '1.3'
  },
  {
    id: '1.3',
    text: 'Ek Araçlar',
    path: 'additional-tools',
    mdx: Mdx.AdditionalTools,
    prev: '1.2',
    next: '1.4'
  },
  {
    id: '1.4',
    text: 'Desteklenen Ortamlar',
    path: 'supported-platforms',
    mdx: Mdx.SupportedPlatforms,
    prev: '1.3',
    next: '1.5'
  },
  {
    id: '1.5',
    text: 'Sık Sorulan Sorular',
    path: 'faq',
    mdx: Mdx.Faq,
    prev: '1.4',
    next: '1.6'
  }
]


