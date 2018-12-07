import * as React from 'react'
import Mdx from './mdx'
import PageLayout from '../../components/page-layout';

export default class CliPage extends React.Component<any, any> {
  public render() {
    return (
      <PageLayout menuTree={menuTree}/>
    );
  }
}

const menuTree = [
  {
    id: '2.0',
    text: 'Komut Listesi',
    path: 'command-list',        
    mdx: Mdx.CommandList,
    next: '2.1'
  },
  {
    id: '2.1',
    text: 'Create',
    path: 'create-command',        
    mdx: Mdx.CreateCommand,
    prev: '2.0',
    next: '2.2'
  },
  {
    id: '2.2',
    text: 'Version',
    path: 'version-command',        
    mdx: Mdx.VersionCommand,
    prev: '2.1'        
  }
]


