import React from 'react'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/jsx/jsx'
import mdxComponents from '../../components/mdx-components';

import V070Component from './pages/old-versions/v0.7.0.mdx'
import V080Component from './pages/old-versions/v0.8.0.mdx'
import V090Component from './pages/old-versions/v0.9.0.mdx'
import V0100Component from './pages/old-versions/v0.10.0.mdx'
import V0110Component from './pages/old-versions/v0.11.0.mdx'
import V100Component from './pages/v1.0.0.mdx'

const Mdx = {
  V070Component: () => <V070Component components={mdxComponents}/>,
  V080Component: () => <V080Component components={mdxComponents}/>,
  V090Component: () => <V090Component components={mdxComponents}/>,
  V0100Component: () => <V0100Component components={mdxComponents}/>,
  V0110Component: () => <V0110Component components={mdxComponents}/>,
  V100Component: () => <V100Component components={mdxComponents}/>,
}

export default Mdx
