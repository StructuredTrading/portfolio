import React from 'react';
import IntroductionSection from '../components/introductionSection';
import FeaturedProjects from '../components/featuredProjectsSection';
import CallToAction from '../components/callToActionSection';

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