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
            <WFace.WList component="div" disablePadding>
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
            <WFace.WList key="NavListKey"
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
                variant="contained" 
                color="primary" 
                onClick={() => this.openScreen(prevButtonData)}>
                <WFace.WIcon style={{marginRight:10}}>arrow_back_ios</WFace.WIcon>
                {prevButtonData.text}
              </WFace.WButton>
            }
            {nextButtonData &&
              <WFace.WButton 
                style={{float:"right"}} 
                variant="contained" 
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
      },
      {
        id: '1.6',
        text: 'Versiyonlar',
        path: 'GetStarted/Versions',
        mdx: Mdx.GetStarted.Versions,
        prev: '1.5',
        next: '2.1'
      },
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
        text: 'Link',
        path: 'WFaceCLI/LinkCommand',        
        mdx: Mdx.WFaceCLI.LinkCommand,
        prev: '2.1',
        next: '2.3'
      },
      {
        id: '2.3',
        text: 'Run',
        path: 'WFaceCLI/RunCommand',        
        mdx: Mdx.WFaceCLI.RunCommand,
        prev: '2.2',
        next: '2.4'
      },
      {
        id: '2.4',
        text: 'Version',
        path: 'WFaceCLI/VersionCommand',        
        mdx: Mdx.WFaceCLI.VersionCommand,
        prev: '2.3'        
        
      }
    ]
  },
  {
    id: '3',
    text: 'Bileşenler',
    subNodes: [
      {
        id: '3.0',
        text: 'Bileşenler',
        path: 'Components/ComponentList',
        mdx: Mdx.Components.ComponentList,
        next: '3.1'
      },
      {
        id: '3.1',
        text: 'WButton',
        path: 'Components/WButton',
        mdx: Mdx.Components.WButtonComponent,
        prev: '3.0',
        next: '3.2'
      }
    ]
  }  
];

export default withStyles(styles)(Docs)

