import styles from './NewProjectForm.module.css';

const NewProjectForm = () => {
    const handleCreateProject = () => {};

    return (
        <form className={styles.form}>
            <h1 className={styles.title}>New Project</h1>
            <label htmlFor='name'>
                {'Project Name '}
                <input
                    type='text'
                    name='name'
                    id='name'
                    className={styles.projectNameInput}
                />
            </label>

            <button
                onSubmit={handleCreateProject}
                className={styles.createProjectButton}
            >
                Create
            </button>
        </form>
    );
};

export default NewProjectForm;
