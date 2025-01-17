"use client";
import certificatesInfo from "../../public/certificatesInfo.json";
import { useState } from "react";
import { useRef } from "react";
import { useIsVisible } from "../../hooks/useIsVisible";
import Index from "../components/cloud";
import Card from "../components/card";
import ShowButton from "../components/showButton";

export default function Cloud() {
    const refAbout = useRef();
    const isVisibleAbout = useIsVisible(refAbout);
    const [actualNumItems, setActualNumItems] = useState(6);
    const [actualItems, setActualItems] = useState(certificatesInfo.cloud.slice(0, actualNumItems));
    return (
        <section ref={refAbout} className={`pt-28 mb-20 md:mb-40 2xl:mb-40 flex flex-col w-full px-10 lg:px-0 lg:pr-48 lg:w-5/6 h-auto text-white justify-center items-start opacity-0 ${isVisibleAbout ? 'animate-fade-bottom-y-4' : ''}`} style={{ animationDelay: ".2" }} id='cloud'>
            <Index />
            <ul className='w-full h-auto text-white justify-around items-start flex flex-col md:grid md:grid-cols-2 gap-10'>
                {actualItems.map((c, i) => {
                    return (
                        <Card info={c} idx={i} />
                    )
                })}
            </ul>
            {certificatesInfo.length > 6 && <ShowButton certificatesInfo={certificatesInfo} actualNumItems={actualNumItems} setActualNumItems={setActualNumItems} setActualItems={setActualItems} />}
        </section>
    )
}