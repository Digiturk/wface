import { withStyles } from '@material-ui/core';
import * as WFace from '@wface/components';
import * as React from 'react';
import { Route, withRouter } from 'react-router';

class PageLayoutInner extends React.Component<any, any> {    

  constructor(props:any) {
    super(props);

    this.state = {
      currentScreen: props.menuTree[0],
      expandedItems: []
    }
  }

  public componentDidMount() {
    let currentScreen = this.props.menuTree[0];
    this.menuTreeForEach(this.props.menuTree, (item:any) => {
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

  componentDidUpdate() {    
    let currentScreen = this.props.menuTree[0];
    this.menuTreeForEach(this.props.menuTree, (item:any) => {
      if(((this.props as any).match.url + '/' + item.path) === (this.props as any).location.pathname){
          currentScreen = item;
          return true;
      }
      return false;                        
    });

    if(((this.props as any).match.url + '/' + currentScreen.path) !== (this.props as any).location.pathname) {
      this.openScreen(currentScreen);
    }
  }

  private menuTreeForEach(nodes: any, callback: any): any {
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

    this.menuTreeForEach([{subNodes:this.props.menuTree}], (item:any) => {
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
            <WFace.WList disablePadding dense>
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
                this.props.menuTree.map((item:any) => {
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

const PageLayout = withStyles(styles)(PageLayoutInner)
export default withRouter(PageLayout as any) as any

