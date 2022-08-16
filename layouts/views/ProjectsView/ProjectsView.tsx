import styles from './ProjectsView.module.css';
import React from 'react';

const ProjectsView = () => {
    return (
        <main className={styles.view}>
            <ul className={styles.controlsBar}>
                <li className={styles.controlsItem}>
                    <button className={styles.newProjectButton}>
                        New Project
                    </button>
                </li>
            </ul>
        </main>
    );
};

export default ProjectsView;
