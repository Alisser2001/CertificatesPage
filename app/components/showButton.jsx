'use client';

export default function ShowButton({ certificatesInfo, actualNumItems, setActualNumItems, setActualItems }) {
    const handleActualNumItems = () => {
        if (actualNumItems >= certificatesInfo.length) {
            setActualNumItems(6);
            setActualItems(certificatesInfo.slice(0, 6));
        } else {
            setActualNumItems(actualNumItems + 6);
            setActualItems(certificatesInfo.slice(0, actualNumItems + 6))
        }
    }
    return (
        <div className="w-full h-auto flex flex-row justify-end items-center animate-fade-bottom-y-5 opacity-0 mt-16" style={{ animationDelay: ".8s" }}>
            <span href="#" onClick={handleActualNumItems} className="bg-[#161616] z-30 cursor-pointer flex justify-center items-center w-40 h-12 rounded-lg border-2 border-[#2E28A0] font-bold text-xl text-white transform transition duration-300 hover:-translate-x-1 hover:-translate-y-1">
                {actualNumItems >= certificatesInfo.length ? "Show less" : "Show more"}
            </span>
            <div className="w-40 h-12 bg-[#2E28A0] z-0 absolute rounded-lg"></div>
        </div>
    )
}