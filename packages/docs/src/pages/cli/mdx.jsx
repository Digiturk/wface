import React from 'react'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/jsx/jsx'
import mdxComponents from '../../components/mdx-components';

import CommandList from './pages/command-list.mdx'
import CreateCommand from './pages/create.mdx'
import VersionCommand from './pages/version.mdx'

const Mdx = {
  CommandList: () => <CommandList components={mdxComponents}/>,
  CreateCommand: () => <CreateCommand components={mdxComponents}/>,
  VersionCommand: () => <VersionCommand components={mdxComponents}/>
}

export default Mdx
