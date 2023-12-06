"use client"
import "../../../styles/viewpdf.css";
import Iframe from 'react-iframe';

export default function pdf({ params }) {
    return (
        <div className="container">
            <Iframe
                url={`/assets/${params.slug}.pdf`}
                id="pdf-iframe"
                width="800px"
                height="600px"
            />
        </div>
    )
}