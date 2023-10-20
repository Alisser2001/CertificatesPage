import "../styles/global.css";
import { NavBar } from "./components/navbar";

export const metadata = {
  title: 'Certificates',
  description: 'Alidev developer certificates (Estiven Muñoz)',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/hacker.png" />
      </head>
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
