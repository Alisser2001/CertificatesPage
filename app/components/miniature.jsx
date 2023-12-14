"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from "./miniature.module.css";

export const Miniature = ({ c }) => {
    let fallbackSrc = "/item.png";
    const [imgSrc, setImgSrc] = useState("/miniatures/");
    return (
        <li className={styles.minContainer}>
            <Link href={`viewpdf/${c.platform} - ${c.name}`} className={styles.miniature}>
                <Image
                    width="280"
                    height="150"
                    alt={c.name}
                    src={imgSrc === "/miniatures/" ? `${imgSrc}${c.name}.1.png` : imgSrc}
                    onLoadingComplete={(result) => {
                        if (result.naturalWidth === 0) {
                            setImgSrc(fallbackSrc);
                        }
                    }}
                    onError={() => {
                        setImgSrc(fallbackSrc);
                    }}
                    className={styles.minImg}
                />
                <span className={styles.title}>{c.name}</span>
            </Link>
        </li>
    )
}