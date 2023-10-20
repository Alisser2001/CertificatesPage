import React from 'react';
import PDFViewer from 'pdf-viewer-reactjs';

const PDFViewerComp = () => {
    return (
        <PDFViewer
            document={{
                url: './assets/pdfFile.pdf',
            }}
        />
    )
}

export default PDFViewerComp