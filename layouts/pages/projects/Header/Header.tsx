import styles from './Header.module.css';

import Link from 'next/link';

import ThemeToggle from 'components/ThemeToggle';

const Header = () => {
    return (
        <header className={styles.header}>
            <section className={styles.headerTop}>
                <h2 className={styles.title}>
                    <Link href='/'>
                        <a className={styles.titleLink}>Pantry</a>
                    </Link>
                </h2>
                <ThemeToggle />
            </section>
            <section className={styles.headerBottom}>
                <nav className={styles.navbar}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <Link href='/dashboard'>
                                <a className={styles.navLink}>Dashboard</a>
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href='/projects'>
                                <a className={styles.navLink}>Projects</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </section>
        </header>
    );
};

export default Header;
