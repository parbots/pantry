import styles from 'styles/DashboardPage.module.css';

import type { NextPage } from 'next';
import Head from 'next/head';

const ProjectsPage: NextPage = () => {
    return (
        <div className={styles.page}>
            <Head>
                <title>Pantry - Projects</title>
                <meta
                    name='description'
                    content='Your development command-hub.'
                />
            </Head>

            <header></header>
            <main></main>
            <footer></footer>
        </div>
    );
};

export default ProjectsPage;
