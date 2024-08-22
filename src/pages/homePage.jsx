import React from 'react';
import IntroductionSection from '../components/home/introductionSection';
import FeaturedProjects from '../components/home/featuredProjectsSection';
import CallToAction from '../components/home/callToActionSection';

const HomePage = () => {
    
    return (
        <div className="homepage">
            <h1>Home page</h1>
            <IntroductionSection />
            <FeaturedProjects />
            <CallToAction />
        </div>
    );

}

export default HomePage;