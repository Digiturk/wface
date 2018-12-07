import React from 'react'
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/jsx/jsx'
import * as WFace from '@wface/components'

const mdxComponents = {
  h1: (props: any) => <div>
    <WFace.WTypography
      variant="display1" {...props} />
    <div style={{
      width: 50,
      borderBottom: '4px solid #3f51b5',
      borderRadius: 4
    }}></div>
    <br />
    <br />
  </div>,
  h2: (props: any) => <div><WFace.WTypography variant="headline" {...props} /><br /></div>,  
  p: (props: any) => <div><WFace.WTypography variant="subheading" {...props} style={{ color: '#65819D' }} /><br /></div>,
  ul: (props: any) => <WFace.WList>{props.children}</WFace.WList>,
  li: (props: any) => (
    <WFace.WListItem>
      <WFace.WListItemIcon style={{marginRight: 0, alignSelf: 'flex-start'}}><WFace.WIcon style={{ color: '#65819D' }} iconSize="small">keyboard_arrow_right</WFace.WIcon></WFace.WListItemIcon>
      <WFace.WListItemText><WFace.WTypography variant="subheading" {...props} style={{ color: '#65819D' }} /></WFace.WListItemText>
    </WFace.WListItem>
  ),
  a: (props: any) => <a href={props.href}
    style={{
      color: '#3f51b5',
      textDecoration: 'none',
      fontWeight: 500
    }}>
    {props.children}
  </a>,
  blockquote: (props: any) => <div>
    <WFace.WPaper elevation={0}
      style={{
        padding: 15,
        color: 'rgb(132, 146, 166)',
        backgroundColor: 'rgb(239, 242, 247)',
        borderLeft: '4px solid #3f51b5',
        margin: '0px 3px'
      }}>
      {props.children.props.children}
    </WFace.WPaper>
    <br />
  </div>,
  table: (props: any) => <table
    style={{
      borderCollapse: 'collapse',
      border: '1px solid',
      borderColor: '#DEE5EE',
      borderRadius: 3
    }}>
    {props.children}
  </table>,
  thead: (props: any) => <thead
    style={{
      backgroundColor: '#F5F7FF',
      borderCollapse: 'collapse',
      border: '1px solid',
      borderColor: '#DEE5EE'
    }}>
    {props.children}
  </thead>,
  th: (props: any) => <th style={{ padding: '15px 30px 15px 30px' }}><WFace.WTypography variant="subheading" style={{ color: '#65819D' }}>{props.children}</WFace.WTypography></th>,
  tbody: (props:any) => <tbody >{props.children}</tbody>,
  tr: (props: any) => <tr style={{ padding: 20, borderTop: '1px solid #DEE5EE' }}>{props.children}</tr>,
  td: (props: any) => <td style={{ padding: 10, textAlign: 'left' }} ><WFace.WTypography variant="subheading" style={{ color: '#91A0B1' }}>{props.children}</WFace.WTypography></td>,

  inlineCode: (props: any) => <code
    style={{
      backgroundColor: 'rgb(239, 242, 247)',
      padding: '3px 5px',
      color: 'indianred',
      borderRadius: 3
    }}>
    {props.children}
  </code>,
  code: (props: any) => {
    if (props.className === "language-console") {
      return (
        <div>
          <WFace.WPaper elevation={0}
            style={{
              padding: 15,
              color: '#DDD',
              backgroundColor: 'rgb(40, 44, 52)',
              fontFamily: 'Inconsolata, Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
              fontSize: 16,
              whiteSpace: 'initial'
            }}>
            {props.children}
          </WFace.WPaper>
          <br />
        </div>
      );
    }
    else if (props.className === "language-javascript") {
      return <CodeMirror
        value={props.children.trim()}
        options={{
          mode: 'javascript',
          theme: 'lucario',
          lineNumbers: false,
          readOnly: true
        }}
        onChange={(editor, data, value) => {
        }} />;
    }
    else if (props.className === "language-jsx") {
      return <CodeMirror
        value={props.children.trim()}
        options={{
          mode: 'jsx',
          theme: 'lucario',
          lineNumbers: false,
          readOnly: true
        }}
        onChange={(editor, data, value) => {
        }} />;
    }
    else {
      return <div>{props.children}</div>;
    }
  }
}

export default mdxComponents;
