import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faCalendar } from '@fortawesome/free-solid-svg-icons'
import MyContext from '../../../../store/MyContext'

const Education = () => {
    const { Education } = useContext(MyContext)
    return (
        <React.Fragment>
            <div className="education">
                <div className="card" style={{ boxShadow: "0 5px 11px #ccc", overflow: 'auto' }}>
                    <div className="card-header"><FontAwesomeIcon icon={faGraduationCap} />{' '}EDUCATION</div>
                    <span>
                        {(Education) ? Object.keys(Education).map((item, id) =>
                            <div key={id} className="card-body" style={{ paddingBottom: "0" }}>
                                <div className="header1">
                                    <h6><span>{Education[item].degree.toUpperCase()} </span>- {Education[item].course.toUpperCase()}</h6>
                                    <p><FontAwesomeIcon icon={faCalendar} />{' '}{Education[item].passYear}</p>
                                        Completed my {Education[item].degree}  from {' '}
                                    <h6>{Education[item].university}</h6>
                                </div>
                                <hr />
                            </div>
                        ) : <div className="card-body">Record Not Available</div>}
                    </span>
                </div>
            </div>
        </React.Fragment>
    )
}


export default Education;

