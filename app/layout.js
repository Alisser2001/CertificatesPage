import "../styles/global.css";
import LeftInfo from "./components/leftInfo";
import RightInfo from "./components/rightInfo";
import { NavBar } from "./sections/navbar";

export const metadata = {
  title: 'Alidev - Certificates',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Logo.png" />
      </head>
      <body>
        <NavBar/>
        <LeftInfo/>
        <RightInfo/>
        {children}
      </body>
    </html>
  )
}
