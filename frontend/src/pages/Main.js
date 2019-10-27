import React from 'react';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { hostingTheme } from '../assets/theme/index';
import {
  GlobalStyle,
  ContentWrapper,
} from '../containers/Hosting/hosting.style';
import { ResetCSS } from '../assets/css/style';
import Navbar from '../containers/Hosting/Navbar';
import FeatureSection from '../containers/Hosting/Features';
import InfoSection from '../containers/Hosting/Info';
import BannerSection from './Banner';
import Features from './Features';
import Testimonial from './Testimonial';
import ContactSection from '../containers/Hosting/Contact';
import Footer from '../containers/Hosting/Footer';
import { DrawerProvider } from '../contexts/DrawerContext';
import { ParallaxProvider } from 'react-scroll-parallax';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ParticlesComponent from '../containers/Hosting/Particle';
import UploadToS3 from '../actions/UploadToS3';
import UploadPage from './UploadPage';
import Demo from './Demo';
import Results from './Results';
import DemoSection from './DemoSection';

export default () => {
  return (
    <Router>
      <ThemeProvider theme={hostingTheme}>
        <ParallaxProvider>
          <ResetCSS />
          <GlobalStyle />
          <ContentWrapper>
            <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
              <DrawerProvider>
                <Navbar />
              </DrawerProvider>
            </Sticky>
            <BannerSection />
            <Features />
            <DemoSection />
            <Testimonial/>
            <Footer />
          </ContentWrapper>
        </ParallaxProvider>
      </ThemeProvider>
    </Router>
  );
};