import './globals.css'
import {Providers} from "./providers";

export const metadata = {
  title: 'Phils Portfolio',
  description: 'Showcase of my recent work.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
