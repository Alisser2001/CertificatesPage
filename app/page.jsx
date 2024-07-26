'use client';
import "../styles/home.css";
import Hero from "./sections/hero";
import Footer from "./sections/footer";
import WebDevelopment from "./sections/webdev";
import Cloud from "./sections/cloud";
import Databases from "./sections/database";
import Networks from "./sections/network";
import Languages from "./sections/language";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-auto justify-center items-center relative">
      <Hero />
      <WebDevelopment/>
      <Cloud/>
      <Databases/>
      <Networks/>
      <Languages/>
      <Footer/>
    </main>
  )
}
