import styles from 'styles/HomePage.module.css';

import type { NextPage } from 'next';
import Head from 'next/head';

// TODO: Create favicon

const HomePage: NextPage = () => {
    return (
        <div className={styles.page}>
            <Head>
                <title>Pantry</title>
                <meta
                    name='description'
                    content='All your developer ingredients, in one place!'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <header className={styles.header}>
                <h1>Pantry</h1>
            </header>

            <main className={styles.main}>
                <h2>All your developer ingredients, in one place.</h2>
            </main>

            <footer className={styles.footer}>
                <p className={styles.copyright}>© Parker Botsford 2022</p>
            </footer>
        </div>
    );
};

export default HomePage;
