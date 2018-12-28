import * as React from 'react';
import * as WFace from '@wface/components';

interface DemoScreenState {
  isLoading: boolean;
  text: string
}

export class DemoScreen extends React.Component<WFace.BaseScreenProps, DemoScreenState> {
  constructor(props: WFace.BaseScreenProps) {
    super(props);

    this.state = this.props.screenData.state || {
      isLoading: false,
      text: 'A'
    }
  }

  public render() {
    
    return (
      <>        
        Text: {this.state.text}
        <br/>
        <ImageUpload 
          src="https://www.w3schools.com/howto/img_avatar.png" 
          isLoading={this.state.isLoading}
          size={128}
          onChange={(e) => console.log(e.target.files)}
        />        

        <WFace.WButton onClick={() => {         
          this.setState({isLoading: true, text: 'B'}, () => {
            this.props.changeScreenMode('loading');
            setTimeout(() => { 
              this.setState({isLoading: false, text: 'C'}, () => this.props.changeScreenMode('normal'));
            }, 3000)
          });
          
        }}>
          Getir
        </WFace.WButton>
        
        <br/>
        <br/>
        <br/>
        <br/>
        <WFace.WButton onClick={() => this.setState({isLoading: !this.state.isLoading})}>Load</WFace.WButton>
      </>
    )
  }
}

const ImageUpload = props => {  
  const size = props.size || 48;
  return (
    <label style={{ display: 'inline-flex', position: 'relative', width: size, height: size }}>
      <WFace.WAvatar
        sizes={size}
        style={{width: size, height:size, display: 'inline-block'}}
        src={props.src}
      />
      {props.isLoading &&
        <div style={{ position: 'absolute', width: size, height: size, background: '#FFFFFF88', borderRadius: '50%' }}>
          <WFace.WCircularProgress size={size}/>
        </div>
      }
      
      {/* <div style={{ position: 'absolute', padding: 4, backgroundColor: 'white', right: 7, bottom: 7, borderRadius: '50%', color: 'white' }}>
        <WFace.WIcon icon="camera" />
      </div>
      
      <div style={{ position: 'absolute', padding: 4, backgroundColor: 'transparent', right: 7, bottom: 7, borderRadius: '50%', color: '#888' }}>
        <WFace.WIcon icon="camera" />
      </div> */}


      <input
        type="file"
        id="file"
        name="file"
        style={{ visibility: 'hidden', width: 0, height: 0, backgroundColor: 'green' }}
        accept={
          props.allowGif ? '.png, .jpg, .jpeg, .gif, .mp4' : '.png, .jpg, .jpeg'
        }
        multiple={false}
        onChange={props.onChange}
      />
    </label>
  )
}