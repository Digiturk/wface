import * as React from 'react';
import { WGrid, WPaper, WTypography } from '../../../';
import { useConfiguration } from '../../../store';

export default () => {  
  const { useTranslation } = useConfiguration();
  const { t } = useTranslation!();

  return (
    <WGrid container justifyContent="center" mt={2}>
      <WGrid item md={6}>
        <WPaper elevation={0} style={{ padding: 20 }}>
          <WTypography variant="h5" align="center">
            {t('pageNotFoundTitle') || 'Page not found'}
          </WTypography>
          <WTypography align="center">
            {t('pageNotFoundDescription') || 'Please make sure that you have defined the project and screen areas correctly.'}
          </WTypography>
        </WPaper>
      </WGrid>
    </WGrid>
  );
}