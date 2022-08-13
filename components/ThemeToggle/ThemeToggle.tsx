import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
    return (
        <button className={styles.button}>
            <p className={styles.text}>toggle theme</p>
        </button>
    );
};

export default ThemeToggle;
