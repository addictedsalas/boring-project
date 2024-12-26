import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/MobileMenu.module.css';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.style.overflow = isOpen ? 'auto' : 'hidden';
    };

    const ClickHandler = () => {
        window.scrollTo(10, 0);
        toggleMenu();
    };

    return (
        <>
            <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Toggle Menu">
                <i className={`fa ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
            
            {isOpen && (
                <>
                    <div className={styles.menuContainer}>
                        <nav className={styles.nav}>
                            <ul>
                                <li>
                                    <Link href="/" onClick={ClickHandler}>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://viewer.zoomcatalog.com/notfound" onClick={ClickHandler} target="_blank">
                                        Catalog
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/assets/BORING-TEES-TSHIRTS-PRICING-2022.pdf" onClick={ClickHandler} target="_blank">
                                        Pricing
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" onClick={ClickHandler}>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className={styles.overlay} onClick={toggleMenu} />
                </>
            )}
        </>
    );
};

export default MobileMenu;