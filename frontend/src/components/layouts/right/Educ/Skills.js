import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default class Skills extends Component {
    constructor(props) {
        super(props)
        this.state = {
            records: []
        }
        this.fetchdata = this.fetchdata.bind(this)
    }
    componentWillMount() {
        this.fetchdata()
    }
    fetchdata() {
        fetch('http://127.0.0.1:8000/api/skills')
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
                <div className="skills" style={{ boxShadow: "0 5px 11px #ccc", maxHeight: '75vh', overflow: 'auto' }}>
                    <div className="card" style={{ overflow: 'auto' }}>
                        <div className="card-header"><FontAwesomeIcon icon={faStar} />&nbsp;SKILLS</div>
                        {items.map((item, id) => (
                            <div key={id} className="card-body">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h6>{item.subject}</h6>
                                                <p>{item.stars}</p>
                                            </td>
                                            <br />
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )
                        )}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

