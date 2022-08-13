import styles from 'styles/HomePage.module.css';

import type { NextPage } from 'next';
import Head from 'next/head';

const HomePage: NextPage = () => {
    return (
        <div className={styles.page}>
            <Head>
                <title>Next Starter</title>
                <meta name='description' content='Next.js starter template' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <h1>Next.js Starter Template</h1>
        </div>
    );
};

export default HomePage;
