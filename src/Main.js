import React, { useContext, lazy, Suspense } from 'react'
import { HashRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faHome, faGraduationCap, faLink, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'

// import LeftPane from './components/layouts/left/LeftPane'
// import Home from './components/layouts/right/Home'
// import AboutMe from './components/layouts/right/AboutMe'
// import EduExpSkill from './components/layouts/right/EduExpSkill'
// import Portfolio from './components/layouts/right/Portfolio'
// import Links from './components/layouts/right/Links'
// import ContactMe from './components/layouts/right/ContactMe'

// import Error from './components/Error'
import './Main.css'
import './App.css';

import Spinner from './components/UI/Spinner/Spinner'
import MyContext from './store/MyContext'

const LeftPane = lazy(() => import('./components/layouts/left/LeftPane'))
const Home = lazy(() => import('./components/layouts/right/Home'))
const AboutMe = lazy(() => import('./components/layouts/right/AboutMe'))
const EduExpSkill = lazy(() => import('./components/layouts/right/EduExpSkill'))
const Portfolio = lazy(() => import('./components/layouts/right/Portfolio'))
const Links = lazy(() => import('./components/layouts/right/Links'))
const ContactMe = lazy(() => import('./components/layouts/right/ContactMe'))

const Main = () => {
    const { loading } = useContext(MyContext)
    return (
        <Router>
            {
                loading ?
                    <div className="jumbotron" style={{ height: '100vh' }}>
                        <Spinner />
                    </div>

                    : <div className="jumbotron main-container">
                        <span className='btn-group'>
                            <NavLink className="btn bt bt1" to="/" exact><FontAwesomeIcon icon={faHome} /></NavLink>
                            <NavLink className="btn bt bt2" to="/eduskill"><FontAwesomeIcon icon={faGraduationCap} /></NavLink>
                            <NavLink className="btn bt bt3" to="/portfolio"><FontAwesomeIcon icon={faBriefcase} /></NavLink>
                            <NavLink className="btn bt bt4" to="/links"><FontAwesomeIcon icon={faLink} /></NavLink>
                            <NavLink className="btn bt bt5" to="/contact"><FontAwesomeIcon icon={faEnvelopeOpen} /></NavLink>
                        </span>

                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <Suspense fallback={<div>Loading...</div>}>
                                    <LeftPane />
                                </Suspense>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-12">
                                <div className="container" style={{ padding: '0px', height: '100%' }}>
                                    <div className="card" style={CardColor}>
                                        <div className="card-header app-header section-borders" style={CardhColor}>
                                            <Switch>
                                                <Suspense fallback={<div>Loading...</div>}>
                                                    <Route exact path='/' component={Home} />

                                                    <Route exact path="/about" component={AboutMe} />

                                                    <Route path="/eduskill" component={EduExpSkill} />

                                                    <Route exact path="/portfolio" component={Portfolio} />

                                                    <Route exact path="/links" component={Links} />

                                                    <Route exact path="/contact" component={ContactMe} />
                                                </Suspense>
                                            </Switch>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </Router>
    )
}
export default Main;

const CardColor = {
    backgroundColor: 'transparent',
    border: '1px solid rgb(0 253 153)',
    height: '100%'
}
const CardhColor = {
    backgroundColor: 'transparent',
    borderBottom: 'unset',
    height: '100%'
}