import React, { Component } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import axios from 'axios';
// import { AboutMe } from './AboutMe'
// import { Portfolio } from './Portfolio'

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" render={() => (
                            <div className="home">
                                <h1> Hi ! I'M RAGHAVENDRA</h1>
                                <br />
                                <h4> I'M WEB DEVELOPER</h4>
                                <br />
                                <a href="/about" className="btn btn1" style={{ backgroundColor: 'green' }}>About Me</a>{' '}
                                <a href="/portfolio" className="btn btn1" style={{ border: '1px solid #fff' }}>Portfolio</a>
                            </div>
                        )} />
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

