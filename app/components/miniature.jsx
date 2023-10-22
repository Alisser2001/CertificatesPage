"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';

export const Miniature = ({ c }) => {
    let fallbackSrc = "/item.png";
    const [imgSrc, setImgSrc] = useState("/miniatures/");
    return (
        <li>
            <Link href={`viewpdf/${c.name}`}>
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
                />
                <span>{c.name}</span>
            </Link>
        </li>
    )
}