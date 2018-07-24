import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as WFace from '@wface/components'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/mode/jsx/jsx'
const reactElementToJSXString = require('react-element-to-jsx-string');



export default class WPlayground extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    let codeText = '';
    if(Array.isArray(props.children)){
      codeText = props.children.map((e:any) => { return reactElementToJSXString(e) }).join('\n');
    } else {
      codeText = reactElementToJSXString(this.props.children);  
    }

    this.state = {
      children: this.props.children,
      codeText: codeText
    }
  }

  public render() {
    return  <div 
              style={{
                border: '1px solid rgb(222, 229, 238)',
                borderRadius: 3
              }}>           
              <div
                style={{
                  backgroundColor: 'rgb(245, 247, 255)',
                  padding: 20,
                }}>
                {this.state.children}
              </div>
              <CodeMirror
                value={this.state.codeText}
                options={{
                  mode: 'jsx',
                  theme: 'lucario',
                  lineNumbers: false,
                  readOnly: true
                }}/>
            </div>;
  }
}
