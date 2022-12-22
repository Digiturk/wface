import * as React from 'react';
import { WGrid, WPaper, WTypography } from '../../../';

export default () => (
  <WGrid container justifyContent="center">
    <WGrid item md={6}>
      <WPaper elevation={4} style={{ padding: 20 }}>
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