import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faMapMarkerAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import MyContext from '../../../store/MyContext'

export default class ContactMe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            success: false,
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        const username = e.target.elements.username.value
        const email = e.target.elements.email.value
        const message = e.target.elements.message.value
        const subject = e.target.elements.subject.value
        const urls = e.target.elements.urls.value

        fetch(urls + '/api/contactus', {
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
            if (res.status === 201) {
                this.setState({
                    success: true
                })
            }
        })
        e.target.reset();
    }
    
    componentDidMount() {
        setInterval(() => this.setState({ success: false }), 5000)
    }
    
    render() {
        return (
            <MyContext.Consumer>
            {context =>(
                <React.Fragment>
                <div className="contact" style={{ overflow: 'auto' }}>
                    <div className="card" style={{ boxShadow: "0 5px 11px #ccc" }} >
                        <div className="card-header"><FontAwesomeIcon icon={faEnvelopeOpen} />{' '}CONTACT ME</div>
                        <div className="card-body" style={{ background: '#e9ecef' }}>
                            <div className="row"> 
                                <div className="col-lg-8">
                                    <div className="contact-form">
                                        <form onSubmit={this.handleSubmit} id="post">
                                            <textarea name="message" cols="50" rows="5" placeholder="Message" className="form-control" required style={{ marginBottom: '10px' }} />
                                            <input type="text" name="username" placeholder="Username" className="form-control" required style={{ marginRight: "4%" }} />
                                            <input type="email" name="email" placeholder="Email" className="form-control" required />
                                            <div className="form-group">
                                                <input type="text" name="subject" placeholder="Subject" className="form-control" required />
                                            </div>
                                            <input type="hidden" name="urls" value={context.url}/>
                                            <div className="form-sub port-btn">
                                                <button type="submit" className="btn btn1" style={{ color: "white", backgroundColor: "black" }}>SEND MESSAGE</button>
                                            </div>
                                            <span></span>
                                        </form>

                                        {this.state.success
                                            ? (<div class="alert alert-success my-3">
                                                <strong> Message sent! Thank you, will contact you soon! </strong>
                                            </div>)
                                            : (<span></span>)
                                        }
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="address">
                                        <hr />
                                        {Object.keys(context.personaldata).map((item, id) =>
                                            (<span key={id}><p><FontAwesomeIcon icon={faMapMarkerAlt} />{' '}{context.personaldata[item].address}</p>
                                                <p><FontAwesomeIcon icon={faEnvelopeOpen} />{' '}{context.personaldata[item].email}</p>
                                                <p><FontAwesomeIcon icon={faMobileAlt} />{' '}{context.personaldata[item].phone}</p></span>)
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