import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Contactpage from '../../components/Contactpage/Contactpage'
import Footer from '../../components/footer/Footer';
import CursorMaus from '../../components/CursorMaus/CursorMaus';

const ContactPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'header-section'} />
            <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'} />
            <Contactpage />
            <Footer />
            <CursorMaus />
        </Fragment>
    )
};
export default ContactPage;
