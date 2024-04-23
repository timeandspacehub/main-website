import React, { Component, useState } from 'react';

class ContactComponent extends Component {

    render() {

        const handleSubmit = (e) => {
            // e.preventDefault();
            // Handle form submission here, such as sending the data to a server
            console.log("Form data has been submitted");
        };

        return (
            <div className="container">

            <h2>Contact Us</h2>

            <div>info@timeandspacehub.com</div>
            <div>(872) 444-4784</div>

            </div>
        );
    }
    
}

export default ContactComponent;