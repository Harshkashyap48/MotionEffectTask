import React from 'react';
import Header from './Header';
import MidSection from './MidSecttion';
import Ratings from './Ratings';
import MagicPart from './MagicPart';
import BoxPart from './BoxPart';
import SupportedBrowsers from './SupportedBrowers';
import Features from './Features';
import Footer from './Footer';
import './Styles/Section1.css';
import Navbar from './Navbar';

const Section1 = () => (
  <>
  <Navbar/>
    <Header />
    <MidSection />
    <Ratings />
    <MagicPart />
    <BoxPart />
    <SupportedBrowsers />
    <Features />
    <Footer />
  </>
);

export default Section1;
