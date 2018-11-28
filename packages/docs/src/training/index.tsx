import * as React from 'react';
import * as WFace from '@wface/components';
import { Entry } from './slides/01-entry';
import { Web } from './slides/02-web';
import { Browser } from './slides/03-browser';
import { Dom } from './slides/04-dom';
import { DevTools } from './slides/05-dev-tools'
import { HtmlSlide } from './slides/06-html'
import { CssSlide } from './slides/07-css';
import { HtmlCssSlide } from './slides/08-html-css';
import { JavaScript } from './slides/09-javascript';
import { JavaScriptTerms } from './slides/10-javascript-terms';
import { JavaScriptCode } from './slides/11-javascript-code';
import { ReactJs } from './slides/12-reactjs';
import { ReactJsCode } from './slides/13-reactjs-code';
import { TypeScript } from './slides/14-typescript';
import { WFaceSlide } from './slides/15-wface';
import { WFaceDocs } from './slides/16-wface-doc';
import { WFaceTechStack } from './slides/17-wface-tech-stack';

export default class TrainingPage extends React.Component<any, any> {
  slides = [
    { component: Entry, header: 'Giriş' },
    { component: Web, header: 'Uygulama Bileşenleri' },
    { component: Browser, header: 'Uygulama nasıl yüklenir?' },
    { component: Dom, header: 'Document Object Model' },
    { component: DevTools, header: 'DevTools' },
    { component: HtmlSlide, header: 'HTML' },
    { component: CssSlide, header: 'CSS' },
    { component: HtmlCssSlide, header: 'HTML & CSS Code' },
    { component: JavaScript, header: 'JavaScript 1' },
    { component: JavaScriptTerms, header: 'JavaScript 2' },
    { component: JavaScriptCode, header: 'JavaScript Code' },
    { component: ReactJs, header: 'React' },
    { component: ReactJsCode, header: 'React Code' },
    { component: TypeScript, header: 'Typescript' },
    { component: WFaceSlide, header: 'WFace' },
    { component: WFaceTechStack, header: 'Kullanılan Teknolojiler' },
    { component: WFaceDocs, header: 'Dökümantasyon ve Kurulum' },
  ];

  constructor(props: any) {
    super(props);
    this.state = {
      activeSlide: 0
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
                  <WFace.WListItemText primary={<div style={index == this.state.activeSlide ? selectedListItemTextStyle : {}}>{slide.header}</div>} />
                </WFace.WListItem>
              ))}
            </WFace.WList>
          </WFace.WCard>
        </WFace.WGrid>
        <WFace.WGrid item xs={12} sm={7} md={8} lg={9}>
          <WFace.WCard style={{ height: '100%' }}>
            <WFace.WCarousel
              active={this.state.activeSlide}
              onActiveChanged={(activeSlide: number) => this.setState({ activeSlide })}
              slideTitles={this.slides.map(i => i.header)}
            >
              {this.slides.map(slide => <slide.component />)}
            </WFace.WCarousel>
          </WFace.WCard>
        </WFace.WGrid>
      </WFace.WGrid>
    );
  }
}

