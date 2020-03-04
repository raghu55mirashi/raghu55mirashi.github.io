import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css';
import LeftPane from './components/layouts/left/LeftPane'
import EduExpSkill from './components/layouts/right/EduExpSkill'
import Home from './components/layouts/right/Home'
import Links from './components/layouts/right/Links'
import ContactMe from './components/layouts/right/ContactMe'
import Portfolio from './components/layouts/right/Portfolio'
import AboutMe from './components/layouts/right/AboutMe'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faHome, faGraduationCap, faLink, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            personaldata: [],
            portfolio: [],
            links: [],
            education: [],
            experience: [],
            skills: [],
            url: 'https://djreact-portfolio.herokuapp.com' //this url is used by all files to fetch api
            // url: 'http://127.0.0.1:8000' //this url is used by all files to fetch api
        }
        this.fetch_data = this.fetch_data.bind(this)
    }

    componentDidMount() {
        this.fetch_data()
    }

    fetch_data() {
        let personaldata = fetch(this.state.url + '/api/personaldata');
        let portfolio = fetch(this.state.url + '/api/projects');
        let links = fetch(this.state.url + '/api/mylinks');
        let education = fetch(this.state.url + '/api/education');
        let experience = fetch(this.state.url + '/api/experience');
        let skills = fetch(this.state.url + '/api/skills');
        Promise.all([personaldata, portfolio, links, education, experience, skills])
            .then(response => Promise.all(response.map(res => res.json())))
            .then(data => {

                this.setState({
                    personaldata: data[0],
                    portfolio: data[1],
                    links: data[2],
                    education: data[3],
                    experience: data[4],
                    skills: data[5]
                })
            })
    }
    render() {
        const { url, personaldata, portfolio, links, education, experience, skills } = this.state
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
                            <LeftPane mydata={personaldata} urls={url} />
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12">
                            <div className="container" style={{ padding: '5px' }}>
                                <div className="card" style={CardColor}>
                                    <div className="card-header app-header" style={CardhColor}>
                                        <Switch>
                                            <Route exact path='/'>
                                                <Home urls={url} mydata={personaldata} />
                                            </Route>
                                            <Route path="/eduskill">
                                                <EduExpSkill education={education} experience={experience} skills={skills} />
                                            </Route>
                                            <Route path="/links">
                                                <Links links={links} />
                                            </Route>
                                            <Route path="/contact">
                                                <ContactMe urls={url} mydata={personaldata} />
                                            </Route>
                                            <Route path="/about">
                                                <AboutMe mydata={personaldata} />
                                            </Route>
                                            <Route path="/portfolio">
                                                <Portfolio portfolio={portfolio} />
                                            </Route>
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