'use client';

export default function Card({info}) {
    return (
        <a href={`viewpdf/${info.platform} - ${info.name}`} className="flex flex-col w-full md:w-auto h-auto md:h-[400px] lg:h-[350px] justify-center items-center bg-[#242424] rounded-md py-5 px-8 transform transition duration-300 hover:-translate-y-1">
            <section className="flex flex-row justify-between items-center h-auto w-full">
                <img src="/folder.png" alt="repo" className="w-16 h-16" />
            </section>
            <h1 className="flex flex-row justify-start items-center w-full h-auto mt-5 text-xl font-bold">{info.name}</h1>
            <h2 className="flex flex-row justify-start items-center w-full h-auto mt-1 text-lg font-bold text-[#2E28A0]">{info.platform}</h2>
            <p className="flex flex-row justify-start items-center w-full h-auto mt-3 text-base">
                A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS
            </p>
            <ul className="flex flex-row justify-between items-center w-full h-auto mt-5 flex-wrap">
                <li key={Math.random()*(1000000-1)+1} className='flex flex-row w-auto mr-5 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>JavaScript</li>
                <li key={Math.random()*(1000000-1)+1} className='flex flex-row w-auto mr-5 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>Networks</li>
                <li key={Math.random()*(1000000-1)+1} className='flex flex-row w-auto mr-5 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>Tailwind</li>
            </ul>
        </a>
    )
}