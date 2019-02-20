import * as React from 'react';
import * as WFace from '@wface/components';

interface DemoScreenState {
  isDialogOpen: boolean;
}

export class DemoScreen extends React.Component<WFace.BaseScreenProps, DemoScreenState> {
  constructor(props: WFace.BaseScreenProps) {
    super(props);

    this.state = this.props.screenData.state || {
      isDialogOpen: false
    }
  }

  public render() {
    return (
      <>
        <WFace.WCard>
          <WFace.WCardContent>
            <WFace.WSelect
              label="Şehir"
              options={[
                { label: 'Adana', value: '1' },
                { label: 'Gaziantep', value: '27' },
                { label: 'İstanbul', value: '34' },
                { label: 'Şanlıurfa', value: '63' }
              ]}
            />
          </WFace.WCardContent>
          <WFace.WCardActions>
            <WFace.WButton onClick={() => this.setState({isDialogOpen: true})}>Dialog</WFace.WButton>
          </WFace.WCardActions>
        </WFace.WCard>
        <WFace.WBasicDialog open={this.state.isDialogOpen} onClose={() => this.setState({isDialogOpen: false})} fullWidth>
          <WFace.WSelect
            label="Şehir"
            options={[
              { label: 'Adana', value: '1' },
              { label: 'Gaziantep', value: '27' },
              { label: 'İstanbul', value: '34' },
              { label: 'Şanlıurfa', value: '63' }
            ]}
          />
        </WFace.WBasicDialog>
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
        style={{ width: size, height: size, display: 'inline-block' }}
        src={props.src}
      />
      {props.isLoading &&
        <div style={{ position: 'absolute', width: size, height: size, background: '#FFFFFF88', borderRadius: '50%' }}>
          <WFace.WCircularProgress size={size} />
        </div>
      }

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