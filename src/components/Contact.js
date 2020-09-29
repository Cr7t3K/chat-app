import React from "react";
import './Contact.css';

function Contact() {
    return (
        <div className="Contact">
            <img src="https://randomuser.me/api/portraits/women/28.jpg" alt="Katrina Romero" className="avatar"/>
            <div>
                <p className="name">Katrina Romero</p>
                <div className="status">
                    <span className="status-online"/>
                    <p className="status-text">Online</p>
                </div>
            </div>
        </div>
    );
}


export default Contact;
