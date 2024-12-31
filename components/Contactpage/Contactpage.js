import React from 'react';
import ContactForm from '../ContactFrom/ContactForm';

const Contactpage = () => {
    return (
        <div>
            <section className="contact-section section-padding pt-120 section-bg-2">
                <div className="container">
                    <div className="contact-area">
                        <div className="row">
                            <div className="col-12">
                                <div className="contact-form-items">
                                    <div className="contact-title">
                                        <h3 className="wow fadeInUp" data-wow-delay=".3s">Quick Quote Generator</h3>
                                        <p className="wow fadeInUp" data-wow-delay=".5s">Fill out the form below and we'll get back to you with a quote</p>
                                    </div>
                                    <ContactForm/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-info-section fix section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="contact-info-wrap">
                                <div className="contact-info-title">
                                    <h3 className="wow fadeInUp" data-wow-delay=".3s">Get In Touch</h3>
                                    <p className="wow fadeInUp" data-wow-delay=".5s">Have questions? We're here to help!</p>
                                </div>
                                <div className="contact-info-list">
                                    <div className="info-item wow fadeInUp" data-wow-delay=".3s">
                                        <div className="icon">
                                            <i className="fa-sharp fa-solid fa-location-dot"></i>
                                        </div>
                                        <div className="info">
                                            <h5>Location</h5>
                                            <p>COLLEGE PARK, MD</p>
                                        </div>
                                    </div>
                                    <div className="info-item wow fadeInUp" data-wow-delay=".5s">
                                        <div className="icon">
                                            <i className="fa-sharp fa-solid fa-phone-volume"></i>
                                        </div>
                                        <div className="info">
                                            <h5>Phone</h5>
                                            <p><a href="tel:+17863029144">(786) 302-9144</a></p>
                                        </div>
                                    </div>
                                    <div className="info-item wow fadeInUp" data-wow-delay=".7s">
                                        <div className="icon">
                                            <i className="fa-sharp fa-solid fa-envelope"></i>
                                        </div>
                                        <div className="info">
                                            <h5>Email</h5>
                                            <p><a href="mailto:hello@boringtees.co">hello@boringtees.co</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="map-content-area">
                                <div className="google-map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49654.42904560354!2d-76.97496449577914!3d38.98066281429298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c7e0662dc075%3A0x69a5c3b2f553eba9!2sCollege%20Park%2C%20MD!5e0!3m2!1sen!2sus!4v1703622543015!5m2!1sen!2sus"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{`
                .contact-section {
                    position: relative;
                    z-index: 1;
                    margin-top: 80px;
                    margin-bottom: 0;
                    padding-bottom: 0;
                }
                .contact-form-items {
                    padding: 40px;
                    background: #fff;
                    border-radius: 5px;
                    box-shadow: 0 0 40px rgba(0,0,0,0.05);
                }
                .contact-info-section {
                    background: #f8f8f8;
                    padding: 80px 0;
                }
                .contact-info-wrap {
                    padding-right: 30px;
                }
                .contact-info-title {
                    margin-bottom: 40px;
                }
                .contact-info-title h3 {
                    font-size: 36px;
                    margin-bottom: 15px;
                }
                .info-item {
                    display: flex;
                    align-items: flex-start;
                    margin-bottom: 30px;
                }
                .info-item:last-child {
                    margin-bottom: 0;
                }
                .info-item .icon {
                    width: 45px;
                    height: 45px;
                    background: var(--theme-primary-color);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-right: 20px;
                    color: #fff;
                    font-size: 20px;
                }
                .info-item .info h5 {
                    font-size: 20px;
                    margin-bottom: 5px;
                }
                .info-item .info p,
                .info-item .info a {
                    color: #687188;
                    margin: 0;
                    transition: all 0.3s;
                }
                .info-item .info a:hover {
                    color: var(--theme-primary-color);
                }
                .google-map {
                    height: 100%;
                    min-height: 400px;
                }
                .google-map iframe {
                    width: 100%;
                    height: 400px;
                    border: none;
                    border-radius: 5px;
                }
                @media (max-width: 991px) {
                    .contact-info-wrap {
                        padding-right: 0;
                        margin-bottom: 40px;
                    }
                    .contact-info-title {
                        margin-bottom: 30px;
                    }
                    .contact-info-title h3 {
                        font-size: 30px;
                    }
                }
            `}</style>
        </div>
    );
};

export default Contactpage;
