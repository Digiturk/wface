import React, { FC, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
// // @ts-ignore
// import * as pdfjsLib from "pdfjs-dist/build/pdf.mjs";
// // @ts-ignore
// import pdfjsWorker from "pdfjs-dist/build/pdf.worker.mjs";
// import '../../../node_modules/pdfjs-dist/build/pdf.worker.mjs'

interface Base64PdfViewProps {
  base64: string;
}

export const Base64PdfView: FC<Base64PdfViewProps> = (props) => {
  const { base64 } = props;
  const canvasRef = useRef<HTMLCanvasElement>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [numPages, setNumPages] = useState<number>(1);

  const load = useCallback(() => {
    const pdfData = atob(base64);
    // @ts-ignore
    const { pdfjsLib } = globalThis;

    if (!pdfjsLib) {
      console.log('html dosyasına  <script src="//mozilla.github.io/pdf.js/build/pdf.mjs" type="module"></script> scriptinin eklendiğinden emin olun');
      return;
    }

    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://mozilla.github.io/pdf.js/build/pdf.worker.mjs';

    const loadingTask = pdfjsLib.getDocument({ data: pdfData });
    loadingTask.promise.then(function (pdf: any) {
      setNumPages(pdf._pdfInfo.numPages);

      // Fetch the first page
      pdf.getPage(pageNumber).then(function (page: any) {
        console.log('Page loaded');

        var scale = 1.5;
        var viewport = page.getViewport({ scale: scale });

        // Prepare canvas using PDF page dimensions

        var context = canvasRef.current.getContext('2d');
        canvasRef.current.height = viewport.height;
        canvasRef.current.width = viewport.width;

        // Render PDF page into canvas context
        var renderContext = {
          canvasContext: context,
          viewport: viewport
        };
        var renderTask = page.render(renderContext);
        renderTask.promise.then(function () {
          console.log('Page rendered');
        });
      });
    }, function (reason: any) {
      // PDF loading error
      console.error(reason);
    });

  }, [base64, pageNumber]);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <div>
      <button disabled={pageNumber <= numPages} onClick={() => setPageNumber(p => p - 1)}>prev page</button>
      {" "}Page: {pageNumber} / {numPages}{" "}
      <button disabled={pageNumber <= numPages} onClick={() => setPageNumber(p => p + 1)}>next page</button>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
} 