import * as React from 'react';
import {
  WWizardStepProps, WBox, WSelect,
  WButton
} from 'wface';

interface Step1AltyapiSorgulaState {
}

export default class Step1AltyapiSorgula extends React.Component<WWizardStepProps, Step1AltyapiSorgulaState> {
  constructor(props: WWizardStepProps) {
    super(props);
  }

  public render() {
    const { data, onDataChanged, onForward } = this.props;

    return (
      <div>
        <WBox>
          <WSelect
            id="city"
            label="İl"
            options={[
              { label: 'Adana', value: '1' },
              { label: 'Gaziantep', value: '27' },
              { label: 'İstanbul', value: '34' },
              { label: 'Şanlıurfa', value: '63' }
            ]}
            value={data.city}
            onChange={(city: any) => onDataChanged({ ...data, city })}
          />
        </WBox>
        <WBox mt={1}>
          <WSelect
            id="town"
            label="İlçe"
            options={[
              { label: 'Maltepe', value: '1' },
              { label: 'Kadıköy', value: '27' },
              { label: 'Beşiktaş', value: '34' },
              { label: 'Pendik', value: '63' }
            ]}
            value={data.town}
            onChange={(town: any) => onDataChanged({ ...data, town })}

          />
        </WBox>
        <WBox mt={1}>
          <WSelect
            id="village"
            label="Bucak/Köy"
            options={[
              { label: 'Maltepe', value: '1' },
              { label: 'Kadıköy', value: '27' },
              { label: 'Beşiktaş', value: '34' },
              { label: 'Pendik', value: '63' }
            ]}
            value={data.village}
            onChange={(village: any) => onDataChanged({ ...data, village })}
          />
        </WBox>
        <WBox mt={1}>
          <WSelect
            id="strict"
            label="Mahalle"
            options={[
              { label: 'Mahalle 1', value: '1' },
              { label: 'Mahalle 2', value: '27' },
              { label: 'Mahalle 3', value: '34' },
              { label: 'Mahalle 4', value: '63' }
            ]}
            value={data.strict}
            onChange={(strict: any) => onDataChanged({ ...data, strict })}
          />
        </WBox>
        <WBox mt={1}>
          <WSelect
            id="street"
            label="Cadde/Sokak"
            options={[
              { label: 'Cadde 1', value: '1' },
              { label: 'Cadde 2', value: '27' },
              { label: 'Cadde 3', value: '34' },
              { label: 'Cadde 4', value: '63' }
            ]}
            value={data.street}
            onChange={(street: any) => onDataChanged({ ...data, street })}
          />
        </WBox>
        <WBox mt={1}>
          <WSelect
            id="building"
            label="Bina Kapı No"
            options={[
              { label: '1A', value: '1' },
              { label: '2A', value: '27' },
              { label: '3A', value: '34' },
              { label: '4A', value: '63' }
            ]}
            value={data.building}
            onChange={(building: any) => onDataChanged({ ...data, building })}
          />
        </WBox>
        <WBox mt={1}>
          <WSelect
            id="gate"
            label="Daire No"
            options={[
              { label: '1', value: '1' },
              { label: '2', value: '27' },
              { label: '3', value: '34' },
              { label: '4', value: '63' }
            ]}
            value={data.gate}
            onChange={(gate: any) => onDataChanged({ ...data, gate })}
          />
        </WBox>

        <WBox display="flex" justifyContent="flex-end" mt={2}>
          <WButton id="btnStep1" color="primary" variant="contained" onClick={onForward}>
            İleri
          </WButton>
        </WBox>
      </div>
    )
  }
}