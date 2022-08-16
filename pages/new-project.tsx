import styles from 'styles/NewProjectPage.module.css';

import type { NextPage } from 'next';
import Head from 'next/head';

import Header from 'layouts/pages/projects/Header';
import NewProjectView from 'layouts/views/NewProjectView';
import Footer from 'layouts/pages/projects/Footer';

const NewProjectPage: NextPage = () => {
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
            <NewProjectView />
            <Footer />
        </div>
    );
};

export default NewProjectPage;
