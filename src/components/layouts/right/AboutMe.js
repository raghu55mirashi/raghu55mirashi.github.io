import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog, faUser } from '@fortawesome/free-solid-svg-icons'

export default class AboutMe extends Component {
    render() {
        var items = this.props.mydata

        return (
            <React.Fragment>
                {items.map((item, index) => (
                    <div key={index} className="card about ab" style={{ boxShadow: "0 5px 11px #ccc" }}>
                        <h1>
                            ABOUT <span>ME</span>
                        </h1>
                        <hr style={{ width: "150px", margin: "0 auto" }} /><br />
                        <h4><FontAwesomeIcon icon={faUser} />&nbsp;PERSONAL INFO</h4>
                        <p> {item.summary} </p>
                        <table className="table table-responsive">
                            <tbody>
                                <tr>
                                    <td>
                                        <p>
                                            <b> First Name:</b> {item.firstname}
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            <b> Phone Number:</b> {item.phone}
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>
                                            <b> Last Name:</b> {item.lastname}
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            <b> Address:</b> {item.address}
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>
                                            <b>Date of Birth:</b> {item.dateofbirth}
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            <b> Email:</b> {item.email}
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>
                                            <b> Nationality:</b> {item.nationality}
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            <b> Spoken Languages:</b> {item.spk_lng}
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="about-btn">
                            <a className="btn  btn1" href={item.blog_url} style={{ padding: "6px 15px", marginBottom: "-5px", backgroundColor: 'black', color: '#fff' }}>
                                <FontAwesomeIcon icon={faBlog} />&nbsp;My Blog </a>
                        </div>
                        <br />
                    </div>
                )
                )
                }
            </React.Fragment>
        );
    }
}
