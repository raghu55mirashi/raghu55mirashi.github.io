import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks, faCalendar } from '@fortawesome/free-solid-svg-icons'


export default class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            records: []
        },
            this.fetchdata = this.fetchdata.bind(this)
    }
    componentWillMount() {
        this.fetchdata()
    }
    fetchdata() {
        fetch('http://127.0.0.1:8000/api/experience')
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
                <div className="experience" >
                    <div className="card" style={{ boxShadow: "0 5px 11px #ccc", overflow: 'auto' }}>
                        <div className="card-header">
                            <FontAwesomeIcon icon={faTasks} />&nbsp;EXPERIENCE</div>
                        {items.map((item, id) => {
                            return (
                                <div key={id} className="card-body" style={{ paddingBottom: 0 }}>
                                    <div className="header1">
                                        <h6><span>{item.designation} </span>- {item.company}</h6>
                                        <p><FontAwesomeIcon icon={faCalendar} />&nbsp;{item.duration}</p>
                                        {item.summary}
                                        <h6> {item.technology}</h6>
                                    </div>
                                    <hr />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}





