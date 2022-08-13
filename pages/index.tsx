import styles from 'styles/HomePage.module.css';

import type { NextPage } from 'next';
import Head from 'next/head';

import Header from 'layouts/pages/landing/Header';
import Footer from 'layouts/pages/landing/Footer';

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

            <Header />

            <main className={styles.main}>
                <h2>All your developer ingredients, in one place.</h2>
            </main>

            <Footer />
        </div>
    );
};

export default HomePage;
