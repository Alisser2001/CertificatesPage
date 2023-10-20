"use client"
import "../../../styles/viewpdf.css";
import Iframe from 'react-iframe';

export default function pdf() {
    return (
        <div className="container">
            <Iframe
                url="/assets/Aplicaciones Web con Blazor.pdf"
                id="pdf-iframe"
                width="1000px"
                height="800px"
            />
        </div>
    )
}