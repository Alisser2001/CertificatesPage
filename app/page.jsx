'use client';
import "../styles/home.css";
import { useState } from "react";
import certificatesInfo from "../certificatesInfo.json";
import { Miniature } from './components/miniature';
import { Pagination } from "./components/pagination";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const pagination = (page) => {
    setCurrentPage(page);
  }
  const certsPerPage = 20;
  const lastIndex = currentPage * certsPerPage;
  const firsIndex = lastIndex - certsPerPage;
  const currentCert = certificatesInfo.slice(firsIndex, lastIndex);
  return (
    <main className="home">
      <ul>
        {currentCert.map((c, i) => {
          return (
            <Miniature key={i} c={c} />
          )
        })}
      </ul>
      <Pagination allCert={certificatesInfo} pagination={pagination} currentPage={currentPage} />
    </main>
  )
}
