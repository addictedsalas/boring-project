import React from 'react';
import Link from 'next/link';
import Fi1 from '/public/images/footer/dot.png'
import Fi2 from '/public/images/footer/footer-shape-1.png'
import Fi3 from '/public/images/footer/footer-shape-2.png'
import Logo from '/public/images/boringlogo.png'
import Image from 'next/image';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="dot-shape">
                <Image src={Fi1} alt="img" />
            </div>
            <div className="footer-shape-1">
                <Image src={Fi2} alt="img" />
            </div>
            <div className="footer-shape-2">
                <Image src={Fi3} alt="img" />
            </div>
            <div className="container">
                <div className="footer-widgets-wrapper">
                    <div className="row">
                        <div className="col-xl-6 col-sm-12 col-md-12 col-lg-6">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <Link onClick={ClickHandler} href="/">
                                        <Image 
                                            src={Logo} 
                                            alt="Boring Tees Logo" 
                                            width={300} 
                                            height={100}
                                            style={{
                                                width: 'auto',
                                                height: 'auto'
                                            }}
                                        />
                                    </Link>
                                </div>
                                <div className="footer-content">
                                    <p>
                                        We specialize in creating high-quality custom apparel using state-of-the-art DTF printing 
                                        and embroidery technology. Our commitment to excellence ensures your designs look perfect 
                                        on every garment.
                                    </p>
                                    <ul className="contact-list">
                                        <li>
                                            <i className="fa-sharp fa-solid fa-location-dot"></i>
                                            <span>COLLEGE PARK, MD</span>
                                        </li>
                                        <li>
                                            <i className="fa-sharp fa-solid fa-phone-volume"></i>
                                            <a href="tel:+17863029144">(786) 302-9144</a>
                                        </li>
                                        <li>
                                            <i className="fa-sharp fa-solid fa-envelope"></i>
                                            <a onClick={ClickHandler} href="mailto:hello@boringtees.co" className="link">hello@boringtees.co</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="copyright-info">
                                <p>&copy; {new Date().getFullYear()} Boring Tees. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;