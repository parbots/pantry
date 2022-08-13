import styles from './Header.module.css';

import ThemeToggle from 'components/ThemeToggle';

const Header = () => {
    return (
        <header className={styles.header}>
            <h2 className={styles.title}>Pantry</h2>
            <ThemeToggle />
        </header>
    );
};

export default Header;
