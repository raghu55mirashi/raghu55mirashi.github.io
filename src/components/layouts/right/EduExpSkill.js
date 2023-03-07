import React, { lazy, Suspense } from 'react'
import { NavLink, HashRouter as Router, Route, Switch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faTasks, faStar } from '@fortawesome/free-solid-svg-icons'

const Education = lazy(() => import('./Educ/Education'))
const Experience = lazy(() => import('./Educ/Experience'))
const Skills = lazy(() => import('./Educ/Skills'))
// const Error = lazy(() => import('../../Error'))

const EduExpSkill = ({ match }) => (
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
                            <Suspense fallback={<div>Loading...</div>}>
                                <Route exact path={`${match.path}`} component={Education} />

                                <Route exact path={`${match.path}/experience`} component={Experience} />

                                <Route exact path={`${match.path}/skills`} component={Skills} />
                            </Suspense>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    </Router>
)

export default EduExpSkill;
