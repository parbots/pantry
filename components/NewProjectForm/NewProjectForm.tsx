import styles from './NewProjectForm.module.css';

const NewProjectForm = () => {
    return (
        <section className={styles.formView}>
            <form className={styles.form}>
                <h2>Create a New Project</h2>
            </form>
        </section>
    );
};

export default NewProjectForm;
