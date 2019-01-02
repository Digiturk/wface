import * as React from 'react';
import * as WFace from '@wface/components';

export default () => (
  <WFace.WGrid container justify="center" style={{ paddingTop: 30 }}>
    <WFace.WGrid item md={6}>
      <WFace.WPaper elevation={4} style={{ padding: 20 }}>
        <WFace.WTypography variant="h5" component="h2" align="center">
          Sayfa bulunamadı
        </WFace.WTypography>
        <WFace.WTypography component="p" align="center">
          Lütfen proje ve ekran alanlarını doğru tanımladığınızdan emin olunuz.
        </WFace.WTypography>
      </WFace.WPaper>
    </WFace.WGrid>
  </WFace.WGrid>
)