import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";
import HeaderTopbar from '../HeaderTopbar/HeaderTopbar';
import SearchComponent from './search';
import MobileMenu from '../MobileMenu/MobileMenu';
import Image from 'next/image';
import styles from '../../styles/MobileHeader.module.css';

const Header = (props) => {
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const { carts } = props;
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 991);
        };
        
        handleResize();
        window.addEventListener('resize', handleResize);
        
        const handleScroll = () => {
            if (window.scrollY > 250) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={props.hclass}>
            {!isMobile && <HeaderTopbar />}
            <div id="header-sticky" className={isSticky ? 'sticky' : 'header-1'}>
                <div className="container-fluid">
                    <div className="mega-menu-wrapper">
                        <div className="header-main d-flex justify-content-between align-items-center">
                            <div className="header-left">
                                <div className="logo">
                                    <Link onClick={ClickHandler} href="/" className="header-logo">
                                        <Image 
                                            src="/images/boringlogo.png"
                                            alt="Boring Tees Logo"
                                            width={300}
                                            height={100}
                                            priority
                                            style={{
                                                width: 'auto',
                                                height: 'auto'
                                            }}
                                        />
                                    </Link>
                                </div>
                            </div>
                            
                            {isMobile ? (
                                <div className={styles.mobileControls}>
                                    <Link onClick={ClickHandler} href="/shop-cart" className="cart-icon">
                                        <i className="far fa-shopping-basket"></i>
                                        <span>{carts.length}</span>
                                    </Link>
                                    <div className={styles.mobileMenuToggle}>
                                        <MobileMenu />
                                    </div>
                                </div>
                            ) : (
                                <div className="header-right d-flex justify-content-end align-items-center">
                                    <div className="mean__menu-wrapper">
                                        <div className="main-menu">
                                            <nav id="mobile-menu">
                                                <ul>
                                                    <li className="active">
                                                        <Link onClick={ClickHandler} href="/">Home</Link>
                                                    </li>
                                                    <li>
                                                        <Link onClick={ClickHandler} href="https://viewer.zoomcatalog.com/notfound" target="_blank">Catalog</Link>
                                                    </li>
                                                    <li>
                                                        <Link onClick={ClickHandler} href="/assets/BORING-TEES-TSHIRTS-PRICING-2022.pdf" target="_blank">Pricing</Link>
                                                    </li>
                                                    <li>
                                                        <Link onClick={ClickHandler} href="/contact">Contact</Link>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <SearchComponent />
                                    <h5 className="cart-title">
                                        <Link onClick={ClickHandler} href="/shop-cart">
                                            Cart <span className='cart-count'>{carts?.length || 0}</span>
                                        </Link>
                                    </h5>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
};

const mapStateToProps = (state) => {
    return {
        carts: state.cartList?.cart || []
    };
};

export default connect(mapStateToProps, { removeFromCart })(Header);
