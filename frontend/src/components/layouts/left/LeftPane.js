import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import image from '../../../../src/me.JPG'

export default class LeftPane extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container" style={{ padding: '5px', border: 'unset' }}>
                    <div className="card" style={{ border: 'unset' }}>
                        <div className="card-header" style={{ padding: 'unset', border: 'unset', backgroundColor: '#e9ecef' }}>
                            <div className="leftPane-div">
                                <img src={image} alt="me" className="rounded img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="card leftbtncard" style={CustBtn}>
                        <div className="card-header" style={{ borderBottom: 'unset', backgroundColor: 'unset' }}>
                            <a className="btn btn1" id="res" href="resumes/Cv.pdf"
                                download target="_blank"><FontAwesomeIcon icon={faDownload} />{' '}My Resume</a>
                        </div>
                    </div>
                </div >
            </React.Fragment>
        )
    }
}

const CustBtn = {
    marginTop: '105px',
    alignItems: 'center',
    backgroundColor: 'unset',
    border: 'none'
}