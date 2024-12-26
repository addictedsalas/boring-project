import React, { Fragment } from 'react';
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/hero/hero';
import FeatureSection from '../components/FeatureSection/FeatureSection';
import About from '../components/about/about';
import MarqueeSection from '../components/MarqueeSection/MarqueeSection';
import Footer from '../components/footer/Footer';
import CursorMaus from '../components/CursorMaus/CursorMaus';

const HomePage = () => {
    return (
        <Fragment>
            <Navbar hclass={'header-section'} />
            <Hero />
            <FeatureSection />
            <About />
            <MarqueeSection hclass={'marquee-section margin-top-8 mb-80'} />
            <Footer />
            <CursorMaus />
        </Fragment>
    )
};

export default HomePage;