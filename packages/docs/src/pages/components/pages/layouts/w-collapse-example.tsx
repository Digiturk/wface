import * as React from 'react'
import { WCollapse, WButton, WCard, WCardHeader, WCardContent, WCardActions } from '@wface/components'

export default class WCollapseExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isOpen: true
    }
  }

  public render() {
    return (
      <div>
        <WButton onClick={() => this.setState((prev:any) => ({isOpen: !prev.isOpen}))}>Kartı Kapa/Aç</WButton>
        <WCollapse in={this.state.isOpen} timeout="auto">
          <WCard>
            <WCardHeader 
              title="Card Title"
              subheader="Card Subheader"/>
            <WCardContent>
              Content
            </WCardContent>
            <WCardActions>
              <WButton variant="text" size="small">Card Action 1</WButton>
              <WButton variant="text" size="small">Card Action 2</WButton>
            </WCardActions>
          </WCard>
        </WCollapse>
      </div>
    );
  }
}