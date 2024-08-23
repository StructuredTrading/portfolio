import React from "react";
import ProfessionalBackgroundSection from '../components/about/professionalBackgroundSection';
import SkillsSection from "../components/about/skillsSection";
import CareerJourneySection from "../components/about/careerJourneySection";
import PersonalInterestsSection from "../components/about/personalInterestSection";
import ResumeSection from "../components/about/resumeSection";


const AboutPage = () => {
    return (
        <div className="aboutpage">
            <h1>About page</h1>
            <ProfessionalBackgroundSection />
            <SkillsSection />
            <CareerJourneySection />
            <PersonalInterestsSection />
            <ResumeSection />
        </div>
    );
}

export default AboutPage;