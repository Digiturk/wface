import React from 'react'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/jsx/jsx'
import mdxComponents from '../../components/mdx-components';

import Architecture from './pages/architecture.mdx'
import AdditionalTools from './pages/additional-tools.mdx'
import Faq from './pages/faq.mdx'
import Requirements from './pages/requirements.mdx'
import Setup from './pages/setup.mdx'
import SupportedPlatforms from './pages/supported-platforms.mdx'
import Usage from './pages/usage.mdx'

const Mdx = {
  AdditionalTools: () => <AdditionalTools components={mdxComponents} />,
  Architecture: () => <Architecture components={mdxComponents} />,
  Faq: () => <Faq components={mdxComponents} />,
  Requirements: () => <Requirements components={mdxComponents} />,
  Setup: () => <Setup components={mdxComponents} />,
  SupportedPlatforms: () => <SupportedPlatforms components={mdxComponents} />,
  Usage: () => <Usage components={mdxComponents} />,

}

export default Mdx
