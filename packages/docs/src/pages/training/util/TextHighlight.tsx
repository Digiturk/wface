import * as React from 'react';

const TextHighLight = (props:{text: string}) => (
  <React.Fragment>
    {props.text.substr(0, 1)}<span style={{opacity: 0.3}}>{props.text.substr(1)}</span><br/>
  </React.Fragment>
)

export default TextHighLight