import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

const Education = props => {
    var items = props.education
    return (
        <React.Fragment>
            <div className="education">
                <div className="card" style={{ boxShadow: "0 5px 11px #ccc", overflow: 'auto' }}>
                    <div className="card-header"><FontAwesomeIcon icon={faGraduationCap} />&nbsp;EDUCATION</div>
                    <span>
                        {
                            items.map((item, id) =>
                                <div key={id} className="card-body" style={{ paddingBottom: "0" }}>
                                    <div className="header1">
                                        <h6><span>{item.degree} </span>- {item.course}</h6>
                                        <p><i className="far fa-calendar"></i>&nbsp;{item.pass_year}</p>
                                        Completed my {item.degree} |  from {' '}
                                        <h6>{item.university}</h6>
                                    </div>
                                    <hr />
                                </div>)
                        }
                    </span>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Education;

