import * as React from 'react'
import Mdx from './mdx'
import PageLayout from '../../components/page-layout';

export default class VersionsPage extends React.Component<any, any> {
  public render() {
    return (
      <PageLayout menuTree={menuTree} />
    );
  }
}

const menuTree = [
  {
    id: 'v0.11.0',
    text: 'v0.11.0',
    path: '0-11-0',
    mdx: Mdx.V0110Component
  },
  {
    id: 'v0.10.0',
    text: 'v0.10.0',
    path: '0-10-0',
    mdx: Mdx.V0100Component
  },
  {
    id: 'old-versions',
    text: 'Eski Versiyonlar',
    subNodes: [
      {
        id: 'v0.9.0',
        text: 'v0.9.0',
        path: '0-9-0',
        mdx: Mdx.V090Component
      },
      {
        id: 'v0.8.0',
        text: 'v0.8.0',
        path: '0-8-0',
        mdx: Mdx.V080Component
      },
      {
        id: 'v0.7.0',
        text: 'v0.7.0',
        path: '0-7-0',
        mdx: Mdx.V070Component
      },
    ]
  }
]