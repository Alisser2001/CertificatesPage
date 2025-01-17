'use client';

export default function Options() {
    return (
        <ul className="hidden lg:flex flex-row text-white w-1/2 h-full justify-center items-center font-semibold text-xl">
            <a href="#dev" key={Math.random()*(1000000-1)+1} className="transform transition duration-200 hover:text-[#2E28A0] cursor-pointer animate-fade-up-1 mr-3">
                <span className="text-[#2E28A0] font-semibold">01.</span> Web development
            </a>
            <a href="#cloud" key={Math.random()*(1000000-1)+1} className="transform transition duration-200 hover:text-[#2E28A0] cursor-pointer animate-fade-up-2 mr-3">
                <span className="text-[#2E28A0] font-semibold">02.</span> Cloud
            </a>
            <a href="#db" key={Math.random()*(1000000-1)+1} className="transform transition duration-200 hover:text-[#2E28A0] cursor-pointer animate-fade-up-3 mr-3">
                <span className="text-[#2E28A0] font-semibold">03.</span> Databases
            </a>
            <a href="#network" key={Math.random()*(1000000-1)+1} className="transform transition duration-200 hover:text-[#2E28A0] cursor-pointer animate-fade-up-4 mr-3">
                <span className="text-[#2E28A0] font-semibold">04.</span> Networks
            </a>
            <a href="#lang" key={Math.random()*(1000000-1)+1} className="transform transition duration-200 hover:text-[#2E28A0] cursor-pointer animate-fade-up-5 mr-3">
                <span className="text-[#2E28A0] font-semibold">05.</span> Languages
            </a>
        </ul>
    )
}