import * as React from 'react';
import {
  BaseScreenProps, WPaper, WWizard,
  WBox
} from 'wface';
import Step1AltyapiSorgula from './Steps/step-1-altyapi-sorgula';
import Step2KisiselBilgiler from './Steps/step-2-kisisel-bilgiler';
import StepX from './Steps/step-x';
import Step7Ozet from './Steps/step-7-ozet';

interface DemoScreen3State {
  data: any
}

export class DemoScreen3 extends React.Component<BaseScreenProps, DemoScreen3State> {
  constructor(props: BaseScreenProps) {
    super(props);

    this.state = {
      data: {}
    }
  }

  public render() {
    return (
      <>
        <WPaper style={{ margin: 8 }}>
          <WWizard
            onDataChanged={(data: any) => this.setState({ data })}
            steps={[
              { label: "Altyapı Sorgula", component: Step1AltyapiSorgula },
              { label: "Kişisel Bilgiler", component: Step2KisiselBilgiler },
              { label: "Fatura Tercihi", component: StepX },
              { label: "Ürün Tercihi", component: StepX },
              { label: "Kampanya Tercihi", component: StepX },
              { label: "Randevu", component: StepX },
              { label: "Özet/Onay", component: Step7Ozet },
              { label: "Sonuç", component: StepX },
            ]}
          />
        </WPaper>
        <WBox mt={1} p={1}>
          <WPaper>
            <WBox p={1}>
              <div>
                <pre>
                  {JSON.stringify(this.state.data, null, 2)}
                </pre>
              </div>
            </WBox>
          </WPaper>
        </WBox>
      </>

    )
  }
}