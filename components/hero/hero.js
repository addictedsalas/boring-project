import React from 'react';
import Link from 'next/link';
import Shape1 from '/public/images/hero/circle-2.png'
import Shape2 from '/public/images/hero/vector.png'
import Shape3 from '/public/images/hero/circle.png'
import Shape4 from '/public/images/hero/arrow-up.png'
import Shape5 from '/public/images/Scroll_Down.png'
import Shape6 from '/public/images/hero/bar.png'
import heroImage from '/public/images/hero/Embroidered-Shirt-Mockup.png'
import Image from 'next/image';

const hero = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <>
            <style jsx>{`
                .service-item {
                    margin-bottom: 1.5rem;
                }
                .service-item .icon {
                    font-size: 1.2rem;
                    color: #007bff;
                }
                .service-item h4 {
                    margin: 0;
                    font-size: 1.25rem;
                    line-height: 1;
                }
                .service-item p {
                    margin-top: 0.5rem;
                    color: #666;
                }
            `}</style>
            <section className="hero-section hero-1 fix bg-cover" style={{ backgroundImage: `url(${'/images/hero/hero-bg.jpg'})` }} >
                <div className="circle-shape">
                    <img src={Shape1.src} alt="img" />
                </div>
                <div className="vector-shape float-bob-x">
                    <img src={Shape2.src} alt="img" />
                </div>
                <div className="circle-shape-2">
                    <img src={Shape3.src} alt="img" />
                </div>
                <div className="arrow-shape float-bob-y">
                    <img src={Shape4.src} alt="img" />
                </div>
                <div id="scrollDown" className="scroll-down">
                    <img src={Shape5.src} alt="img" />
                </div>
                <div className="container">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                            <div className="hero-content">
                                <h6 className="wow fadeInUp">Custom Apparel Printing</h6>
                                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                                    Premium Quality
                                    <span>Custom Apparel <img src={Shape6.src} alt="img" /></span>
                                </h1>
                                <p className="wow fadeInUp" data-wow-delay=".5s">
                                    Transform your ideas into wearable art with our premium <br />
                                    custom printing and embroidery services
                                </p>
                                <ul className="list wow fadeInUp" data-wow-delay=".7s">
                                    <li>
                                        <div className="service-item d-flex align-items-start">
                                            <div className="icon me-3 mt-1">
                                                <i className="flaticon-check"></i>
                                            </div>
                                            <div className="text">
                                                <h4>Screen Printing</h4>
                                                <p className="mt-2">Professional screen printing for durable, high-quality designs</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="service-item d-flex align-items-start">
                                            <div className="icon me-3 mt-1">
                                                <i className="flaticon-check"></i>
                                            </div>
                                            <div className="text">
                                                <h4>DTF Printing</h4>
                                                <p className="mt-2">High-quality direct-to-film transfers for vibrant designs</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="service-item d-flex align-items-start">
                                            <div className="icon me-3 mt-1">
                                                <i className="flaticon-check"></i>
                                            </div>
                                            <div className="text">
                                                <h4>Custom Embroidery</h4>
                                                <p className="mt-2">Professional embroidery for logos and designs</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="hero-btn-wrap wow fadeInUp" data-wow-delay=".9s">
                                    <Link onClick={ClickHandler} href="/shop" className="theme-btn">
                                        Start Shopping <i className="fas fa-long-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero-img wow fadeInRight">
                                <Image src={heroImage} alt="img" width={636} height={636} priority />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default hero;