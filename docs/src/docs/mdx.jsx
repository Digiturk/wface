import React from 'react'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/jsx/jsx'

import Architecture from './get-started/architecture.mdx'
import AdditionalTools from './get-started/additional-tools.mdx'
import Faq from './get-started/faq.mdx'
import Requirements from './get-started/requirements.mdx'
import Setup from './get-started/setup.mdx'
import SupportedPlatforms from './get-started/supported-platforms.mdx'
import Usage from './get-started/usage.mdx'
import Versions from './get-started/versions.mdx'

import CommandList from './cli/command-list.mdx'
import CreateCommand from './cli/commands/create.mdx'
import LinkCommand from './cli/commands/link.mdx'
import RunCommand from './cli/commands/run.mdx'
import VersionCommand from './cli/commands/version.mdx'

import ComponentList from './components/component-list.mdx'
import WButtonComponent from './components/components/W-button.mdx'
import WIconButtonComponent from './components/components/W-icon-button.mdx'

import * as WFace from '@wface/components'

const components = {
  h1: props =>  <div>
                  <WFace.WTypography 
                    variant="display1" {...props}/>
                    <div style={{
                      width: 50,
                      borderBottom: '4px solid #3f51b5',                      
                      borderRadius: 4
                    }}></div>
                  <br/>
                  <br/>
                </div>,
  h2: props => <div><WFace.WTypography variant="headline" {...props} /><br/></div>,
  p: props => <div><WFace.WTypography variant="subheading" {...props} style={{color:'#65819D'}} /><br/></div>,
  a: props => <a href={props.href} 
                style={{
                  color: '#3f51b5',
                  textDecoration: 'none',
                  fontWeight: 500
                }}
                target="_blank">
                {props.children}
              </a>,
  blockquote: props =>  <div>
                          <WFace.WPaper elevation={0} 
                            style={{
                              padding:15, 
                              color: 'rgb(132, 146, 166)',
                              backgroundColor:'rgb(239, 242, 247)', 
                              borderLeft: '4px solid #3f51b5',
                              margin: '0px 3px'
                            }}>                            
                            {props.children.props.children}
                          </WFace.WPaper>
                          <br/>
                        </div>,
  table: props => <table 
                    style={{
                      borderCollapse: 'collapse',                      
                      border: '1px solid',
                      borderColor: '#DEE5EE',
                      borderRadius: 3                      
                    }}>
                      {props.children}
                    </table>,
  thead: props => <thead
                    style={{
                      backgroundColor: '#F5F7FF',                      
                      borderCollapse: 'collapse',                      
                      border: '1px solid',
                      borderColor: '#DEE5EE'
                    }}>
                      {props.children}
                    </thead>,
  th: props => <th style={{padding:'15px 30px 15px 30px'}}><WFace.WTypography variant="subheading" style={{color: '#65819D'}}>{props.children}</WFace.WTypography></th>,
  tbody: props => <tbody >{props.children}</tbody>,
  tr: props => <tr style={{padding: 20, borderTop: '1px solid #DEE5EE'}}>{props.children}</tr>,
  td: props => <td style={{padding: 10, textAlign: 'center'}} ><WFace.WTypography variant="subheading" style={{color: '#91A0B1'}}>{props.children}</WFace.WTypography></td>,

  inlineCode: props =>  <code 
                          style={{
                            backgroundColor: 'rgb(239, 242, 247)', 
                            padding: '3px 5px', 
                            color: 'indianred',
                            borderRadius: 3
                          }}>
                          {props.children}
                        </code>,                    
  code: props => {
    if(props.className === "language-console") {      
      return (
        <div>
          <WFace.WPaper elevation={0} 
            style={{
              padding:15, 
              color: '#DDD',
              backgroundColor:'rgb(40, 44, 52)',
              fontFamily: 'Inconsolata, Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
              fontSize: 16,
              whiteSpace: 'initial'
            }}>                            
            {props.children}
          </WFace.WPaper>
          <br/>
        </div>
      );
    }
    else if (props.className === "language-javascript") {
      return  <CodeMirror
                value={props.children.trim()}
                options={{
                  mode: 'javascript',
                  theme: 'lucario',
                  lineNumbers: false,
                  readOnly: true
                }}
                onChange={(editor, data, value) => {
                }}/>;
    }
    else if (props.className === "language-jsx") {
      return  <CodeMirror
                value={props.children.trim()}
                options={{
                  mode: 'jsx',
                  theme: 'lucario',
                  lineNumbers: false,
                  readOnly: true
                }}
                onChange={(editor, data, value) => {
                }}/>;
    }
    else {
      return <div>{props.children}</div>;
    }
  }
} 

const Mdx = {
  GetStarted: {
    AdditionalTools: () => <AdditionalTools components={components}/>,
    Architecture: () => <Architecture components={components}/>,
    Faq: () => <Faq components={components}/>,
    Requirements: () => <Requirements components={components}/>,
    Setup: () => <Setup components={components}/>,
    SupportedPlatforms: () => <SupportedPlatforms components={components}/>,
    Usage: () => <Usage components={components}/>,
    Versions: () => <Versions components={components}/>
  },
  WFaceCLI: {
    CommandList: () => <CommandList components={components}/>,
    CreateCommand: () => <CreateCommand components={components}/>,
    LinkCommand: () => <LinkCommand components={components}/>,
    RunCommand: () => <RunCommand components={components}/>,
    VersionCommand: () => <VersionCommand components={components}/>
  },
  Components: {
    ComponentList: () => <ComponentList components={components}/>,
    WButtonComponent: () => <WButtonComponent components={components}/>,
    WIconButtonComponent: () => <WIconButtonComponent components={components}/>,    
  }
}

export default Mdx