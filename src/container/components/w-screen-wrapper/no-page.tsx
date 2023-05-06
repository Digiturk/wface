import * as React from 'react';
import { WGrid, WPaper, WTypography } from '../../../';

export default () => (
  <WGrid container justifyContent="center" mt={2}>
    <WGrid item md={6}>
      <WPaper elevation={0} style={{ padding: 20 }}>
        <WTypography variant="h5" align="center">
          Sayfa bulunamadı
        </WTypography>
        <WTypography align="center">
          Lütfen proje ve ekran alanlarını doğru tanımladığınızdan emin olunuz.
        </WTypography>
      </WPaper>
    </WGrid>
  </WGrid>
)