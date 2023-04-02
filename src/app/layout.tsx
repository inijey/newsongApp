import './globals.css';
import { Open_Sans } from 'next/font/google';
import Navbar from "@/components/Navbar"
import { NavStateProvider } from './context/NavStateContext';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'NewSong App'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={openSans.className}>     
      <body>
        <div className="w-full max-w-screen-xl overflow-auto mx-auto">
          <NavStateProvider>
            <header className="sticky top-0 bg-white z-10 border-b">
              <Navbar />
            </header>
          </NavStateProvider>
          {children}
        </div>
      </body>
    </html>
  )
}
