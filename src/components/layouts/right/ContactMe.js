import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faMapMarkerAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons'


export default class ContactMe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: '',
            username: '',
            email: '',
            subject: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    componentWillMount() {
        this.handleSubmit()
    }
    handleSubmit = (e) => {
        // e.preventDefault();
        // fetch(this.props.urls + '/api/contactus', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         username: this.state.username,
        //         email: this.state.email,
        //         message: this.state.message,
        //         subject: this.state.subject
        //     })
        // })
        //     .then(res => res.json())
        //     .then(data => console.log(data))
        // const data = { ...this.state.email }
    }
    render() {
        return (
            <React.Fragment>
                <div className="contact" style={{ overflow: 'auto' }}>
                    <div className="card" style={{ boxShadow: "0 5px 11px #ccc" }} >
                        <div className="card-header"><FontAwesomeIcon icon={faEnvelopeOpen} />&nbsp;CONTACT ME</div>
                        <div className="card-body" style={{ background: '#e9ecef' }}>
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="contact-form">
                                        <form onSubmit={this.handleSubmit} id="post">
                                            <textarea onChange={e => this.handleChange(e)} name="message" cols="50" rows="5" placeholder="Message" className="form-control" style={{ marginBottom: '10px' }} />
                                            <input type="text" onChange={e => this.handleChange(e)} name="username" placeholder="Enter your name" className="form-control" style={{ marginRight: "4%" }} />
                                            <input type="email" onChange={e => this.handleChange(e)} name="email" placeholder="Enter your email" className="form-control" />
                                            <div className="form-group">
                                                <input type="text" onChange={e => this.handleChange(e)} name="subject" placeholder="Enter your subject" className="form-control" />
                                            </div>
                                            <div className="form-sub">
                                                <input type="submit" value="SEND MESSAGE" className="btn btn1" style={{ color: "white", backgroundColor: "black" }} />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="address">
                                        <hr />
                                        <p><FontAwesomeIcon icon={faMapMarkerAlt} />&nbsp;</p>
                                        <p><FontAwesomeIcon icon={faEnvelopeOpen} />&nbsp;</p>
                                        <p><FontAwesomeIcon icon={faMobileAlt} />&nbsp;</p>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}