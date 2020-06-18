import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faCalendar } from '@fortawesome/free-solid-svg-icons'
import MyContext from '../../../../store/MyContext'

const Education = () => (
    <MyContext.Consumer>
        {context => (
            <React.Fragment>
                <div className="education">
                    <div className="card" style={{ boxShadow: "0 5px 11px #ccc", overflow: 'auto' }}>
                        <div className="card-header"><FontAwesomeIcon icon={faGraduationCap} />{' '}EDUCATION</div>
                        <span>
                            {Object.keys(context.Education).map((item, id) =>
                                <div key={id} className="card-body" style={{ paddingBottom: "0" }}>
                                    <div className="header1">
                                        <h6><span>{context.Education[item].degree.toUpperCase()} </span>- {context.Education[item].course.toUpperCase()}</h6>
                                        <p><FontAwesomeIcon icon={faCalendar} />{' '}{context.Education[item].passYear}</p>
                                        Completed my {context.Education[item].degree}  from {' '}
                                        <h6>{context.Education[item].university}</h6>
                                    </div>
                                    <hr />
                                </div>)
                            }
                        </span>
                    </div>
                </div>
            </React.Fragment>
        )}
    </MyContext.Consumer>
)

export default Education;

