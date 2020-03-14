import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css';
import LeftPane from './components/layouts/left/LeftPane'
import Home from './components/layouts/right/Home'
import AboutMe from './components/layouts/right/AboutMe'
import EduExpSkill from './components/layouts/right/EduExpSkill'
import Portfolio from './components/layouts/right/Portfolio'
import Links from './components/layouts/right/Links'
import ContactMe from './components/layouts/right/ContactMe'
import Error from './components/Error'

import Education from './components/layouts/right/Educ/Education'
import Experience from './components/layouts/right/Educ/Experience'
import Skills from './components/layouts/right/Educ/Skills'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faHome, faGraduationCap, faLink, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'

export default class Main extends Component {
    render() {
        return (
            <Router>
                <div className="jumbotron" style={{ padding: '30px -1px', marginBottom: "unset" }}>
                    <span className="btn-group">
                        <Link className="btn bt bt1" to="/"><FontAwesomeIcon icon={faHome} /></Link>
                        <Link className="btn bt bt2" to="/eduskill"><FontAwesomeIcon icon={faGraduationCap} /></Link>
                        <Link className="btn bt bt3" to="/portfolio"><FontAwesomeIcon icon={faBriefcase} /></Link>
                        <Link className="btn bt bt4" to="/links"><FontAwesomeIcon icon={faLink} /></Link>
                        <Link className="btn bt bt5" to="/contact"><FontAwesomeIcon icon={faEnvelopeOpen} /></Link>
                    </span>
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <LeftPane />
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12">
                            <div className="container" style={{ padding: '5px' }}>
                                <div className="card" style={CardColor}>
                                    <div className="card-header app-header" style={CardhColor}>
                                        <Switch>
                                            <Route exact path='/' component={Home} />
                                                
                                            <Route exact path="/about" component={AboutMe} />

                                            <Route exact path="/portfolio" component={Portfolio} />
                                                
                                            <Route exact path="/links" component={Links} />
                                                
                                            <Route exact path="/contact" component={ContactMe} />
                                                
                                            <EduExpSkill>
                                                <Route exact component={() =>
                                                    <React.Fragment>
                                                        <Route exact path="/eduskill">
                                                            <Education />
                                                        </Route>
                                                        <Route exact path="/experience">
                                                            <Experience />
                                                        </Route>
                                                        <Route exact path="/skills">
                                                            <Skills />
                                                        </Route>
                                                    </React.Fragment>                            
                                                } />
                                            </EduExpSkill>

                                            <Route component={Error} />
                                        </Switch>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

const CardColor = {
    backgroundColor: 'transparent',
    border: '1px solid #fff'
}
const CardhColor = {
    backgroundColor: 'transparent',
    borderBottom: 'Unset'
}