"use client"
import "../../../styles/viewpdf.css";
import Iframe from 'react-iframe';

export default function pdf({ params }) {
    return (
        <div className="flex flex-col p-0 m-0 justify-center items-center w-screen h-auto">
            <section className="flex flex-col w-1/2 h-screen justify-center items-center mt-12">
                <Iframe
                    url={`/assets/${params.slug}.pdf`}
                    id="pdf-iframe"
                    className="w-full h-3/4"
                />
            </section>
        </div>
    )
}