
import * as React from 'react'
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/mode/jsx/jsx'

export interface CodeMirrorProps {
  code?: string;
  children?: string;
  lineNumbers?: boolean;
  selection: {ranges:any[], focus?: boolean}
}
export default (props: CodeMirrorProps) => (
  <CodeMirror
    value={props.code || props.children}
    selection={props.selection}
    options={{
      mode: 'jsx',
      theme: 'lucario',
      lineNumbers: props.lineNumbers,
      readOnly: true,      
    }} />
)


/*
selection={{
    ranges: [{
      anchor: {ch: 8, line: 5},
      head: {ch: 37, line: 5}
    }],
    focus: true // defaults false if not specified
  }}
*/