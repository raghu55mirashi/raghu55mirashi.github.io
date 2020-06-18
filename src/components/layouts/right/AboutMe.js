import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog, faUser } from '@fortawesome/free-solid-svg-icons'
import MyContext from '../../../store/MyContext'

const AboutMe = () => (
    <MyContext.Consumer>
        {context => (
            <React.Fragment >
                {Object.keys(context.Personal).map(item => (
                    <div key={item} className="card about ab" style={{ boxShadow: "0 5px 11px #ccc" }}>
                        <h1>
                            ABOUT <span>ME</span>
                        </h1>
                        <hr style={{ width: "150px", margin: "0 auto" }} /><br />
                        <h4><FontAwesomeIcon icon={faUser} />&nbsp;PERSONAL INFO</h4>
                        <p> {context.Personal[item].summary} </p>
                        <table className="table table-responsive">
                            <tbody>
                                <tr>
                                    <td>
                                        <p>
                                            <b> First Name:</b> {context.Personal[item].firstName}
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            <b> Phone Number:</b> {context.Personal[item].phone}
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>
                                            <b> Last Name:</b> {context.Personal[item].lastName}
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            <b> Address:</b> {context.Personal[item].address}
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>
                                            <b>Date of Birth:</b> {context.Personal[item].birthDate}
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            <b> Email:</b> {context.Personal[item].email}
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>
                                            <b> Nationality:</b> {context.Personal[item].nationality}
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            <b> Spoken Languages:</b> {context.Personal[item].speakingLanguages}
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="about-btn">
                            <a className="btn  btn1" href={context.Personal[item].blogUrl}
                                style={{ padding: "6px 15px", marginBottom: "-5px", backgroundColor: 'black', color: '#fff' }}>
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

