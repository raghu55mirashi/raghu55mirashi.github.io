import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog, faUser } from '@fortawesome/free-solid-svg-icons'
import MyContext from '../../../store/MyContext'

const AboutMe = () => (
    <MyContext.Consumer>
        {context => (
            <React.Fragment >
                {Object.keys(context.personaldata).map(item => (
                    <div key={item} className="card about ab" style={{ boxShadow: "0 5px 11px #ccc" }}>
                        <h1>
                            ABOUT <span>ME</span>
                        </h1>
                        <hr style={{ width: "150px", margin: "0 auto" }} /><br />
                        <h4><FontAwesomeIcon icon={faUser} />&nbsp;PERSONAL INFO</h4>
                        <p> {context.personaldata[item].summary} </p>
                        <table className="table table-responsive">
                            <tbody>
                                <tr>
                                    <td>
                                        <p>
                                            <b> First Name:</b> {context.personaldata[item].firstName}
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            <b> Phone Number:</b> {context.personaldata[item].phone}
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>
                                            <b> Last Name:</b> {context.personaldata[item].lastName}
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            <b> Address:</b> {context.personaldata[item].address}
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>
                                            <b>Date of Birth:</b> {context.personaldata[item].birthDate}
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            <b> Email:</b> {context.personaldata[item].email}
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>
                                            <b> Nationality:</b> {context.personaldata[item].nationality}
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            <b> Spoken Languages:</b> {context.personaldata[item].speakingLanguages}
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="about-btn">
                            <a className="btn  btn1" href={context.personaldata[item].blogUrl} style={{ padding: "6px 15px", marginBottom: "-5px", backgroundColor: 'black', color: '#fff' }}>
                                <FontAwesomeIcon icon={faBlog} />&nbsp;My Blog </a>
                        </div>
                        <br />
                    </div>
                ))}
            </React.Fragment>
        )}
    </MyContext.Consumer>
)
export default AboutMe

