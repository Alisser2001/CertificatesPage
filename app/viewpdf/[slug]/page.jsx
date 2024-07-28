"use client"
import Iframe from 'react-iframe';
import { useRef } from "react";
import {useIsVisible} from "../../../hooks/useIsVisible";

export default function Pdf({ params }) {
    const refAbout = useRef();
    const isVisibleAbout = useIsVisible(refAbout);
    return (
        <div ref={refAbout} className={`flex flex-col p-0 m-0 justify-center items-center w-screen h-auto opacity-0 ${isVisibleAbout ? 'animate-fade-bottom-y-4' : ''}`}>
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