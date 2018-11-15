import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { withTheme } from '@material-ui/core';
import { WButton } from '../../buttons/w-button';
import { WIcon } from '../../medias/w-icon';
import { WIconButton } from '../../buttons/w-icon-button';
import { WGrid } from '../w-grid';
import { WSelect } from '../../inputs/w-select';
import { WTheme } from '../../others/w-theme-provider/w-theme';
import { WDialog } from '../../dialogs/w-dialog';
import { WTypography } from '../../others/w-typography';

export interface WCarouselProps {
  active?: number;
  children: React.ReactElement<any>[];
  onActiveChanged?: (step: number) => void;
  theme?: WTheme;
}

class WCarouselInner extends React.Component<WCarouselProps, any> {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      fullScreen: false,
    }

  }

  keyHandler = (event) => {
    if(event.keyCode === 13 && event.altKey) {
      // Alt + Enter
      this.setState({fullScreen: true});      
    }
    else if(event.keyCode === 27) {
      // ESC
      this.setState({fullScreen: false});      
    }
    else if(event.keyCode === 37 && this.state.active > 0) {
      // Left
      this.handlePrev();
    }
    else if(event.keyCode === 39 && this.state.active < (this.props.children.length - 1)) {
      // Right
      this.handleNext();
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.keyHandler, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.keyHandler, false);
  }

  handleNext = () => {
    this.setState(prevState => ({
      active: prevState.active + 1,
    }), () => {
      this.props.onActiveChanged && this.props.onActiveChanged(this.state.active);
    });
  };

  handlePrev = () => {
    this.setState(prevState => ({
      active: prevState.active - 1,
    }), () => {
      this.props.onActiveChanged && this.props.onActiveChanged(this.state.active);
    });
  };

  changeActive = (index) => {
    this.setState({active: index}, () => {
      this.props.onActiveChanged && this.props.onActiveChanged(this.state.active);
    });
  }

  renderSlide() {
    const active = this.props.active === undefined ? this.state.active : this.props.active;
    const count = this.props.children.length;


    return (
      <div style={{ maxWidth: '100%', display: 'flex', flex: 1, flexDirection: 'column', height: '100%', background: 'radial-gradient(circle , #fff, #c3bdca)', }}>
        <WGrid 
          container 
          style={{opacity: 0.7}} 
        >
          <WGrid item xs={10} style={{ padding: 10 }}>
            <WIconButton color="primary" onClick={() => this.setState(prevState => { return { fullScreen: !prevState.fullScreen } })}><WIcon>fullscreen</WIcon></WIconButton>
          </WGrid>
          <WGrid item xs={2} style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <WIconButton color="primary" onClick={() => this.changeActive(0)} disabled={active === 0}><WIcon>first_page</WIcon></WIconButton>
            <WIconButton color="primary" onClick={this.handlePrev} disabled={active === 0}><WIcon>chevron_left</WIcon></WIconButton>
            <span style={{ display: 'flex' }}>
              <WTypography color="primary" variant="button" style={{ minWidth: 50, textAlign: 'center', margin: 'auto' }}>{(active + 1)}{" / "}{count}</WTypography>
            </span>
            <WIconButton color="primary" onClick={this.handleNext} disabled={active === count - 1}><WIcon>chevron_right</WIcon></WIconButton>
            <WIconButton color="primary" onClick={() => this.changeActive(count - 1)} disabled={active === count - 1}><WIcon>last_page</WIcon></WIconButton>
          </WGrid>
        </WGrid>
        <SwipeableViews
          index={active}
          style={{ height: '100%', }}
          // style={{ background: 'radial-gradient(circle , #fff, #ccc)', height: '100%', display: 'flex', alignItems: 'center', textAlign: 'center'}}
          containerStyle={{ height: '100%' }}
          slideStyle={{ overflow: 'hidden', font: 'roboto' }}
          onChangeIndex={active => this.changeActive(active)}
        >
          {this.props.children}
        </SwipeableViews>
      </div>
    );
  }

  public render() {
    if (this.state.fullScreen) {
      return <WDialog open={true} fullScreen>{this.renderSlide()}</WDialog>;
    }
    else {
      return this.renderSlide();
    }
  }
}

export const WCarousel = withTheme()(WCarouselInner);
