import 'styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';

import { ThemeToggleProvider } from '../hooks/themeToggle';

// TODO: Add a favicon

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'
                />
                <meta httpEquiv='x-ua-compatible' content='ie=edge' />
                <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
            </Head>

            <ThemeToggleProvider>
                <Component {...pageProps} />
            </ThemeToggleProvider>
        </>
    );
}

export default App;
