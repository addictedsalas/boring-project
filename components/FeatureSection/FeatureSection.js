import React from 'react';
import Feature1 from '/public/images/feature/tshirt.png'
import Feature2 from '/public/images/feature/tshirt-2.png'
import Feature3 from '/public/images/feature/return.png'
import Image from 'next/image';

const FeatureSection = () => {
    return (
        <section className="feature-section fix section-padding">
            <div className="container">
                <div className="feature-wrapper">
                    <div className="row g-4">
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="feature-box-items">
                                <div className="icon">
                                    <Image src={Feature1} alt="img" />
                                </div>
                                <div className="content">
                                    <h3>Choose Your Style</h3>
                                    <p>
                                        Select from our premium t-shirts,
                                        polos, or hats for your design
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="feature-box-items">
                                <div className="icon">
                                    <Image src={Feature2} alt="img" />
                                </div>
                                <div className="content">
                                    <h3>Customize Design</h3>
                                    <p>
                                        Choose DTF printing or embroidery
                                        and preview your custom design
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                            <div className="feature-box-items">
                                <div className="icon">
                                    <Image src={Feature3} alt="img" />
                                </div>
                                <div className="content">
                                    <h3>Fast Production</h3>
                                    <p>
                                        Quick turnaround with quality
                                        check and secure packaging
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;