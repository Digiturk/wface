import * as React from 'react'
import { WButton, WTextField, WBasicDialog } from '@wface/components'

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
        <WBasicDialog 
          title="Başlık"
          open={this.state.isOpen}
          actions={[
            {text: 'Kapat', onClick: () => this.setState({isOpen: false})},
            {text: 'Tamam', onClick: () => alert('Tamam tıklandı')},
          ]}
        >
          <WTextField label="Dialog içeriği"/>
        </WBasicDialog>
      </div>
    );
  }
}