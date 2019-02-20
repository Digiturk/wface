import * as React from 'react';
import * as WFace from '@wface/components';

interface DemoScreenState {
  text: string;
  data: any[];
  selected: any;
}

export class DemoScreen extends React.Component<WFace.BaseScreenProps, DemoScreenState> {
  constructor(props: WFace.BaseScreenProps) {
    super(props);

    this.state = this.props.screenData.state || {
      data: [
        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
        { name: 'Hakan', surname: 'Baran', birthYear: 1989, birthCity: 63 },
        { name: 'Baran', surname: 'Baran', birthYear: 1995, birthCity: 63 },
      ],
      selected: null
    }
  }

  public render() {
    return (
      <>
        <WFace.WTable
          columns={[
            { title: 'Adı', field: 'name' },
            { title: 'Soyadı', field: 'surname' },
            { title: 'Doğum Yılı', field: 'birthYear', type: 'numeric' },
            {
              title: 'Doğum Yeri',
              field: 'birthCity',
              lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
            },
          ]}
          data={this.state.data}
          onRowClick={(event, rowData) => this.setState({selected: rowData})}
          title="Demo Title"
          options={{
            pageSize: 5,
            rowStyle: (rowData) => {
              if(rowData === this.state.selected) {
                return { backgroundColor: '#ddd' };
              }
              else {
                return {};
              }
            }
          }}
        />ddd
        {this.state.selected && <div>{this.state.selected.name}</div>}
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