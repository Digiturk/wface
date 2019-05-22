import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { withTheme } from '@material-ui/core';
import { WIcon } from '../../medias/w-icon';
import { WIconButton } from '../../buttons/w-icon-button';
import { WGrid } from '../w-grid';
import { WTheme } from '../../others/w-theme-provider/w-theme';
import { WTypography } from '../../others/w-typography';
import { WTooltip } from '../../others/w-tooltip';
import { BaseComponentProps } from '../../base/base-component-props';

export type WCarouselProps = BaseComponentProps & { 
  active?: number;
  children: React.ReactElement<any>[];
  onActiveChanged?: (step: number) => void;
  theme?: WTheme;
  slideTitles: string[];
}

class WCarouselInner extends React.Component<WCarouselProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      active: this.props.active || 0,
      fullScreen: false,
    }

  }

  keyHandler = (event: any) => {
    const active = this.props.active === undefined ? this.state.active : this.props.active;

    if (event.keyCode === 13 && event.altKey) {
      // Alt + Enter
      this.setState({ fullScreen: true });
    }
    else if (event.keyCode === 27) {
      // ESC
      this.setState({ fullScreen: false });
    }
    else if (event.keyCode === 37 && active > 0) {
      // Left
      this.changeActive(active - 1);
    }
    else if (event.keyCode === 39 && active < (this.props.children.length - 1)) {
      // Right
      this.changeActive(active + 1);
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keyHandler, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyHandler, false);
  }

  changeActive = (active: number) => {
    this.setState((prevState: any) => ({ active }), () => {
      this.props.onActiveChanged && this.props.onActiveChanged(active);
    });
  };

  renderSlide() {
    const active = this.props.active === undefined ? this.state.active : this.props.active;
    const count = this.props.children.length;

    return (
      <div key="slide" style={{ maxWidth: '100%', display: 'flex', flex: 1, flexDirection: 'column', height: '100%', background: 'radial-gradient(circle , #fff, #c3bdca)', }}>
        <WGrid
          container
          style={{ opacity: 0.7 }}
        >
          <WGrid item xs={10} style={{ padding: 10 }}>
            <WIconButton id={this.props.id + "-btn-fullscreen"} color="primary" onClick={() => this.setState((prevState: any) => { return { fullScreen: !prevState.fullScreen } })}><WIcon>fullscreen</WIcon></WIconButton>
          </WGrid>
          <WGrid item xs={2} style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <WIconButton id={this.props.id + "-btn-first-page"} color="primary" onClick={() => this.changeActive(0)} disabled={active === 0}><WIcon>first_page</WIcon></WIconButton>
            <WIconButton id={this.props.id + "-btn-previous-page"} color="primary" onClick={() => this.changeActive(active - 1)} disabled={active === 0}><WIcon>chevron_left</WIcon></WIconButton>
            <WTooltip title={this.props.slideTitles[active]}>
              <span style={{ display: 'flex' }}>
                <WTypography color="primary" variant="button" style={{ minWidth: 50, textAlign: 'center', margin: 'auto' }}>{(active + 1)}{" / "}{count}</WTypography>
              </span>
            </WTooltip>
            <WIconButton id={this.props.id + "-btn-next-page"} color="primary" onClick={() => this.changeActive(active + 1)} disabled={active === count - 1}><WIcon>chevron_right</WIcon></WIconButton>
            <WIconButton id={this.props.id + "-btn-last-page"} color="primary" onClick={() => this.changeActive(count - 1)} disabled={active === count - 1}><WIcon>last_page</WIcon></WIconButton>
          </WGrid>
        </WGrid>
        <SwipeableViews
          index={active}
          style={{ height: '100%', }}
          containerStyle={{ height: '100%' }}
          slideStyle={{ overflow: 'hidden', font: 'roboto' }}
          onChangeIndex={(active: any) => this.changeActive(active)}
        >
          {this.props.children}
        </SwipeableViews>
      </div>
    );
  }

  public render() {
    let style = { height: '100%' } as any;
    if (this.state.fullScreen) {
      style = { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9999 }
    }

    return (
      <div style={style}>
        {this.renderSlide()}
      </div>
    )
  }
}

export const WCarousel = withTheme()(WCarouselInner);
