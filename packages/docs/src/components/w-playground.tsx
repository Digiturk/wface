import * as React from 'react'
import * as WFace from '@wface/components'
const reactElementToJSXString = require('react-element-to-jsx-string');
import CodeView from './code-view';


export default class WPlayground extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    let codeText = this.props.code;
    if (!codeText) {
      if (Array.isArray(props.children)) {
        codeText = props.children.map((e: any) => reactElementToJSXString(e)).join('\n');
      } else if (this.props.children) {
        codeText = reactElementToJSXString(this.props.children);
      }
    }

    this.state = {
      children: this.props.children,
      codeText: codeText,
      isCodeOpen: this.props.isCodeOpen || false
    }
  }

  btnCollapseClicked = () => {
    this.setState((prev: any) => ({ isCodeOpen: !prev.isCodeOpen }));
    // this.setState({isCodeOpen: true});
  }

  public render() {
    return (
      <div
        style={{
          border: '1px solid rgb(222, 229, 238)',
          borderRadius: 3
        }}>
        <div style={{
          position: 'relative',
          padding: 12,
          borderBottom: '1px solid rgb(222, 229, 238)',
          backgroundColor: 'rgb(245, 247, 255)'
        }}>
          <WFace.WTypography variant="subtitle1" style={{ color: '#65819D', display: 'inline', fontWeight: 500 }}>{this.props.header}</WFace.WTypography>
          <span style={{ top: 0, right: 5, position: 'absolute' }}>
            <WFace.WIconButton onClick={this.btnCollapseClicked}><WFace.WIcon>code</WFace.WIcon></WFace.WIconButton>
          </span>
        </div>
        <div
          style={Object.assign({ padding: 20 }, this.props.style)}
        >
          {this.state.children}
        </div>
        <WFace.WCollapse in={this.state.isCodeOpen} timeout="auto">
          <CodeView code={this.state.codeText}/>           
        </WFace.WCollapse>
      </div>
    )
  }
}
