import React from 'react'

import Architecture from './get-started-page/architecture.mdx'
import Requirements from './get-started-page/requirements.mdx'
import Setup from './get-started-page/setup.mdx'

import { WTypography, WDivider, WList, WListItem, WListItemText } from '@wface/components'

const components = {
  h1: props => <div><WTypography variant="display2" {...props} /><WDivider/><br/></div>,

  p: props => <div><WTypography variant="subheading" {...props} /></div>,
  ol: props => <div><WList {...props}/></div>,
  li: props => <WListItem><WListItemText primary={props.children}/></WListItem>  
} 

const Mdx = {
  GetStarted: {
    Architecture: () => <Architecture components={components}/>,
    Requirements: () => <Requirements/>,
    Setup: () => <Setup/>
  },
  Components: {

  }
}

export default Mdx