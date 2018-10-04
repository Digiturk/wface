import * as React from 'react'
import { WButton, WTextField, WMessageDialog } from '@wface/components'

export default class WBasicDialogExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  public render() {
    return (
      <div>
        <WButton onClick={() => this.setState({isOpen: true})}>Dialogu Aç</WButton>
        <WMessageDialog 
          title="Başlık"
          open={this.state.isOpen}
          buttons="YesNo"
          onButtonClick={(event, button) => { 
            alert(button + " tıklandı");
            this.setState({isOpen: false});
          }}
          text="WMessageDialog içeriği"
        />
      </div>
    );
  }
}