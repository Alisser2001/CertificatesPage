"use client";
import certificatesInfo from "../../certificatesInfo.json";
import { useState } from "react";
import { useRef } from "react";
import {useIsVisible} from "../../hooks/useIsVisible";

export default function Networks() {
    const refAbout = useRef();
    const isVisibleAbout = useIsVisible(refAbout);
    const [actualNumItems, setActualNumItems] = useState(6);
    const [actualItems, setActualItems] = useState(certificatesInfo.networks.slice(0, actualNumItems));
    const handleActualNumItems = () => {
        if (actualNumItems >= certificatesInfo.networks.length) {
            setActualNumItems(6);
            setActualItems(certificatesInfo.networks.slice(0, 6));
        } else {
            setActualNumItems(actualNumItems + 6);
            setActualItems(certificatesInfo.networks.slice(0, actualNumItems + 6))
        }
    }
    return (
        <section ref={refAbout} className={`flex flex-col w-1/2 h-auto justify-center items-start text-white pt-40 opacity-0 ${isVisibleAbout ? 'animate-fade-bottom-y-4' : ''}`} style={{animationDelay: ".2"}} id='network'>
            <div className={`flex flex-row w-full h-auto justify-end items-center px-10 mb-32`}>
                <div className='h-1 w-2/3 bg-[#2E28A0] mr-5'></div>
                <h1 className='font-bold text-4xl w-1/3 flex justify-center items-center'><span className='text-[#2E28A0] mr-5'>04.</span> Networks</h1>
            </div>
            <ul className='w-full h-auto text-white justify-around items-start grid grid-cols-2 gap-10'>
                {actualItems.map((c, i) => {
                    return (
                        <a key={i} href={`viewpdf/${c.platform} - ${c.name}`} className="flex flex-col w-auto h-80 justify-center items-center bg-[#242424] rounded-md py-5 px-8 transform transition duration-300 hover:-translate-y-1">
                            <section className="flex flex-row justify-between items-center h-auto w-full">
                                <img src="/folder.png" alt="repo" className="w-16 h-16" />
                                <img src="/redirect.png" alt="project" className="w-10 h-10 transform transition duration-300 hover:-translate-y-1" />
                            </section>
                            <h1 className="flex flex-row justify-start items-center w-full h-auto mt-5 text-xl font-bold">{c.name}</h1>
                            <h2 className="flex flex-row justify-start items-center w-full h-auto mt-1 text-lg font-bold text-[#2E28A0]">{c.platform}</h2>
                            <p className="flex flex-row justify-start items-center w-full h-auto mt-3 text-base">
                                A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS
                            </p>
                            <ul className="flex flex-row justify-between items-center w-full h-auto mt-5">
                                <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>JavaScript</li>
                                <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>Networks</li>
                                <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>Tailwind</li>
                            </ul>
                        </a>
                    )
                })}
            </ul>
            {certificatesInfo.networks.length > 6 && <div className="w-full h-auto flex flex-row justify-end items-center animate-fade-bottom-y-5 opacity-0 mt-16" style={{ animationDelay: ".8s" }}>
                <span href="#" onClick={handleActualNumItems} className="left-40 bg-[#161616] relative z-30 cursor-pointer flex justify-center items-center w-40 h-12 rounded-lg border-2 border-[#2E28A0] font-bold text-xl text-white transform transition duration-300 hover:-translate-x-1 hover:-translate-y-1">
                    {actualNumItems >= certificatesInfo.networks.length ? "Show less" : "Show more"}
                </span>
                <div className="w-40 h-12 bg-[#2E28A0] z-0 relative rounded-lg"></div>
            </div>}
        </section>
    )
}