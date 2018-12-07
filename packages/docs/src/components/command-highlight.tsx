import * as React from 'react'
import * as WFace from '@wface/components'

// deneme
const CommandHighlight = (props:any) => (
  <div>
    <WFace.WPaper elevation={0} 
      style={{
        padding:15, 
        color: '#DDD',
        backgroundColor:'rgb(40, 44, 52)',
        fontFamily: 'Inconsolata, Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
        fontSize: 14,
        whiteSpace: 'initial',
        textAlign: 'left'
      }}>             
      <div style={{color: '#4B8B43', fontSize: 12}}>// {props.dscr}</div>                     
      {props.command} 
    </WFace.WPaper>
    <br/>
  </div>
)

export default CommandHighlight