"use client"
import Iframe from 'react-iframe';
import { useRef } from "react";
import {useIsVisible} from "../../../hooks/useIsVisible";

export default function Pdf({ params }) {
    const refAbout = useRef();
    const isVisibleAbout = useIsVisible(refAbout);
    return (
        <div ref={refAbout} className={`flex flex-col px-10 md:px-0 p-0 m-0 justify-center items-center w-screen h-auto opacity-0 ${isVisibleAbout ? 'animate-fade-bottom-y-4' : ''}`}>
            <section className="flex flex-col w-full md:w-[60%] xl:w-1/3 2xl:w-1/2 h-[500px] md:h-[1000px] lg:h-screen justify-center items-center mt-48 md:mt-24 lg:mt-12">
                <Iframe
                    url={`/assets/${params.slug}.pdf`}
                    id="pdf-iframe"
                    className="w-full h-[95%] md:h-[90%] xl:h-[80%] 2xl:h-3/4"
                />
            </section>
        </div>
    )
}