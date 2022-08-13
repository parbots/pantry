import styles from './Header.module.css';

import Link from 'next/link';

import ThemeToggle from 'components/ThemeToggle';

// TODO: Check login status and change login link to dashboard link if user is logged in

const Header = () => {
    return (
        <header className={styles.header}>
            <section className={styles.headerLeft}>
                <h2 className={styles.title}>Pantry</h2>
            </section>

            <section className={styles.headerRight}>
                <nav className={styles.navBar}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <Link href='/dashboard'>
                                <a className={styles.navLink}>Login</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <ThemeToggle />
            </section>
        </header>
    );
};

export default Header;
