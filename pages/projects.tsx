import styles from 'styles/DashboardPage.module.css';

import type { NextPage } from 'next';
import Head from 'next/head';

import Header from 'layouts/pages/projects/Header';
import Footer from 'layouts/pages/projects/Footer';

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

            <Header />
            <main></main>
            <Footer />
        </div>
    );
};

export default ProjectsPage;
