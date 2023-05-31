import { Alert } from '@mui/material';
import React, { FC, useState } from 'react';
import { WBox, WCard, WCardContent, WCardHeader, WDatePicker, WForm, WFormField, WFormValidation, WGrid, WSelect, WTextField, WTypography } from 'wface';

const DateCard = (props: { title: string, children: React.ReactNode, value: Date }) => (
  <WGrid item xs={12} sm={6} md={4} lg={3}>
    <WCard>
      <WCardHeader title={props.title} />
      <WCardContent>
        {props.children}
        <WBox mt={1}>
          Value: <WTypography fontWeight={600} variant="subtitle1" sx={{ display: 'inline' }}>
            {props.value ? props.value.toLocaleDateString() : 'null'}
          </WTypography>
        </WBox>
      </WCardContent>
    </WCard>
  </WGrid>
)

export const EmptyScreen: FC = () => {
  const [dateNull, setDateNull] = useState<Date>();

  return (
    <WGrid container spacing={1}>
      <DateCard title="Value state ile yönetiliyor. İlk değer boş" value={dateNull}>
        <WSelect/>
        <WSelect size="medium"/>
        <WSelect size="small"/>
        <WTextField />
        <WTextField size="medium" placeholder="md"/>
        <WTextField size="small" placeholder="sm"/>
      </DateCard>

    </WGrid>
  );
}