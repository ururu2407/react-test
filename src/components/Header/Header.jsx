import React from 'react';
import styles from './header.scss';

function Header() {
    return (
        <header className={styles.header}>
            <div className="navigation">
                <nav>
                    <li>Home</li>
                    <li>Projects</li>
                </nav>
                <nav>
                    <li>1</li>
                    <li>2</li>
                </nav>
            </div>
        </header>

    )
}
export default Header;