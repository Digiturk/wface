import React from 'react'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/jsx/jsx'
import mdxComponents from '../../components/mdx-components';

import WFace from './pages/wface.mdx'
import AdditionalTools from './pages/additional-tools.mdx'
import Requirements from './pages/requirements.mdx'
import Setup from './pages/setup.mdx'
import SupportedPlatforms from './pages/supported-platforms.mdx'
import Usage from './pages/usage.mdx'

const Mdx = {
  WFace: () => <WFace components={mdxComponents} />,
  AdditionalTools: () => <AdditionalTools components={mdxComponents} />,
  Architecture: () => <Architecture components={mdxComponents} />,
  Requirements: () => <Requirements components={mdxComponents} />,
  Setup: () => <Setup components={mdxComponents} />,
  SupportedPlatforms: () => <SupportedPlatforms components={mdxComponents} />,
  Usage: () => <Usage components={mdxComponents} />,
}

export default Mdx
