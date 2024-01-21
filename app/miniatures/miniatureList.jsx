"use client";
import { Miniature } from '../components/miniature';
import { useEffect, useState } from "react";
import certificatesInfo from "../../certificatesInfo.json";
import { Pagination } from "../components/pagination";
import styles from "./miniatureList.module.css";
import { Filter } from '../components/filter';

export default function MiniatureList() {
    const [currentPage, setCurrentPage] = useState(1);
    const pagination = (page) => {
        setCurrentPage(page);
    }
    const certsPerPage = 15;
    const lastIndex = currentPage * certsPerPage;
    const firsIndex = lastIndex - certsPerPage;
    const [currentPlatform, setCurrentPlatform] = useState("all");
    const filter = (platform) => {
        setCurrentPlatform(platform);
    }
    let currentCert = currentPlatform==="all" ? certificatesInfo.slice(firsIndex, lastIndex) : certificatesInfo.filter((c)=>c.platform===currentPlatform).slice(firsIndex, lastIndex);
    return (
        <div className={styles.container}>
            <Filter filter={filter} pagination={pagination}/>
            <ul className={styles.listContainer}>
                {currentCert.map((c, i) => {
                    return (
                        <Miniature key={i} c={c} />
                    )
                })}
            </ul>
            <Pagination allCert={certificatesInfo} currentCert={currentCert} pagination={pagination} currentPage={currentPage} />
        </div>
    )
}