"use client";
import { Miniature } from '../components/miniature';
import { useState } from "react";
import certificatesInfo from "../../certificatesInfo.json";
import { Pagination } from "../components/pagination";
import styles from "./miniatureList.module.css";

export default function MiniatureList() {
    const [currentPage, setCurrentPage] = useState(1);
    const pagination = (page) => {
        setCurrentPage(page);
    }
    const certsPerPage = 15;
    const lastIndex = currentPage * certsPerPage;
    const firsIndex = lastIndex - certsPerPage;
    const currentCert = certificatesInfo.slice(firsIndex, lastIndex);
    return (
        <div className={styles.container}>
            <ul className={styles.listContainer}>
                {currentCert.map((c, i) => {
                    return (
                        <Miniature key={i} c={c} />
                    )
                })}
            </ul>
            <Pagination allCert={certificatesInfo} pagination={pagination} currentPage={currentPage} />
        </div>
    )
}