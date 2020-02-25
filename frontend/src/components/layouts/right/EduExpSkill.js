import React from 'react'
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Education from './Educ/Education'
import Experience from './Educ/Experience'
import Skills from './Educ/Skills'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faTasks, faStar } from '@fortawesome/free-solid-svg-icons'

export default function EduExpSkill() {
    return (
        <React.Fragment>
            <Router>
                <div className="edu-container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 edu-left">
                            <div className="bottons">
                                <Link to="/eduskill" className=" btn edu-btn edu-bt1">
                                    <FontAwesomeIcon icon={faGraduationCap} />&nbsp;EDUCATION </Link>
                                <Link to="/edu/experience" className="btn edu-btn edu-bt2">
                                    <FontAwesomeIcon icon={faTasks} />&nbsp;EXPERIENCE</Link>
                                <Link to="/edu/skills" className="btn edu-btn edu-bt3">
                                    <FontAwesomeIcon icon={faStar} />&nbsp;SKILLS</Link>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <div className="can-education" >
                                <Switch>
                                    <Route path="/eduskill" component={Education} />
                                    <Route path="/edu/experience" component={Experience} />
                                    <Route path="/edu/skills" component={Skills} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        </React.Fragment>
    )
}
