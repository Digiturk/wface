import * as React from 'react';
import * as WFace from '@wface/components';

interface DemoScreenState {
  inputValue?: string
}

export class DemoScreen extends React.Component<WFace.BaseScreenProps, DemoScreenState> {
  constructor(props) {
    super(props);

    this.state = this.props.screenData.state || {
    }
  }

  public render() {    
    return (
      <div>            
        <WFace.WTable
            title="Ticari Teklif Listesi"
            data={[]}
            columns={[
              { title: "ID", field: "Tabela_Unvanı" },
              { title: "Ticari Grup", field: "Ticari_Grup" },
              { title: "Firma Ünvan", field: "Vergi_Dairesi" },
              { title: "Yetkili Kişi", field: "Vergi_No" },
              { title: "Cep Telefonu", field: "Uyelik_Durumu" },
              { title: "İş Telefonu", field: "Vergi_No" },
              { title: "Durum", field: "Vergi_No" },
              { title: "Üye No", field: "Vergi_No" },
              {
                title: "#",
                render: (item: object) => {
                  return (
                    <WFace.WButton
                      variant="outlined"
                      title="Detay"
                      name="Detay"
                      color="secondary"
                      onClick={() => alert('ok')}
                    >
                      Detay
                    </WFace.WButton>
                  ) as any;
                }
              }
            ]}
          />
      </div>
    )
  }
}