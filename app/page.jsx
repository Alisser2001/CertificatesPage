'use client';
import Hero from "./sections/hero";
import Footer from "./sections/footer";
import WebDevelopment from "./sections/webdev";
import Cloud from "./sections/cloud";
import Databases from "./sections/database";
import Networks from "./sections/network";
import Languages from "./sections/language";
import certificatesInfo from "../public/certificatesInfo.json";

export default function App() {
  return (
    <main className="flex flex-col w-full h-auto justify-center items-end">
      <Hero/>
      <WebDevelopment certificatesInfo={certificatesInfo.webdev}/>
      <Cloud certificatesInfo={certificatesInfo.cloud}/>
      <Databases certificatesInfo={certificatesInfo.databases}/>
      <Networks certificatesInfo={certificatesInfo.networks}/>
      <Languages certificatesInfo={certificatesInfo.languages}/>
      <Footer/>
    </main>
  )
}
