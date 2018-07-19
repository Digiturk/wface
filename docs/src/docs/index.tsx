import * as React from 'react'
import * as WFace from '@wface/components'
import { withStyles } from '@material-ui/core';
import { Route } from 'react-router';
import Mdx from './mdx'

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
      return (
        <WFace.WListItem key={item.id} button style={itemStyle} onClick={() => { this.openScreen(item)}} >
          <WFace.WListItemText primary={item.text} />
        </WFace.WListItem>
      );
    }
  }

  public render() {
    const { classes } = this.props;

    return (
      <WFace.WGrid container className={classes.root}>
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
        <WFace.WGrid item xs={12} sm={12} md={8} lg={9}>
          <WFace.WPaper className={classes.content}>
            {this.state.currentScreen && 
              <Route key={this.state.currentScreen.id} path={(this.props as any).match.url + '/' + this.state.currentScreen.path} component={this.state.currentScreen.mdx}/> 
            }
          </WFace.WPaper>
        </WFace.WGrid>
      </WFace.WGrid>  
    );
  }
}

const styles = (theme:any) => ({
  root: {
    margin: 10
  },
  navListRoot: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  content: {
    marginLeft: 10,
    marginRight: 20,
    padding:20    
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
        mdx: Mdx.GetStarted.Architecture
      },
      {
        id: '1.0',
        text: 'Gereksinimler',
        path: 'GetStarted/Requirements',
        mdx: Mdx.GetStarted.Requirements
      },
      {
        id: '1.1',
        text: 'Kurulum',
        path: 'GetStarted/Setup',
        mdx: Mdx.GetStarted.Setup
      },
      {
        id: '1.2',
        text: 'Kullanım',
        path: 'GetStarted/Usage',
        mdx: Mdx.GetStarted.Usage,
      },
      {
        id: '1.3',
        text: 'Ek Araçlar',
        path: 'GetStarted/Tools',
        mdx: Mdx.GetStarted.Tools
      },
      {
        id: '1.4',
        text: 'Desteklenen Ortamlar',
        path: 'GetStarted/SupportedPlatforms',
        mdx: Mdx.GetStarted.SupportedPlatforms
      },
      {
        id: '1.5',
        text: 'Sık Sorulan Sorular',
        path: 'GetStarted/Faq',
        mdx: Mdx.GetStarted.Faq
      },
      {
        id: '1.6',
        text: 'Versiyonlar',
        path: 'GetStarted/Versions',
        mdx: Mdx.GetStarted.Versions
      },
    ]
  },
  {
    id: '2',
    text: 'Bileşenler',
    subNodes: [
      {
        id: '2.1',
        text: 'WButton',
        path: 'Components/WButton',
        mdx: Mdx.Components.WButton
      }
    ]
  }  
];

export default withStyles(styles)(Docs)

