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

import CommandList from './cli/command-list.mdx'
import CreateCommand from './cli/commands/create.mdx'
import VersionCommand from './cli/commands/version.mdx'

import ComponentList from './components/component-list.mdx'
import WAppBarComponent from './components/components/bars/w-app-bar.mdx'
import WAvatarComponent from './components/components/medias/w-avatar.mdx'
import WBasicDialogComponent from './components/components/dialogs/w-basic-dialog.mdx'
import WButtonComponent from './components/components/buttons/w-button.mdx'
import WCardComponent from './components/components/layouts/w-card.mdx'
import WCheckboxComponent from './components/components/inputs/w-checkbox.mdx'
import WChipComponent from './components/components/others/w-chip.mdx'
import WCircularProgressComponent from './components/components/progress/w-circular-progress.mdx'
import WCollapseComponent from './components/components/layouts/w-collapse.mdx'
import WDateTimePickerComponent from './components/components/inputs/w-date-time-picker.mdx'
import WDatePickerComponent from './components/components/inputs/w-date-picker.mdx'
import WDialogComponent from './components/components/dialogs/w-dialog.mdx'
import WDividerComponent from './components/components/layouts/w-divider.mdx'
import WDrawerComponent from './components/components/layouts/w-drawer.mdx'
import WFormComponent from './components/components/forms/w-form.mdx'
import WExpansionPanelComponent from './components/components/layouts/w-expansion-panel.mdx'
import WGridComponent from './components/components/layouts/w-grid.mdx'
import WIconButtonComponent from './components/components/buttons/w-icon-button.mdx'
import WIconComponent from './components/components/medias/w-icon.mdx'
import WLinearProgressComponent from './components/components/progress/w-linear-progress.mdx'
import WListComponent from './components/components/lists/w-list.mdx'
import WLoadingButtonComponent from './components/components/buttons/w-loading-button.mdx'
import WMenuComponent from './components/components/lists/w-menu.mdx'
import WMessageDialogComponent from './components/components/dialogs/w-message-dialog.mdx'
import WNotificationBarComponent from './components/components/bars/w-notification-bar.mdx'
import WPaperComponent from './components/components/layouts/w-paper.mdx'
import WRadioGroupComponent from './components/components/inputs/w-radio-group.mdx'
import WSelectComponent from './components/components/inputs/w-select.mdx'
import WSwipeableViewComponent from './components/components/layouts/w-swipeable-view.mdx'
import WSwitchComponent from './components/components/inputs/w-switch.mdx'
import WTableComponent from './components/components/tables/w-table.mdx'
import WTabContainerComponent from './components/components/layouts/w-tab-container.mdx'
import WTextFieldComponent from './components/components/inputs/w-text-field.mdx'
import WTimePickerComponent from './components/components/inputs/w-time-picker.mdx'
import WToolBarComponent from './components/components/bars/w-tool-bar.mdx'
import WTooltipComponent from './components/components/others/w-tooltip.mdx'
import WTypographyComponent from './components/components/others/w-typography.mdx'

import V070Component from './versions/v0.7.0.mdx'
import V080Component from './versions/v0.8.0.mdx'

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
  td: props => <td style={{padding: 10, textAlign: 'left'}} ><WFace.WTypography variant="subheading" style={{color: '#91A0B1'}}>{props.children}</WFace.WTypography></td>,

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
  },
  WFaceCLI: {
    CommandList: () => <CommandList components={components}/>,
    CreateCommand: () => <CreateCommand components={components}/>,
    VersionCommand: () => <VersionCommand components={components}/>
  },
  Components: {
    ComponentList: () => <ComponentList components={components}/>,
    WAppBarComponent: () => <WAppBarComponent components={components}/>,        
    WAvatarComponent: () => <WAvatarComponent components={components}/>,        
    WBasicDialogComponent: () => <WBasicDialogComponent components={components}/>,  
    WButtonComponent: () => <WButtonComponent components={components}/>,
    WCardComponent: () => <WCardComponent components={components}/>,            
    WCheckboxComponent: () => <WCheckboxComponent components={components}/>,            
    WChipComponent: () => <WChipComponent components={components}/>,                
    WCircularProgressComponent: () => <WCircularProgressComponent components={components}/>,  
    WCollapseComponent: () => <WCollapseComponent components={components}/>,            
    WDateTimePickerComponent: () => <WDateTimePickerComponent components={components}/>,
    WDatePickerComponent: () => <WDatePickerComponent components={components}/>,
    WDialogComponent: () => <WDialogComponent components={components}/>,
    WDividerComponent: () => <WDividerComponent components={components}/>,
    WDrawerComponent: () => <WDrawerComponent components={components}/>,
    WExpansionPanelComponent: () => <WExpansionPanelComponent components={components}/>,    
    WFormComponent: () => <WFormComponent components={components}/>,        
    WGridComponent: () => <WGridComponent components={components}/>,                    
    WIconButtonComponent: () => <WIconButtonComponent components={components}/>,    
    WIconComponent: () => <WIconComponent components={components}/>,
    WLinearProgressComponent: () => <WLinearProgressComponent components={components}/>,    
    WListComponent: () => <WListComponent components={components}/>,
    WLoadingButtonComponent: () => <WLoadingButtonComponent components={components}/>,
    WMessageDialogComponent: () => <WMessageDialogComponent components={components}/>,
    WMenuComponent: () => <WMenuComponent components={components}/>,    
    WNotificationBarComponent: () => <WNotificationBarComponent components={components}/>,    
    WPaperComponent: () => <WPaperComponent components={components}/>,    
    WRadioGroupComponent: () => <WRadioGroupComponent components={components}/>,    
    WSelectComponent: () => <WSelectComponent components={components}/>,    
    WSwipeableViewComponent: () => <WSwipeableViewComponent components={components}/>,    
    WSwitchComponent: () => <WSwitchComponent components={components}/>,        
    WTableComponent: () => <WTableComponent components={components}/>,            
    WTabContainerComponent: () => <WTabContainerComponent components={components}/>,    
    WTextFieldComponent: () => <WTextFieldComponent components={components}/>,    
    WTimePickerComponent: () => <WTimePickerComponent components={components}/>,
    WToolBarComponent: () => <WToolBarComponent components={components}/>,    
    WTooltipComponent: () => <WTooltipComponent components={components}/>,        
    WTypographyComponent: () => <WTypographyComponent components={components}/>,    
  },
  Versions: {
    V070Component: () => <V070Component components={components}/>,
    V080Component: () => <V080Component components={components}/>,
  },
}

export default Mdx
