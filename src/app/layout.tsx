import './globals.css'
import { Providers } from './providers'
import localFont from 'next/font/local';

const satoshi = localFont({
  src: [{ path: '../../public/fonts/Satoshi-Variable.ttf', style: 'normal' }],
  display: 'swap',
  variable: '--font-satoshi',
});



export const metadata = {
  title: 'Phil G. | Portfolio',
  description: 'Showcase of my recent work.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${satoshi.className} light`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
