import * as React from 'react'
import { WPaper, WTabs, WTab, WIcon} from '@wface/components'

export default class WTabsExampleIcon extends React.Component<any, any> {
  constructor(props:any) {
    super(props)
    this.state = {
      value: 0,
    };
  }
  

  handleChange = (event:any, value:any) => {
    this.setState({ value });
  };

  render() {
    return (
      <WPaper style={{ width: 500 }}>
        <WTabs
          value={this.state.value}
          onChange={this.handleChange}
          fullWidth
          indicatorColor="primary"
          textColor="primary"
        >
          <WTab icon={<WIcon>phone</WIcon>} />
          <WTab icon={<WIcon>favorite</WIcon>} />
          <WTab icon={<WIcon>person</WIcon>} />
        </WTabs>
      </WPaper>
    );
  }
}