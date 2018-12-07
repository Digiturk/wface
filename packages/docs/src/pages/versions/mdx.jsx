import React from 'react'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/jsx/jsx'
import mdxComponents from '../../components/mdx-components';

import V070Component from './pages/v0.7.0.mdx'
import V080Component from './pages/v0.8.0.mdx'
import V090Component from './pages/v0.9.0.mdx'

const Mdx = {
  V070Component: () => <V070Component components={mdxComponents}/>,
  V080Component: () => <V080Component components={mdxComponents}/>,
  V090Component: () => <V090Component components={mdxComponents}/>,
}

export default Mdx
