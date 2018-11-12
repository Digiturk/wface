import * as React from 'react'
import * as WFace from '@wface/components'
import { withStyles, Divider } from '@material-ui/core';
import { Route } from 'react-router';
import Mdx from './mdx'
import { Link } from 'react-router-dom'

class Docs extends React.Component<any, any> {    

  constructor(props:any) {
    super(props);

    this.state = {
      currentScreen: menuTree[0].subNodes[0],
      expandedItems: []
    }
  }

  public componentDidMount() {
    let currentScreen = menuTree[0].subNodes[0];
    this.menuTreeForEach(menuTree, (item:any) => {
      if(((this.props as any).match.url + '/' + item.path) === (this.props as any).location.pathname){
          currentScreen = item;
          return true;
      }
      return false;                        
    });

    if(currentScreen) {
        this.openScreen(currentScreen);
    }
  }

  private menuTreeForEach(nodes: any, callback: any) {
    for(let i = 0; i < nodes.length; i++) {
      const item = nodes[i];   
      if(item.subNodes && item.subNodes.length > 0){
        if(this.menuTreeForEach(item.subNodes, callback)) {
          break;
        }
      }
      else {
        if(callback(item)) {
          break;
        }
      }                
    }
  }

  private openScreen(screen: any) {
    this.setState({currentScreen: screen});
    this.props.history.replace((this.props as any).match.url + '/' + screen.path);   
  }  

  private getScreenWithId(id: any): any {
    let result = undefined;

    this.menuTreeForEach([{subNodes:menuTree}], (item:any) => {
      if(id === item.id) {
        result = item;
      }
    });

    return result;
  }

  private handleNodeClick = (id: string) => {
    this.setState((prev:any) => { 
      const list = prev.expandedItems;
      const index = list.indexOf(id);
      if(index > -1) {
        list.splice(index, 1);
      }
      else {
        list.push(id);
      }

      return { expandedItems: list };
    });
  };

  private renderNavItem(item: any, nestingLevel: number = 0): React.ReactNode {
    const { classes } = this.props;
    
    const itemStyle = {
        paddingLeft: 20 + 20 * nestingLevel
    }

    if(item.subNodes && item.subNodes.length > 0) {
      const open = this.state.expandedItems.indexOf(item.id) > -1;
      return (
        <div key={item.id}>
          {item.divideBefore && <WFace.WDivider/>}
          <WFace.WListItem key={item.id} button onClick={() => { this.handleNodeClick(item.id)}} style={itemStyle}>
            <WFace.WListItemText primary={item.text} style={{fontWeight:'bold'}}/>
            <WFace.WIcon>{open ? 'expand_less' : 'expand_more'}</WFace.WIcon>              
          </WFace.WListItem>                    
          <WFace.WCollapse in={open} timeout="auto">
            <WFace.WList component="div" disablePadding dense>
              { item.subNodes.map((subItem: any) => { return this.renderNavItem(subItem, nestingLevel + 1); }) }
            </WFace.WList>
          </WFace.WCollapse>
        </div>
      );
    }
    else {      
      let listItemTextStyle = {};
      let listItemStyle = Object.assign({}, itemStyle) as any;
      
      if(item.id === this.state.currentScreen.id) {
        listItemTextStyle = {
          color:'#3f51b5',
          fontWeight: 500          
        };

        listItemStyle.backgroundColor = 'rgb(239, 242, 247)';
      }

      return (        
        <WFace.WListItem key={item.id} button style={listItemStyle} onClick={() => { this.openScreen(item)}} >
          <WFace.WListItemText primary={<div style={listItemTextStyle as any}>{item.text}</div>}/>
        </WFace.WListItem>
      );
    }
  }

