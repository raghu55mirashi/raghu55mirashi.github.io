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
            subject: '',
            errors: {
                usernameErr: '',
                emailErr: '',
                messageErr: '',
                subjectErr: ''
            }
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
        // let err = ''
        // if (name === 'message' || name === 'username' || name === 'subject') {
        //     if (value.length < 3) {
        //         err = `Enter your ${name} with atleast 3 character`
        //     }
        // }

        // this.setState({
        //     errorMessage: err
        // })
    }
    // renderError() {
    //     if (this.state.formValidation && this.state.message.length <= 3) {
    //         return (
    //             <label className="error">Please enter the atleast 3 character.</label>
    //         );
    //     }
    //     return null;
    // }
    validation = (re, checkData, data, err) => {
        if (!re.test(checkData) && checkData.length < 3) {
            this.setState((prevData) => {
                return { ...prevData, errors: { ...prevData.errors, [err]: `${data} is invalid` } }
            }, () => { console.log(this.state); })
            return false;
        } else {
            this.setState((prevData) => {
                return { ...prevData, errors: { ...prevData.errors, [err]: `` } }
            }, () => { console.log(this.state); })
            return true;
        }
        // let valid = true
        // const { username, email, message, subject } = this.state
        // if (message.length <= 3) {
        //     valid = false
        // }
        // return valid
        // if (username.length < 3) {
        //     this.refuser.current.focus();
        // }
        // if (!email) {
        //     this.refemail.current.focus();
        // }
        // if (subject.length < 3) {
        //     this.refsub.current.focus();
        // }
    }
    validate = () => {
        let valid = true
        const { username, email, message, subject } = this.state
        if (username.length < 3) {
            valid = false
        }
        return valid
    }
    handleSubmit = (e) => {
        e.preventDefault()
        /* eslint-disable */
        const usernameRE = /^[A-Z]{2,10}$/i;
        const messageRE = /^[A-Z]{2,100}$/i;
        const subjectRE = /^[A-Z]{2,20}$/i;
        const emailRE = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]{2,5})$/;
        // const passRE = /^[A-Za-z0-9_\.\-\@\#\!\%\^\$]{4}$/;
        // const mobileRE = /^[0-9]{10}$/;

        const { username, email, message, subject } = this.state

        // if (message.length <= 3) {
        //     this.refmsg.current.focus();
        //     this.setState({
        //         tooltipOpen: true
        //     })
        // }
        // if (username.length < 3) {
        //     this.refuser.current.focus();
        // }
        // if (!email) {
        //     this.refemail.current.focus();
        // }
        // if (subject.length < 3) {
        //     this.refsub.current.focus();
        // }
        if (
            this.validation(usernameRE, username, "username", "usernameErr") &&
            this.validation(messageRE, message, "message", "messageErr") &&
            this.validation(subjectRE, subject, "subject", "subjectErr") &&
            this.validation(emailRE, email, "email", "emailErr")
        ) {
            // if (username.length >= 3 && email && message.length >= 3 && subject.length >= 3) {
            const urls = e.target.elements.urls.value
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
        const { username, email, message, subject, errors } = this.state

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
                                                    <textarea name="message" id="message" cols="50" rows="5" maxLength="300" placeholder="Message"
                                                        className="form-control" style={{ marginBottom: '10px' }} title="Maximum of 300 characters can use"
                                                        onChange={this.handleChange} value={message} onBlur={this.validate()} />
                                                    <span className="text-danger">{errors.messageErr}</span>
                                                    <input type="text" title={this.state.errorMessage} name="username" placeholder="Username"
                                                        className="form-control" style={{ marginRight: "4%" }}
                                                        onChange={this.handleChange} value={username} />
                                                    <span className="text-danger">{errors.usernameErr}</span>
                                                    <input type="email" name="email" placeholder="Email"
                                                        className="form-control" required id="contact-email"
                                                        onChange={this.handleChange} value={email} />
                                                    <span className="text-danger">{errors.emailErr}</span>
                                                    <div className="form-group">
                                                        <input type="text" title={this.state.errorMessage} name="subject" placeholder="Subject"
                                                            className="form-control"
                                                            onChange={this.handleChange} value={subject} />
                                                        <span className="text-danger">{errors.subjectErr}</span>
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
                                                {(context.Personal) ? Object.keys(context.Personal).map((item, id) =>
                                                    (<span key={id}><p><FontAwesomeIcon icon={faMapMarkerAlt} />{' '}{context.Personal[item].address}</p>
                                                        <p><FontAwesomeIcon icon={faEnvelopeOpen} />{' '}{context.Personal[item].email}</p>
                                                        <p><FontAwesomeIcon icon={faMobileAlt} />{' '}{context.Personal[item].phone}</p></span>)
                                                ) : <div>Record Not Available</div>}
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


// import React, { Component } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelopeOpen, faMapMarkerAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
// import MyContext from '../../../store/MyContext'
// import Swal from 'sweetalert2'

// export default class ContactMe extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             tooltipOpen: true,
//             errorMessage: '',
//             username: '',
//             email: '',
//             message: '',
//             subject: ''
//         }
//         this.refmsg = React.createRef()
//         this.refuser = React.createRef()
//         this.refemail = React.createRef()
//         this.refsub = React.createRef()
//     }
//     handleChange = (e) => {
//         const { name, value } = e.target
//         this.setState({
//             [name]: value
//         })
//         let err = ''
//         if (name === 'message' || name === 'username' || name === 'subject') {
//             if (value.length < 3) {
//                 err = `Enter your ${name} with atleast 3 character`
//             }
//         }
//         this.setState({
//             errorMessage: err
//         })
//     }
//     handleSubmit = (e) => {
//         e.preventDefault()
//         const { username, email, message, subject } = this.state
//         if (message.length <= 3) {
//             this.refmsg.current.focus();
//             this.setState({
//                 tooltipOpen: true
//             })
//         }
//         if (username.length < 3) {
//             this.refuser.current.focus();
//         }
//         if (!email) {
//             this.refemail.current.focus();
//         }
//         if (subject.length < 3) {
//             this.refsub.current.focus();
//         }
//         const urls = e.target.elements.urls.value

//         if (username.length >= 3 && email && message.length >= 3 && subject.length >= 3) {
//             fetch(`${urls}/contactus.json`, {
//                 method: 'POST',
//                 mode: 'cors',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     "username": username,
//                     "email": email,
//                     "message": message,
//                     "subject": subject
//                 })
//             }).then(res => {
//                 if (res.status === 200) {
//                     this.setState({
//                         username: '',
//                         email: '',
//                         message: '',
//                         subject: ''
//                     })
//                     Swal.fire(
//                         'Message Sent! Will Contact you soon',
//                         ' ',
//                         'success'
//                     )
//                 }
//             })
//         } else {
//             Swal.fire('Please fill fields with atleast 3 characters')
//         }
//     }

//     componentDidMount() {
//         setInterval(() => this.setState({ success: false }), 5000)
//     }

//     render() {
//         // var alertMsg = null;
//         // if (this.state.success) {
//         //     alertMsg = (
//         //         <div className="alert alert-success my-3">
//         //             <strong> Message sent! Thank you, will contact you soon! </strong>
//         //         </div>)
//         // }
//         const { username, email, message, subject } = this.state

//         return (
//             <MyContext.Consumer>
//                 {context => (
//                     <React.Fragment>
//                         <div className="contact" style={{ overflow: 'auto' }}>
//                             <div className="card" style={{ boxShadow: "0 5px 11px #ccc" }} >
//                                 <div className="card-header"><FontAwesomeIcon icon={faEnvelopeOpen} />{' '}CONTACT ME</div>
//                                 <div className="card-body" style={{ background: '#e9ecef' }}>
//                                     <div className="row">
//                                         <div className="col-lg-8">
//                                             <div className="contact-form">
//                                                 <form onSubmit={this.handleSubmit} id="post">
//                                                     <textarea name="message" id="message" cols="50" rows="5" maxLength="300" placeholder="Message"
//                                                         className="form-control" style={{ marginBottom: '10px' }} title="Maximum of 300 characters can use"
//                                                         onChange={this.handleChange} ref={this.refmsg} value={message} />

//                                                     <input type="text" title={this.state.errorMessage} name="username" placeholder="Username"
//                                                         className="form-control" style={{ marginRight: "4%" }}
//                                                         onChange={this.handleChange} ref={this.refuser} value={username} />
//                                                     <input type="email" name="email" placeholder="Email"
//                                                         className="form-control" required id="contact-email"
//                                                         onChange={this.handleChange} ref={this.refemail} value={email} />
//                                                     <div className="form-group">
//                                                         <input type="text" title={this.state.errorMessage} name="subject" placeholder="Subject"
//                                                             className="form-control" required
//                                                             onChange={this.handleChange} ref={this.refsub} value={subject} />
//                                                     </div>
//                                                     <input type="hidden" name="urls" value={context.url} />
//                                                     <div className="form-sub port-btn">
//                                                         <button type="submit" className="btn btn1" style={{ color: "white", backgroundColor: "black" }}>SEND MESSAGE</button>
//                                                     </div>
//                                                     <span></span>
//                                                 </form>

//                                             </div>
//                                         </div>
//                                         <div className="col-lg-4">
//                                             <div className="address">
//                                                 <hr />
//                                                 {(context.Personal) ? Object.keys(context.Personal).map((item, id) =>
//                                                     (<span key={id}><p><FontAwesomeIcon icon={faMapMarkerAlt} />{' '}{context.Personal[item].address}</p>
//                                                         <p><FontAwesomeIcon icon={faEnvelopeOpen} />{' '}{context.Personal[item].email}</p>
//                                                         <p><FontAwesomeIcon icon={faMobileAlt} />{' '}{context.Personal[item].phone}</p></span>)
//                                                 ) : <div>Record Not Available</div>}
//                                                 <hr />
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </React.Fragment>
//                 )}
//             </MyContext.Consumer>
//         )
//     }
// }