import * as React from 'react'
import * as WFace from '@wface/components'

// deneme
const ProjectStructure = (props:any) => (
  <div>
    <WFace.WPaper elevation={0} 
      style={{
        padding:15, 
        color: '#3d4550',
        backgroundColor:'rgb(239, 242, 247)',
        fontFamily: 'Inconsolata, Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
        fontSize: 14,
        whiteSpace: 'pre',
        textAlign: 'left'
      }}>             
      {
        props.files.map((file:any) => 
          <div>
            <span style={{width: 185, display: 'inline-block'}}>{file.text}</span>
            <span style={{color: '#4B8B43', fontSize: 11}}>// {file.description}</span>
          </div>
        )
      }
    </WFace.WPaper>
    <br/>
  </div>
)

export default ProjectStructure