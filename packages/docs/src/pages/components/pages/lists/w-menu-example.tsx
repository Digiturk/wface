import * as React from 'react'
import { WButton, WMenu, WMenuItem } from '@wface/components'

export default class WMenuExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      anchorEl: null
    }
  }

  handleClick = (event:any) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  public render() {
    return (
      <div>
        <WButton onClick={this.handleClick}>Menüyü Aç/Kapa</WButton>
        <WMenu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleClose}>
          <WMenuItem onClick={this.handleClose}>Profile</WMenuItem>
          <WMenuItem onClick={this.handleClose}>My account</WMenuItem>
          <WMenuItem onClick={this.handleClose}>Logout</WMenuItem>
        </WMenu>
      </div>
    );
  }
}