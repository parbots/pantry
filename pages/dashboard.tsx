import styles from 'styles/DashboardPage.module.css';

import type { NextPage } from 'next';
import Head from 'next/head';

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

            <main className={styles.main}>
                <h2>Coming Soon...</h2>
            </main>
        </div>
    );
};

export default DashboardPage;
