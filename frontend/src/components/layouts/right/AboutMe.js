import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog, faUser } from '@fortawesome/free-solid-svg-icons'

export default class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            records: [],
        },
            this.fetch_data = this.fetch_data.bind(this)
    }

    componentDidMount() {
        this.fetch_data()
    }

    fetch_data() {
        fetch('http://127.0.0.1:8000/api/personaldata')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    records: data
                })
            })
    }
    render() {
        var items = this.state.records
        return (
            <React.Fragment>
                {items.map(function (item, index) {
                    return (
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
                                <a className="btn  btn1" href="https://learn-byweb.blogspot.com/" style={{ padding: "6px 15px", marginBottom: "-5px", backgroundColor: 'black', color: '#fff' }}>
                                    <FontAwesomeIcon icon={faBlog} />&nbsp;My Blog </a>
                            </div>
                            <br />
                        </div>
                    )
                })}
            </React.Fragment>
        );
    }
}