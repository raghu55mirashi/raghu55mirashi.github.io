import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog, faUser } from '@fortawesome/free-solid-svg-icons'
import MyContext from '../../../store/MyContext'

const AboutMe = () => {
    const { Personal } = useContext(MyContext)
    return (
        <React.Fragment >
            {(Personal) ? Object.keys(Personal).map(item => (
                <div key={item} className="card about ab" style={{ boxShadow: "0 5px 11px #ccc" }}>
                    <h1>
                        ABOUT <span>ME</span>
                    </h1>
                    <hr style={{ width: "150px", margin: "0 auto" }} /><br />
                    <h4><FontAwesomeIcon icon={faUser} />&nbsp;PERSONAL INFO</h4>
                    <p> {Personal[item].summary} </p>
                    <table className="table table-responsive">
                        <tbody>
                            <tr>
                                <td>
                                    <p>
                                        <b> First Name:</b> {Personal[item].firstName}
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <b> Phone Number:</b> {Personal[item].phone}
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                        <b> Last Name:</b> {Personal[item].lastName}
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <b> Address:</b> {Personal[item].address}
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                        <b>Date of Birth:</b> {Personal[item].birthDate}
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <b> Email:</b> {Personal[item].email}
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                        <b> Nationality:</b> {Personal[item].nationality}
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <b> Spoken Languages:</b> {Personal[item].speakingLanguages}
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="about-btn">
                        <a className="btn  btn1" href={Personal[item].blogUrl}
                            style={{ padding: "6px 15px", marginBottom: "-5px", backgroundColor: 'black', color: '#fff' }}>
                            <FontAwesomeIcon icon={faBlog} />&nbsp;My Blog </a>
                    </div>
                    <br />
                </div>
            )) : <div className="card about ab">Record Not Available</div>}
        </React.Fragment>
    )

}
export default AboutMe