  public render() {
    const { classes } = this.props;
    const prevButtonData = this.state.currentScreen.prev && this.getScreenWithId(this.state.currentScreen.prev);
    const nextButtonData = this.state.currentScreen.next && this.getScreenWithId(this.state.currentScreen.next);

    return (
      <WFace.WGrid container className={classes.root}>
        <WFace.WGrid item lg={1}/>  
        <WFace.WGrid item xs={12} sm={12} md={4} lg={3}>                        
          <WFace.WPaper>
            <WFace.WList 
              key="NavListKey"
              dense
              component="nav">
              {
                menuTree.map(item => {
                  return this.renderNavItem(item);
                })
              }                    
            </WFace.WList>
          </WFace.WPaper>
        </WFace.WGrid>  
        <WFace.WGrid item xs={12} sm={12} md={8} lg={7}>
          <WFace.WPaper className={classes.content}>
            {this.state.currentScreen && 
              <Route key={this.state.currentScreen.id} path={(this.props as any).match.url + '/' + this.state.currentScreen.path} component={this.state.currentScreen.mdx}/> 
            }
          </WFace.WPaper>
          <div style={{marginTop:30, marginLeft:30, marginRight:18, paddingBottom:200}}>
            {prevButtonData && 
              <WFace.WButton 
                variant="outlined" 
                color="primary" 
                onClick={() => this.openScreen(prevButtonData)}>
                <WFace.WIcon style={{marginRight:10}}>arrow_back_ios</WFace.WIcon>
                {prevButtonData.text}
              </WFace.WButton>
            }
            {nextButtonData &&
              <WFace.WButton 
                style={{float:"right"}} 
                variant="outlined" 
                color="primary"
                onClick={() => this.openScreen(nextButtonData)}>
                {nextButtonData.text}
                <WFace.WIcon style={{marginLeft:10}}>arrow_forward_ios</WFace.WIcon>
              </WFace.WButton>
            }
          </div>
        </WFace.WGrid>
      </WFace.WGrid>  
    );
  }
}

const styles = (theme:any) => ({
  root: {
    marginTop: 30
  },
  navListRoot: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  navListActive: {
    color: 'red'
  },
  content: {
    marginLeft: 30,
    marginRight: 20,    
    padding:60
  }  
});

