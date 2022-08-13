import styles from 'styles/DashboardPage.module.css';

import type { NextPage } from 'next';
import Head from 'next/head';

import Header from 'layouts/pages/dashboard/Header';
import Footer from 'layouts/pages/dashboard/Footer';

const DashboardPage: NextPage = () => {
    return (
        <div className={styles.page}>
            <Head>
                <title>Pantry - Dashboard</title>
                <meta
                    name='description'
                    content='Your development command-hub.'
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

export default DashboardPage;