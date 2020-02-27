import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faDownload } from '@fortawesome/free-solid-svg-icons'


export default class Home extends Component {
    render() {
        var items = this.props.mydata

        const url = this.props.url;
        return (
            <>
                {items.map((item, id) =>
                    <div key={id} className="home">
                        <h1> Hi ! I'M {item.firstname}</h1>
                        <br />
                        <h4> I'M {item.designation}</h4>
                        <br />
                        <Link to="/about" className="btn btn1" style={{ border: "1px solid #fff" }}><FontAwesomeIcon icon={faUser} />{' '}About Me</Link>{' '}
                        <a className="btn btn1" id="res" style={{ border: "1px solid #fff" }} href={url + item.resume}
                            download target="_blank"><FontAwesomeIcon icon={faDownload} />{' '}My Resume</a>
                    </div>
                )}
            </>
        );
    }
}

