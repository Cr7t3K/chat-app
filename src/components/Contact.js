import React from "react";
import './Contact.css';
import PropTypes from 'prop-types';

function Contact(props) {
    return (
        <div className="Contact">
            <img src={props.avatar} alt={props.name} className="avatar"/>
            <div>
                <p className="name">{props.name}</p>
                <div className="status">
                    <span className={props.online ? "status-online":"status-offline"}/>
                    <p className="status-text">{props.online ? "Online": "Offline"}</p>
                </div>
            </div>
        </div>
    );
}

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.bool,
};

export default Contact;
