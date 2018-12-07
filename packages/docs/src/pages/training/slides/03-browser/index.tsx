import * as React from 'react';
import { WTypography, WGrid, WIcon } from '@wface/components';
import constants from '../../util/constants';
import { Prompt } from './components/prompt';
import { Redirect } from './components/redirect';
import { Dns } from './components/dns';
import { Tcp } from './components/tcp';
import { Request } from './components/request';
import { Response } from './components/response';
import { Processing } from './components/processing';

export interface BrowserProps {
}

export class Browser extends React.Component<BrowserProps, any> {
  colors = {
    client: '#3F51B5',
    network: '#FFA726',
    server: '#4CAF50'
  }

  constructor(props: any) {
    super(props)
    this.state = {
      component: undefined
    }
  }

  onItemClick = (component: any) => {
    if(component) {
      this.setState((prevState: any) => ({ component: prevState.component == component ? undefined : component }));
    }
  }

  public render() {
    return (
      <div style={{ display: 'flex', textAlign: 'center', height: '100%', flexDirection: 'column', width: '100%' }}>
        <div style={{ height: this.state.component ? '0%' : '20%', transition: constants.transition}}></div>              
        <div style={{ height: this.state.component ? '0%' : '20%', transition: constants.transition, opacity: this.state.component ? 0 : 1 }}>
          <WTypography variant="h3" style={{ color: constants.primaryColor, fontWeight: 500 }}>
            Web Uygulamasının Yüklenmesi
          </WTypography>
        </div>
        <div style={{ height: this.state.component ? '30%' : '70%', transition: constants.transition }}>
          <WGrid container style={{ padding: '0 10px' }}>
            <Box text="Client" height={30} color={this.colors.client} />
            <Box text="Network" height={30} xs={3} color={this.colors.network} />
            <Box text="Server" height={30} xs={4} color={this.colors.server} />
            <Box text="Client" height={30} xs={4} color={this.colors.client} />
          </WGrid>
          <WGrid container style={{ padding: '0 10px' }}>
            <Box text="Prompt for unload" color={this.colors.client} component={Prompt} render={this.state.component} onClick={this.onItemClick}/>
            <Box text="Redirect" color={this.colors.network} component={Redirect} render={this.state.component}onClick={this.onItemClick}/>
            <Box text="DNS" color={this.colors.network} component={Dns} render={this.state.component}onClick={this.onItemClick}/>
            <Box text="TCP" color={this.colors.network} component={Tcp} render={this.state.component}onClick={this.onItemClick}/>
            <Box text="Request" xs={2} color={this.colors.server} component={Request} render={this.state.component}onClick={this.onItemClick}/>
            <Box text="Response" xs={2} color={this.colors.server} component={Response} render={this.state.component}onClick={this.onItemClick}/>
            <Box text="Processing - Load" xs={4} color={this.colors.client} component={Processing} render={this.state.component}onClick={this.onItemClick}/>
          </WGrid>
        </div>
        <div style={{ height: this.state.component ? '70%' : '0%', transition: constants.transition, opacity: this.state.component ? 1 : 0}}>
          {this.state.component && <this.state.component/>}          
        </div>
      </div >
    );
  }
}

const Box = (props: any) => {
  return (
    <WGrid 
      item 
      xs={props.xs || 1} 
      style={{cursor: props.component && 'pointer'}} 
      onClick={() => props.onClick(props.component) }
    >
      <div
        style={{
          backgroundColor: props.color + ((props.render && props.component == props.render) || (!props.render && props.component) ? "FF" : "88"),
          height: props.height || 100,
          borderRadius: 5,
          padding: '0 5px',
          transition: constants.transition,
          transform: (props.render) ? (props.component == props.render) ? 'scale(1.05)' : 'scale(0.85)' : 'scale(1)',
          margin: 5
        }}
      >
        <div style={{ display: 'table', height: '100%', width: '100%' }}>
          <div style={{ color: 'white', fontWeight: 600, display: 'table-cell', verticalAlign: 'middle' }}>
            {props.text}
          </div>
        </div>
      </div>
    </WGrid>
  )
}
