import React, { Component } from 'react'

export default class LeftPane extends Component {
    render() {
        var items = this.props.mydata
        var image = items.map(item => {
            return item.image
        })
        const url = this.props.urls;

        return (
            <React.Fragment>
                {/* <div className="container" style={{ padding: '5px', border: 'unset' }}> */}
                <div className="card" style={{ border: 'unset' }}>
                    <div className="card-header" style={{ padding: 'unset', border: 'unset', backgroundColor: '#e9ecef' }}>
                        <div className="leftPane-div">
                            <img src={url + image} alt="me" className="rounded img-fluid" />
                        </div>
                    </div>
                </div>
                {/* </div > */}
                <div className="card current">
                    <div className="card-header">Currently working on ReactJS, Django, DjangoRestFramework, Python, Bootstrap, Javascript</div>
                </div>
            </React.Fragment >
        )
    }
}
