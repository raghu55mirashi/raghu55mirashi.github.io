import React, { Component } from 'react'
import { SocialIcon } from 'react-social-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'


export default class Links extends Component {
    constructor(props) {
        super(props)
        this.state = {
            records: []
        }
        this.fetchdata = this.fetchdata.bind(this)
    }
    componentDidMount() {
        this.fetchdata()
    }
    fetchdata() {
        fetch(this.props.urls + '/api/mylinks')
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
                <div className="mylinks" >
                    <div className="card" style={{ boxShadow: "0 5px 11px #ccc" }}>
                        <div className="card-header mylink-header">
                            <FontAwesomeIcon icon={faLink} />&nbsp;LINKS</div>
                        <div className="card-body" style={{ textAlign: 'center', paddingTop: '50px' }}>
                            {items.map((item, id) => (
                                <span key={id}>
                                    <SocialIcon url={item.site_url} />{' '}
                                </span>
                            )
                            )}
                            <br /><br />
                            <hr style={{ width: '150px' }}></hr>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}
