import styles from 'styles/HomePage.module.css';

import type { NextPage } from 'next';
import Head from 'next/head';

import Header from 'layouts/pages/landing/Header';
import Footer from 'layouts/pages/landing/Footer';

const HomePage: NextPage = () => {
    return (
        <div className={styles.page}>
            <Head>
                <title>Pantry</title>
                <meta
                    name='description'
                    content='All your developer ingredients, in one place!'
                />
            </Head>

            <Header />

            <main className={styles.main}>
                <h2>Coming Soon...</h2>
            </main>

            <Footer />
        </div>
    );
};

export default HomePage;
