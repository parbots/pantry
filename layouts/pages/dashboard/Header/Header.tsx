import styles from './Header.module.css';

import Link from 'next/link';

import ThemeToggle from 'components/ThemeToggle';

const Header = () => {
    return (
        <header className={styles.header}>
            <h2 className={styles.title}>
                <Link href='/'>
                    <a className={styles.titleLink}>Pantry</a>
                </Link>
            </h2>
            <ThemeToggle />
        </header>
    );
};

export default Header;
