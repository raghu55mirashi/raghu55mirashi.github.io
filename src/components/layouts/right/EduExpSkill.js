import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faTasks, faStar } from '@fortawesome/free-solid-svg-icons'

const EduExpSkill = (props) => {
    
    return (
        <React.Fragment>
            <Router>
                <div className="edu-container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 edu-left">
                            <div className="bottons">
                                <Link to="/eduskill" className=" btn edu-btn edu-bt1">
                                    <FontAwesomeIcon icon={faGraduationCap} />&nbsp;EDUCATION </Link>
                                <Link to="/experience" className="btn edu-btn edu-bt2">
                                    <FontAwesomeIcon icon={faTasks} />&nbsp;EXPERIENCE</Link>
                                <Link to="/skills" className="btn edu-btn edu-bt3">
                                    <FontAwesomeIcon icon={faStar} />&nbsp;SKILLS</Link>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <div className="can-education">
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        </React.Fragment>
    )
}
export default EduExpSkill;
