import React from "react";
import './Contact.css';
import PropTypes from 'prop-types';


class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: this.props.online
        }
    };

    render() {
        return (
            <div className="Contact">
                <img src={this.props.avatar} alt={this.props.name} className="avatar"/>
                <div>
                    <p className="name">{this.props.name}</p>
                    <div
                        className="status"
                        onClick={e =>{
                            let value = !this.state.online;
                            this.setState({online: value});
                        }}
                    >
                        <span className={this.state.online ? "status-online":"status-offline"}/>
                        <p className="status-text">{this.state.online ? "Online": "Offline"}</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default Contact;
