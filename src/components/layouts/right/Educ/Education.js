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
                            {Object.keys(context.education).map((item, id) =>
                                <div key={id} className="card-body" style={{ paddingBottom: "0" }}>
                                    <div className="header1">
                                        <h6><span>{context.education[item].degree.toUpperCase()} </span>- {context.education[item].course.toUpperCase()}</h6>
                                        <p><FontAwesomeIcon icon={faCalendar} />{' '}{context.education[item].passYear}</p>
                                        Completed my {context.education[item].degree}  from {' '}
                                        <h6>{context.education[item].university}</h6>
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

