import * as React from 'react'
import Mdx from './mdx'
import PageLayout from '../../components/page-layout';

export default class VersionsPage extends React.Component<any, any> {
  public render() {
    return (
      <PageLayout menuTree={menuTree}/>
    );
  }
}

const menuTree = [
  {
    id: '10.98',
    text: 'v0.9.0',
    path: '0-9-0',
    mdx: Mdx.V090Component
  },
  {
    id: '10.99',
    text: 'v0.8.0',
    path: '0-8-0',
    mdx: Mdx.V080Component
  },
  {
    id: '10.100',
    text: 'v0.7.0',
    path: '0-7-0',
    mdx: Mdx.V070Component
  },
]