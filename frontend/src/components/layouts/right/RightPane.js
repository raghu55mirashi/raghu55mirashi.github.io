import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EduExpSkill from './EduExpSkill'
import Home from './Home'
import Links from './Links'
import ContactMe from './ContactMe'
import Portfolio from './Portfolio'
import About from './AboutMe'

export default class RightPane extends Component {
    render() {
        return (
            <Router>
                <div className="container" style={{ padding: '5px' }}>
                    <div className="card" style={CardColor}>
                        <div className="card-header right-pane-header" style={CardhColor}>
                            <Switch>
                                <Route exact path='/' component={Home} />
                                <Route path="/eduskill" component={EduExpSkill} />
                                <Route path="/links" component={Links} />
                                <Route path="/contact" component={ContactMe} />
                                <Route path="/portfolio" component={Portfolio} />
                                <Route path="/about" component={About} />
                            </Switch>
                        </div>
                    </div>
                </div >
            </Router >
        )
    }
}

const CardColor = {
    backgroundColor: 'transparent',
    border: '1px solid #fff'
}
const CardhColor = {
    backgroundColor: 'transparent',
    borderBottom: 'Unset',
}