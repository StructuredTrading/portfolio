import React from 'react';
import ContactFormSection from '../components/contact/contactFromSection';
import ContactInformationSection from '../components/contact/contactInformationSection';
import SocialMediaLinksSection from '../components/contact/socialMediaLinksSection';
import LocationSection from '../components/contact/locationSection';

const ContactPage = () => {
    
    return (
        <div className="contactpage">
            <h1>Contact page</h1>
            <ContactFormSection />
            <ContactInformationSection />
            <SocialMediaLinksSection />
            <LocationSection />
        </div>
    );

}

export default ContactPage;