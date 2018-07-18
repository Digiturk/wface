import * as React from 'react'
import * as WFace from '@wface/components'

export default class PageWrapper extends React.Component<any, any> {
  public render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