const menuTree = [
  {            
    id: '1',    
    text: 'Başlangıç',
    subNodes: [
      {
        id: '1.-1',
        text: 'WFace Framework',
        path: 'GetStarted/Architecture',
        mdx: Mdx.GetStarted.Architecture,
        next: '1.0'
      },
      {
        id: '1.0',
        text: 'Gereksinimler',
        path: 'GetStarted/Requirements',
        mdx: Mdx.GetStarted.Requirements,
        prev: '1.-1',
        next: '1.1'
      },
      {
        id: '1.1',
        text: 'Kurulum',
        path: 'GetStarted/Setup',
        mdx: Mdx.GetStarted.Setup,
        prev: '1.0',
        next: '1.2'
      },
      {
        id: '1.2',
        text: 'Kullanım',
        path: 'GetStarted/Usage',
        mdx: Mdx.GetStarted.Usage,
        prev: '1.1',
        next: '1.3'
      },
      {
        id: '1.3',
        text: 'Ek Araçlar',
        path: 'GetStarted/AdditionalTools',
        mdx: Mdx.GetStarted.AdditionalTools,
        prev: '1.2',
        next: '1.4'
      },
      {
        id: '1.4',
        text: 'Desteklenen Ortamlar',
        path: 'GetStarted/SupportedPlatforms',
        mdx: Mdx.GetStarted.SupportedPlatforms,
        prev: '1.3',
        next: '1.5'
      },
      {
        id: '1.5',
        text: 'Sık Sorulan Sorular',
        path: 'GetStarted/Faq',
        mdx: Mdx.GetStarted.Faq,
        prev: '1.4',
        next: '1.6'
      }
    ]
  },
  {
    id: '2', 
    text: 'WFace CLI',
    subNodes: [
      {
        id: '2.0',
        text: 'Komut Listesi',
        path: 'WFaceCLI/CommandList',        
        mdx: Mdx.WFaceCLI.CommandList,
        next: '2.1'
      },
      {
        id: '2.1',
        text: 'Create',
        path: 'WFaceCLI/CreateCommand',        
        mdx: Mdx.WFaceCLI.CreateCommand,
        prev: '2.0',
        next: '2.2'
      },
      {
        id: '2.2',
        text: 'Version',
        path: 'WFaceCLI/VersionCommand',        
        mdx: Mdx.WFaceCLI.VersionCommand,
        prev: '2.1'        
      }
    ]
  },
  {
    id: '3',
    text: 'Bileşenler',
    subNodes: [
      {
        id: '3.0',
        text: 'Bileşen Kullanımı',
        path: 'Components/ComponentList',
        mdx: Mdx.Components.ComponentList
      },
      {
        id: '3.1',
        text: 'Barlar',
        subNodes: [
          {
            id: '3.1.1',
            text: 'WAppBar',
            path: 'Components/WAppBar',
            mdx: Mdx.Components.WAppBarComponent
          },
          {
            id: '3.1.2',
            text: 'WNotificationBar',
            path: 'Components/WNotificationBar',
            mdx: Mdx.Components.WNotificationBarComponent
          },
          {
            id: '3.1.3',
            text: 'WToolBar',
            path: 'Components/WToolBar',
            mdx: Mdx.Components.WToolBarComponent
          },
        ]
      },
      { 
        id: '3.2',
        text: 'Butonlar',
        subNodes: [
          {
            id: '3.2.1',
            text: 'WButton',
            path: 'Components/WButton',
            mdx: Mdx.Components.WButtonComponent
          },
          {
            id: '3.2.2',
            text: 'WIconButton',
            path: 'Components/WIconButton',
            mdx: Mdx.Components.WIconButtonComponent
          },
          {
            id: '3.2.3',
            text: 'WLoadingButton',
            path: 'Components/WLoadingButton',
            mdx: Mdx.Components.WLoadingButtonComponent
          }
        ]
      },  
      { 
        id: '3.3',
        text: 'Dialoglar',
        subNodes: [
          {
            id: '3.3.1',
            text: 'WBasicDialog',
            path: 'Components/WBasicDialog',
            mdx: Mdx.Components.WBasicDialogComponent
          },
          {
            id: '3.3.2',
            text: 'WDialog',
            path: 'Components/WDialog',
            mdx: Mdx.Components.WDialogComponent
          },
          {
            id: '3.3.3',
            text: 'WMessageDialog',
            path: 'Components/WMessageDialog',
            mdx: Mdx.Components.WMessageDialogComponent
          }
        ]
      },
      {
        id: '3.4',
        text: 'Formlar',
        subNodes: [
          {
            id: '3.4.1',
            text: 'WForm',
            path: 'Components/WForm',
            mdx: Mdx.Components.WFormComponent
          }
        ]
      },
      {
        id: '3.5',
        text: 'Inputlar',
        subNodes: [
          {
            id: '3.5.1',
            text: 'WCheckbox',
            path: 'Components/WCheckbox',
            mdx: Mdx.Components.WCheckboxComponent
          },
          {
            id: '3.5.2',
            text: 'WDateTimePicker',
            path: 'Components/WDateTimePicker',
            mdx: Mdx.Components.WDateTimePickerComponent
          },
          {
            id: '3.5.3',
            text: 'WDatePicker',
            path: 'Components/WDatePicker',
            mdx: Mdx.Components.WDatePickerComponent
          },
          {
            id: '3.5.4',
            text: 'WRadioGroup',
            path: 'Components/WRadioGroup',
            mdx: Mdx.Components.WRadioGroupComponent
          },
          {
            id: '3.5.5',
            text: 'WSelect',
            path: 'Components/WSelect',
            mdx: Mdx.Components.WSelectComponent
          },
          {
            id: '3.5.6',
            text: 'WSwitch',
            path: 'Components/WSwitch',
            mdx: Mdx.Components.WSwitchComponent
          },
          {
            id: '3.5.7',
            text: 'WTextField',
            path: 'Components/WTextField',
            mdx: Mdx.Components.WTextFieldComponent
          },
          {
            id: '3.5.8',
            text: 'WTimePicker',
            path: 'Components/WTimePicker',
            mdx: Mdx.Components.WTimePickerComponent
          },
        ]
      },
      {
        id: '3.6',
        text: 'Layoutlar',
        subNodes: [
          {
            id: '3.6.1',
            text: 'WCard',
            path: 'Components/WCard',
            mdx: Mdx.Components.WCardComponent
          },
          {
            id: '3.6.2',
            text: 'WCollapse',
            path: 'Components/WCollapse',
            mdx: Mdx.Components.WCollapseComponent
          },
          {
            id: '3.6.3',
            text: 'WDivider',
            path: 'Components/WDivider',
            mdx: Mdx.Components.WDividerComponent
          },
          {
            id: '3.6.4',
            text: 'WDrawer',
            path: 'Components/WDrawer',
            mdx: Mdx.Components.WDrawerComponent
          },
          {
            id: '3.6.5',
            text: 'WExpansionPanel',
            path: 'Components/WExpansionPanel',
            mdx: Mdx.Components.WExpansionPanelComponent
          },
          {
            id: '3.6.6',
            text: 'WGrid',
            path: 'Components/WGrid',
            mdx: Mdx.Components.WGridComponent
          },
          {
            id: '3.6.7',
            text: 'WPaper',
            path: 'Components/WPaper',
            mdx: Mdx.Components.WPaperComponent
          },
          {
            id: '3.6.8',
            text: 'WSwipeableView',
            path: 'Components/WSwipeableView',
            mdx: Mdx.Components.WSwipeableViewComponent
          },
          {
            id: '3.6.9',
            text: 'WTabs',
            path: 'Components/WTabs',
            mdx: Mdx.Components.WTabsComponent
          },
        ]
      },
      {
        id: '3.7',
        text: 'Listeler',
        subNodes: [
          {
            id: '3.7.1',
            text: 'WList',
            path: 'Components/WList',
            mdx: Mdx.Components.WListComponent
          },
          {
            id: '3.7.2',
            text: 'WMenu',
            path: 'Components/WMenu',
            mdx: Mdx.Components.WMenuComponent
          },
        ]
      },
      {
        id: '3.8',
        text: 'Media Bileşenleri',
        subNodes: [
          {
            id: '3.8.1',
            text: 'WAvatar',
            path: 'Components/WAvatar',
            mdx: Mdx.Components.WAvatarComponent
          },
          {
            id: '3.8.2',
            text: 'WIcon',
            path: 'Components/WIcon',
            mdx: Mdx.Components.WIconComponent
          },
        ]
      },
      { 
        id: '3.9',
        text: 'Progress Barlar',
        subNodes: [
          {
            id: '3.9.1',
            text: 'WCircularProgress',
            path: 'Components/WCircularProgress',
            mdx: Mdx.Components.WCircularProgressComponent
          },
          {
            id: '3.9.2',
            text: 'WLinearProgress',
            path: 'Components/WLinearProgress',
            mdx: Mdx.Components.WLinearProgressComponent
          }
        ]
      },
      { 
        id: '3.10',
        text: 'Tablolar',
        subNodes: [
          {
            id: '3.10.1',
            text: 'WTable',
            path: 'Components/WTable',
            mdx: Mdx.Components.WTableComponent
          }
        ]
      },
      {
        id: '3.99',
        text: 'Diğerleri',
        subNodes: [     
          {
            id: '3.99.1',
            text: 'WChip',
            path: 'Components/WChip',
            mdx: Mdx.Components.WChipComponent
          },    
          {
            id: '3.99.3',
            text: 'WTooltip',
            path: 'Components/WTooltip',
            mdx: Mdx.Components.WTooltipComponent
          }, 
          {
            id: '3.99.2',
            text: 'WTypography',
            path: 'Components/WTypography',
            mdx: Mdx.Components.WTypographyComponent
          }
        ]        
      }      
    ]
  },
  {
    id: '10', 
    text: 'Versionlar',
    subNodes: [
      {
        id: '10.99',
        text: 'v0.8.0',
        path: 'Versions/0.8.0',
        mdx: Mdx.Versions.V080Component
      },
      {
        id: '10.100',
        text: 'v0.7.0',
        path: 'Versions/0.7.0',
        mdx: Mdx.Versions.V070Component
      },
    ]
  }
];

export default withStyles(styles)(Docs)

