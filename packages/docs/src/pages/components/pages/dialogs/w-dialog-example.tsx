import * as React from 'react'
import { 
  WButton, WTextField, WDialog, 
  WDialogActions, WDialogContentText,
  WDialogContent, WDialogTitle, WTypography
} from '@wface/components'

export default class WDialogExample extends React.Component<any, any> {
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
        <WDialog 
          open={this.state.isOpen}          
        >
          <WDialogTitle> 
            <WTypography color="primary">Başlık</WTypography>
          </WDialogTitle>
          <WDialogContent>            
              <WTextField label="dialog içeriği"/>
          </WDialogContent>
          <WDialogActions>
            <WButton onClick={() => this.setState({isOpen: false})} color="primary">KAPAT</WButton>
          </WDialogActions>
        </WDialog>
      </div>
    );
  }
}