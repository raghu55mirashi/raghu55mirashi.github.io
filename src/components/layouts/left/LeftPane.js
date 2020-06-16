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
                        {Object.keys(context.personaldata).map((item, id) => (
                            <span key={id}>
                                <div className="card" style={{ border: 'unset' }}>
                                    <div className="card-header" style={{ padding: 'unset', border: 'unset', backgroundColor: '#e9ecef' }}>
                                        <div className="leftPane-div">
                                            <img
                                                src={!(context.personaldata[item].image) ? thumb : (getImageURL(context.personaldata[item].image))}
                                                alt="no pics" className="rounded img-fluid" id={context.personaldata[item].image} />
                                        </div>
                                    </div>
                                </div>
                                <div className="card current">
                                    <div className="card-header">{context.personaldata[item].latestTech}</div>
                                </div>
                            </span>))
                        }
                    </React.Fragment>
                )}
            </MyContext.Consumer>
        )
    }
}
