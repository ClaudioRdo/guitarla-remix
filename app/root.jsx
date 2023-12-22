import {
    Meta,
    Links,
    Outlet
} from '@remix-run/react';
import styles from './styles/index.css';
export function meta() {
    return (
        {
            charset: 'utf-8',
            title: 'GuitarLA -Remix',
            viewport: "width=device-width, initial-scale=1"
        }
    )
}

export function links() {
    return [
        {
            rel: StyleSheet,
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'preconect',
            href: "https://fonts.googleapis.com"
        },
        {
            rel: 'preconect',
            href: "https://fonts.gstatic.com",
            crossOrigin: "true"
        },
        {
            rel: 'stylesheet',
            href: "https://fonts.googleapis.com/css2?family=Roboto+Mono:ital@1&display=swap"
        }
    ]
}

export default function App() {
    return (
        <Document>
            <Outlet />
        </Document>    
    )
}

function Document({children}) {
    return (
        <html lang="eng">
            <head>
               <Meta />
               <Links />
            </head>
                <body>
                    {children}
                </body>

        </html>
    )
}