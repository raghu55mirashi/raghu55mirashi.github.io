import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faMapMarkerAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import MyContext from '../../../store/MyContext'
import Swal from 'sweetalert2'

export default class ContactMe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tooltipOpen: true,
            errorMessage: '',
            username: '',
            email: '',
            message: '',
            subject: ''
        }
        this.refmsg = React.createRef()
        this.refuser = React.createRef()
        this.refemail = React.createRef()
        this.refsub = React.createRef()
    }
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
        let err = ''
        if (name === 'message' || name === 'username' || name === 'subject') {
            if (value.length < 3) {
                err = `Enter your ${name} with atleast 3 character`
            }
        }
        this.setState({
            errorMessage: err
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { username, email, message, subject } = this.state
        if (message.length <= 3) {
            this.refmsg.current.focus();
            this.setState({
                tooltipOpen: true
            })
        }
        if (username.length < 3) {
            this.refuser.current.focus();
        }
        if (!email) {
            this.refemail.current.focus();
        }
        if (subject.length < 3) {
            this.refsub.current.focus();
        }
        const urls = e.target.elements.urls.value

        if (username.length >= 3 && email && message.length >= 3 && subject.length >= 3) {
            fetch(`${urls}/contactus.json`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "username": username,
                    "email": email,
                    "message": message,
                    "subject": subject
                })
            }).then(res => {
                if (res.status === 200) {
                    this.setState({
                        username: '',
                        email: '',
                        message: '',
                        subject: ''
                    })
                    Swal.fire(
                        'Message Sent! Will Contact you soon',
                        ' ',
                        'success'
                    )
                }
            })
        } else {
            Swal.fire('Please fill fields with atleast 3 characters')
        }
    }

    componentDidMount() {
        setInterval(() => this.setState({ success: false }), 5000)
    }

    render() {
        // var alertMsg = null;
        // if (this.state.success) {
        //     alertMsg = (
        //         <div className="alert alert-success my-3">
        //             <strong> Message sent! Thank you, will contact you soon! </strong>
        //         </div>)
        // }
        const { username, email, message, subject } = this.state

        return (
            <MyContext.Consumer>
                {context => (
                    <React.Fragment>
                        <div className="contact" style={{ overflow: 'auto' }}>
                            <div className="card" style={{ boxShadow: "0 5px 11px #ccc" }} >
                                <div className="card-header"><FontAwesomeIcon icon={faEnvelopeOpen} />{' '}CONTACT ME</div>
                                <div className="card-body" style={{ background: '#e9ecef' }}>
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="contact-form">
                                                <form onSubmit={this.handleSubmit} id="post">
                                                    <textarea title={this.state.errorMessage} name="message" id="message" cols="50" rows="5" placeholder="Message"
                                                        className="form-control" style={{ marginBottom: '10px' }}
                                                        onChange={this.handleChange} ref={this.refmsg} value={message} />

                                                    <input type="text" title={this.state.errorMessage} name="username" placeholder="Username"
                                                        className="form-control" style={{ marginRight: "4%" }}
                                                        onChange={this.handleChange} ref={this.refuser} value={username} />
                                                    <input type="email" name="email" placeholder="Email"
                                                        className="form-control" required id="contact-email"
                                                        onChange={this.handleChange} ref={this.refemail} value={email} />
                                                    <div className="form-group">
                                                        <input type="text" title={this.state.errorMessage} name="subject" placeholder="Subject"
                                                            className="form-control" required
                                                            onChange={this.handleChange} ref={this.refsub} value={subject} />
                                                    </div>
                                                    <input type="hidden" name="urls" value={context.url} />
                                                    <div className="form-sub port-btn">
                                                        <button type="submit" className="btn btn1" style={{ color: "white", backgroundColor: "black" }}>SEND MESSAGE</button>
                                                    </div>
                                                    <span></span>
                                                </form>

                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="address">
                                                <hr />
                                                {Object.keys(context.Personal).map((item, id) =>
                                                    (<span key={id}><p><FontAwesomeIcon icon={faMapMarkerAlt} />{' '}{context.Personal[item].address}</p>
                                                        <p><FontAwesomeIcon icon={faEnvelopeOpen} />{' '}{context.Personal[item].email}</p>
                                                        <p><FontAwesomeIcon icon={faMobileAlt} />{' '}{context.Personal[item].phone}</p></span>)
                                                )}
                                                <hr />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                )}
            </MyContext.Consumer>
        )
    }
}