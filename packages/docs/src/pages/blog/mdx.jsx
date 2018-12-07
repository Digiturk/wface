import React from 'react'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/jsx/jsx'
import mdxComponents from '../../components/mdx-components';

import HowToVersionUpgrade from './pages/how-to-version-upgrade.mdx'
import ProductionBuild from './pages/production-build.mdx'
import GeneralVariableUsage from './pages/general-variable-usage.mdx'
import NewScreenDefinition from './pages/new-screen-definition.mdx'


const Mdx = {
  HowToVersionUpgrade: () => <HowToVersionUpgrade components={mdxComponents}/>,
  ProductionBuild: () => <ProductionBuild components={mdxComponents}/>,
  GeneralVariableUsage: () => <GeneralVariableUsage components={mdxComponents}/>,
  NewScreenDefinition: () => <NewScreenDefinition components={mdxComponents}/>,
}

export default Mdx
