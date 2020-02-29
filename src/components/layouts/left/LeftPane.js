import React, { Component } from 'react'

export default class LeftPane extends Component {
    render() {
        var items = this.props.mydata
        const url = this.props.urls;

        return (
            <React.Fragment>
                {items.map((item, id) => (
                    <span key={id}>
                        <div className="card" style={{ border: 'unset' }}>
                            <div className="card-header" style={{ padding: 'unset', border: 'unset', backgroundColor: '#e9ecef' }}>
                                <div className="leftPane-div">
                                    <img src={url + item.image} alt="me" className="rounded img-fluid" />
                                </div>
                            </div>
                        </div>
                        <div className="card current">
                            <div className="card-header">{item.latest_tech}</div>
                        </div>
                    </span>))
                }
            </React.Fragment >

        )
    }
}
