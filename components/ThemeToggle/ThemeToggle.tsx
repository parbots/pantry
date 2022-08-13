import styles from './ThemeToggle.module.css';

import { useThemeToggle } from 'hooks/themeToggle';

const ThemeToggle = () => {
    const [theme, toggleTheme] = useThemeToggle();

    return (
        <button className={styles.button} onClick={toggleTheme}>
            <p className={styles.text}>{theme}</p>
        </button>
    );
};

export default ThemeToggle;
