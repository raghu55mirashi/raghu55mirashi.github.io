import React from 'react'
import { NavLink, HashRouter as Router, Route, Switch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faTasks, faStar } from '@fortawesome/free-solid-svg-icons'
import Education from './Educ/Education'
import Experience from './Educ/Experience'
import Skills from './Educ/Skills'

const EduExpSkill = ({ match }) => {

    return (
        <React.Fragment>
            <Router>
                <div className="edu-container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 edu-left">
                            <div className="buttons">
                                <NavLink to={`${match.path}`} exact className=" btn edu-btn edu-bt1">
                                    <FontAwesomeIcon icon={faGraduationCap} />&nbsp;EDUCATION </NavLink>
                                <NavLink to={`${match.path}/experience`} exact className="btn edu-btn edu-bt2">
                                    <FontAwesomeIcon icon={faTasks} />&nbsp;EXPERIENCE</NavLink>
                                <NavLink to={`${match.path}/skills`} exact className="btn edu-btn edu-bt3">
                                    <FontAwesomeIcon icon={faStar} />&nbsp;SKILLS</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <div className="can-education">
                                <Switch>
                                    <Route exact path={`${match.path}`} component={Education} />

                                    <Route exact path={`${match.path}/experience`} component={Experience} />

                                    <Route exact path={`${match.path}/skills`} component={Skills} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        </React.Fragment>
    )
}
export default EduExpSkill;
