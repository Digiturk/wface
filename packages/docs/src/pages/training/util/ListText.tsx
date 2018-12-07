import * as React from 'react'
import { WListItem, WListItemIcon, WIcon, WListItemText, WTypography } from '@wface/components';
import constants from './constants';

const ListText = (props: any) => {
  return (
    <WListItem>
      <WListItemIcon>
        <WIcon style={{ color: constants.primaryColor }}>arrow_forward_ios</WIcon>
      </WListItemIcon>
      <WListItemText>
        <WTypography variant="h5" style={{ color: constants.primaryColor, fontWeight: 500 }}>
          {props.children}
        </WTypography>
      </WListItemText>
    </WListItem>
  )
}

export default ListText;