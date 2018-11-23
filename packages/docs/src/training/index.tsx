import * as React from 'react';
import * as WFace from '@wface/components';
import { Entry } from './slides/1-entry';
import { Web } from './slides/2-web';
import { Browser } from './slides/3-browser';
import { Dom } from './slides/4-dom';
import { DevTools} from './slides/5-dev-tools'
import { HtmlSlide} from './slides/6-html'
import { HtmlCssSlide } from './slides/8-html-css';
import { CssSlide } from './slides/7-css';

export default class TrainingPage extends React.Component<any, any> {
  slides = [
    { component: Entry, header: 'Giriş' },
    { component: Web, header: 'Uygulama Bileşenleri' },
    { component: Browser, header: 'Uygulama nasıl yüklenir?' },
    { component: Dom, header: 'Document Object Model' },
    { component: DevTools, header: 'DevTools' },
    { component: HtmlSlide, header: 'HTML' },
    { component: CssSlide, header: 'CSS' },
    { component: HtmlCssSlide, header: 'HTML & CSS Example' },
  ];

  constructor(props: any) {
    super(props);
    this.state = {
      activeSlide: 6
    }
  }

  public render() {
    const selectedListItemTextStyle = {
      color: '#3f51b5',
      fontWeight: 500
    }
    return (
      <WFace.WGrid container style={{ height: '97%' }}>
        <WFace.WGrid item xs={12} sm={5} md={4} lg={3}>
          <WFace.WCard>
            <WFace.WList dense>
              {this.slides.map((slide, index) => (
                <WFace.WListItem key={index} button onClick={() => this.setState({ activeSlide: index })}
                  style={index == this.state.activeSlide ? { backgroundColor: 'rgb(239, 242, 247)' } : {}}
                >
                  <WFace.WListItemText primary={<div style={index == this.state.activeSlide ? selectedListItemTextStyle : {}}>{slide.header}</div>}/>
                </WFace.WListItem>
              ))}
            </WFace.WList>
          </WFace.WCard>
        </WFace.WGrid>
        <WFace.WGrid item xs={12} sm={7} md={8} lg={9}>
          <WFace.WCard style={{ height: '100%' }}>
            <WFace.WCarousel active={this.state.activeSlide} onActiveChanged={(activeSlide: number) => this.setState({ activeSlide })}>
              {this.slides.map(slide => <slide.component />)}
            </WFace.WCarousel>
          </WFace.WCard>
        </WFace.WGrid>
      </WFace.WGrid>
    );
  }
}

