import "../styles/global.css";
import LeftInfo from "./components/layout/leftInfo";
import { NavBar } from "./sections/navbar";
import { Toaster } from "sonner";

export const metadata = {
  title: 'Alidev - Certificates',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body>
        <NavBar/>
        <LeftInfo/>
        {children}
        <Toaster position="bottom-right" expand={false} richColors />
      </body>
    </html>
  )
}
