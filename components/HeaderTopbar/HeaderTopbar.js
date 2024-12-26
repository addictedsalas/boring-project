import React from 'react'
import Link from 'next/link'
import CurrentDoler from './CurrentDoler';

const HeaderTopbar = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="container-fluid">
            <div className="header-top-wrapper">
                <p><Link onClick={ClickHandler} href="tel:7863029144">(786)-302-9144</Link> (Mon - Sun 9am to 5pm)</p>
                <p> 🔥 Free shipping on all U.S. orders $200+</p>
                <div className="header-top-right">
                    <div className="social-icon d-flex align-items-center">
                        <Link onClick={ClickHandler} href="https://www.instagram.com/boringteescompany" target="_blank"><i className="fab fa-instagram"></i></Link>
                    </div>
                    <CurrentDoler />
                </div>
            </div>
        </div>
    )
}

export default HeaderTopbar;