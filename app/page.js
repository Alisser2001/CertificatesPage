'use client';
import "../styles/home.css";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="home">
      <Link href="/viewpdf/4">PDF</Link>
    </div>
  )
}
