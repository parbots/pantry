import styles from 'styles/HomePage.module.css';

import type { NextPage } from 'next';
import Head from 'next/head';

// TODO: Create favicon

const HomePage: NextPage = () => {
    return (
        <div className={styles.page}>
            <Head>
                <title>Next Starter</title>
                <meta
                    name='description'
                    content='All your developer ingredients, in one place!'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <h1>Pantry</h1>
        </div>
    );
};

export default HomePage;
