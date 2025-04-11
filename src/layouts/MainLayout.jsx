import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Debug from '../components/Debug'; // Import Debug component
import './MainLayout.scss';

const MainLayout = ({ children }) => {
    console.log('MainLayout rendering');
    return (
        <div className="main-layout">
            <Header />
            <main>{children}</main>
            <Footer />
            <Debug /> {/* Add Debug component */}
        </div>
    );
};

export default MainLayout;