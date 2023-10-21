'use client';
import "../styles/home.css";
import Link from 'next/link';
import certificatesInfo from "../certificatesInfo.json";
import Image from 'next/image';

export default function Home() {
  return (
    <main className="home">
      <ul>
        {certificatesInfo.map((c, i) => {
          return (
            <li key={i}>
              <Image
                src="/item.png"
                width="150"
                height="150"
                alt={c.name}
              />
              <Link href={`viewpdf/${c.name}`}>{c.name}</Link>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
