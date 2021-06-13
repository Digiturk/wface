import * as React from 'react';
import * as WFace from '@wface/components';
import Step1AltyapiSorgula from './Steps/step-1-altyapi-sorgula';
import Step2KisiselBilgiler from './Steps/step-2-kisisel-bilgiler';
import StepX from './Steps/step-x';
import Step7Ozet from './Steps/step-7-ozet';

interface DemoScreen3State {
  data: any
}

export class DemoScreen3 extends React.Component<WFace.BaseScreenProps, DemoScreen3State> {
  constructor(props: WFace.BaseScreenProps) {
    super(props);

    this.state = this.props.screenData.state || {
      data: {}
    }
  }

  public render() {
    return (
      <>
      <WFace.WPaper style={{margin: 8}}>
        <WFace.WWizard
          onDataChanged={data => this.setState({data})}
          steps={[
            { label: "Altyapı Sorgula", component: Step1AltyapiSorgula},
            { label: "Kişisel Bilgiler", component: Step2KisiselBilgiler},
            { label: "Fatura Tercihi", component: StepX},
            { label: "Ürün Tercihi", component: StepX},
            { label: "Kampanya Tercihi", component: StepX},
            { label: "Randevu", component: StepX},
            { label: "Özet/Onay", component: Step7Ozet},
            { label: "Sonuç", component: StepX},
          ]} 
        />
      </WFace.WPaper>
      <WFace.WBox mt={1} p={1}>
        <WFace.WPaper>
          <WFace.WBox p={1}>
            <div>
              <pre>
                {JSON.stringify(this.state.data, null, 2)}
              </pre>
            </div>
          </WFace.WBox>
        </WFace.WPaper>
      </WFace.WBox>
      </>

    )
  }
}