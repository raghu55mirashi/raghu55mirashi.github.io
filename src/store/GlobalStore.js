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
            name: 'ddd',
            // url: 'https://djreact-portfolio.herokuapp.com' //this url is used by all files to fetch api
            url: 'http://127.0.0.1:8000', //this url is used by all files to fetch api
            error: false
        }
        this.fetch_data = this.fetch_data.bind(this)
    }

    componentDidMount() {
        this.fetch_data()
    }

    async fetch_data() {
        const urls = [
            'personaldata',
            'projects',
            'mylinks',
            'education',
            'experience',
            'skills'
        ]
        try {
            const [
                personaldata, portfolio, links,
                education, experience, skills] = await Promise.all(urls.map(url =>
                    fetch(this.state.url + '/api/' + url).then(res => res.json())
                ))
            this.setState({
                personaldata, portfolio,
                links, education,
                experience, skills
            })
        } catch (error) {
            this.setState({ error })
        }

    }

    render() {
        return (
            <MyContext.Provider value={this.state}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

