import * as React from 'react';
import * as WFace from '@wface/components';
import { Entry } from './slides/1-entry';

export default class TrainingPage extends React.Component<any, any> {
  slides = [
    { component: Entry, header: 'Giriş' },
    { component: Entry, header: 'Giriş2' },
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

