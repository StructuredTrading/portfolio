import React from "react";

function ContactFormSection() {
    return (
        <div className='contact-form-section'>
            <h3>Fields</h3>
            <div>
                <li>Name</li>
                <li>Email</li>
                <li>Subject</li>
                <li>Message</li>
                <li>Dropdown for inquiry Type (e.g., General Inquiry, Custom Indicator Request, Web Development Services)</li>
            </div>
        </div>
    );
}

export default ContactFormSection;