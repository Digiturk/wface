import * as React from 'react'
import { WAppBar, WTabs, WTab } from '@wface/components'

export default class WTabsExampleSimple extends React.Component<any, any> {
  constructor(props:any) {
    super(props);
    this.state = {
      value: 0
    }
  }

  handleChange = (event:any, value:any) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>
        <WAppBar position="static">
          <WTabs value={value} onChange={this.handleChange} centered>
            <WTab label="Item One" />
            <WTab label="Item Two" />
            <WTab label="Item Three" />
          </WTabs>
        </WAppBar>
        {value === 0 && "Item One"}
        {value === 1 && "Item Two"}
        {value === 2 && "Item Three"}
      </div>
    );
  }
}