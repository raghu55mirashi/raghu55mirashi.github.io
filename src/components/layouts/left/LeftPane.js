import React, { Component } from 'react'
import MyContext from '../../../store/MyContext'
import getImageURL from '../getImageURL/getImageURL'
import thumb from '../right/thumb.png'

export default class LeftPane extends Component {
    render() {
        return (
            <MyContext.Consumer>
                {context => (
                    <React.Fragment>
                        {(context.Personal) ? Object.keys(context.Personal).map((item, id) => (
                            <span key={id}>
                                <div className="card" style={{ border: 'unset' }}>
                                    <div className="card-header" style={{ padding: 'unset', border: 'unset', backgroundColor: '#e9ecef' }}>
                                        <div className="leftPane-div">
                                            <img
                                                src={!(context.Personal[item].image) ? thumb : (getImageURL(context.Personal[item].image))}
                                                alt="no pics" className="rounded img-fluid" id={context.Personal[item].image} />
                                        </div>
                                    </div>
                                </div>
                                <div className="card current">
                                    <div className="card-header">{context.Personal[item].latestTech}</div>
                                </div>
                            </span>
                        )) : <div className="card">Record Not Available</div>}
                    </React.Fragment>
                )}
            </MyContext.Consumer>
        )
    }
}
