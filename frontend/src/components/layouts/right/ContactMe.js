import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faMapMarkerAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons'

export default function ContactMe() {
    return (
        <div>
            <div className="contact" style={{ overflow: 'auto' }}>
                <div className="card" style={{ boxShadow: "0 5px 11px #ccc" }} >
                    <div className="card-header"><FontAwesomeIcon icon={faEnvelopeOpen} />&nbsp;CONTACT ME</div>
                    <div className="card-body" style={{ background: '#e9ecef' }}>
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="contact-form">
                                    <form action="" method="post">
                                        <textarea id="message" cols="50" rows="5" placeholder="Message" className="form-control" style={{ marginBottom: '10px' }}></textarea>
                                        <input type="text" id="uname" placeholder="Enter your name" className="form-control" style={{ marginRight: "4%" }} />
                                        <input type="email" id="email" placeholder="Enter your email" className="form-control" />
                                        <div className="form-group">
                                            <input type="text" id="subject" placeholder="Enter your subject" className="form-control" />
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
        </div>
    )
}
