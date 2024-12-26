import React from 'react';
import Link from 'next/link';

const HeaderTopbarS3 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <div className="header-top-3">
            <div className="container-fluid">
                <div className="header-top-wrapper style-3">
                    <p><Link onClick={ClickHandler} href="tel:7863029144">(786)-302-9144</Link> (Mon - Sun 9am to 5pm)</p>
                    <p> 🔥 Free shipping on all U.S. orders $200+</p>
                    <div className="header-top-right">
                        <div className="social-icon d-flex align-items-center">
                            <Link onClick={ClickHandler} href="https://www.instagram.com/boringteescompany" target="_blank"><i className="fab fa-instagram"></i></Link>
                        </div>
                        <div className="nice-items">
                            <select className='nice-select'>
                                <option>USD</option>
                                <option>EURO</option>
                                <option>CNY</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTopbarS3;