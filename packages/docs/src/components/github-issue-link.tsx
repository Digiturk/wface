
import * as React from 'react'

export default (props: {no: string}) => (
  <a 
    target="_blank"
    href={"https://github.com/digiturk-dev/wface/issues/" + props.no}
    style={{
      color: '#3f51b5',
      textDecoration: 'none',
      fontWeight: 500,
      textAlign: 'center',
      display: 'block'
    }}>
    #{props.no}
  </a>
  
)