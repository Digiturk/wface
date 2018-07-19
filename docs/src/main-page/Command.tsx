import * as React from 'react';
import * as WFace from '@wface/components';

export default class Command extends React.Component<any, any> {

  public render() {
    return (
      <WFace.WListItem style={{background: "#eee"}}> 
        <WFace.WListItemText primary={"> " + this.props.command} secondary={"// " + this.props.desc}/>     
        <WFace.WDivider/>   
      </WFace.WListItem>         
    );
  }
}

