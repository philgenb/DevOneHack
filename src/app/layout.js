import './globals.css';
import { Providers } from './providers';

export const metadata = {
    title: 'Phils Portfolio',
    description: 'Showcase of my recent work.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="light">
        <head>
            <link href="https://api.fontshare.com/v2/css?f[]=satoshi@1,900, 800, 700, 600, 500, 301,701,300,501,401,901,400, 200,2&display=swap" rel="stylesheet" />
            <meta name="description" content="Showcase of my recent work." />
            <title>Phil G. | Portfolio</title>
        </head>
        <body>
        <Providers>{children}</Providers>
        </body>
        </html>
    );
}
