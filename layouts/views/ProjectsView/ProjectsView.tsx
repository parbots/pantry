import styles from './ProjectsView.module.css';

import Link from 'next/link';

const ProjectsView = () => {
    return (
        <main className={styles.view}>
            <ul className={styles.controlsBar}>
                <li className={styles.controlsItem}>
                    <Link href='/new-project'>
                        <a className={styles.newProjectLink}>New Project</a>
                    </Link>
                </li>
            </ul>
        </main>
    );
};

export default ProjectsView;
