import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Contactpage from '../../components/Contactpage/Contactpage'
import Footer from '../../components/footer/Footer';
import CursorMaus from '../../components/CursorMaus/CursorMaus';

const ContactPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'header-section'} />
            <Contactpage />
            <Footer />
            <CursorMaus />
        </Fragment>
    )
};
export default ContactPage;
