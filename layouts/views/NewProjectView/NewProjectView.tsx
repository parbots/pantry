import styles from './NewProjectView.module.css';

import NewProjectForm from 'components/NewProjectForm';

const NewProjectView = () => {
    return (
        <main className={styles.view}>
            <NewProjectForm />
        </main>
    );
};

export default NewProjectView;
