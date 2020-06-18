import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks, faCalendar, faCogs } from '@fortawesome/free-solid-svg-icons'
import MyContext from '../../../../store/MyContext'

const Experience = () => (
    <MyContext.Consumer>
        {context => (
            <React.Fragment>
                <div className="experience" >
                    <div className="card" style={{ boxShadow: "0 5px 11px #ccc", overflow: 'auto' }}>
                        <div className="card-header">
                            <FontAwesomeIcon icon={faTasks} />{' '}EXPERIENCE</div>
                        {Object.keys(context.Experience).map((item, id) => (
                            <div key={id} className="card-body" style={{ paddingBottom: 0 }}>
                                <div className="header1">
                                    <h6><span>{context.Experience[item].designation} </span>- {context.Experience[item].company}</h6>
                                    <p><FontAwesomeIcon icon={faCalendar} />{'  '}{context.Experience[item].duration}</p>
                                    <p><FontAwesomeIcon icon={faCogs} /> {'  '}{context.Experience[item].technology}</p>
                                    <p>{context.Experience[item].summary}</p>
                                </div>
                                <hr />
                            </div>
                        ))
                        }
                    </div>
                </div>
            </React.Fragment>
        )}
    </MyContext.Consumer>
);


export default Experience



