import React, { Component } from 'react'
import MyContext from './MyContext'

export default class GlobalStore extends Component {
    constructor(props) {
        super(props)
        this.state = {
            personaldata: [],
            portfolio: [],
            links: [],
            education: [],
            experience: [],
            skills: [],
            name:'ddd',
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
        return (
            <MyContext.Provider value={this.state}>
               {this.props.children} 
            </MyContext.Provider>
        )
    }
}

