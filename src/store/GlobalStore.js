import React, { Component } from 'react'
import MyContext from './MyContext'
// import Mydata from './data.json'

export default class GlobalStore extends Component {
    constructor(props) {
        super(props)

        this.state = {
            personaldata: {},
            portfolio: {},
            links: {},
            education: {},
            experience: {},
            skills: {},
            name: 'ddd',
            url: 'https://react-porfolio.firebaseio.com',
            error: false
        }
        this.fetch_data = this.fetch_data.bind(this)
    }

    componentDidMount() {
        this.fetch_data()
        // const {
        //     personaldata, portfolio, links,
        //     education, experience, skills } = Mydata
        // this.setState({
        //     personaldata, portfolio,
        //     links, education,
        //     experience, skills
        // })
    }

    async fetch_data() {

        const urls = [
            'Personal',
            'Portfolio',
            'Links',
            'Education',
            'Experience',
            'Skills',
        ]
        try {
            const [Personal, Portfolio, Links, Education, Experience, Skills] = await Promise.all(urls.map(url =>
                fetch(`${this.state.url}/${url}.json`).then(res => res.json())
            ))
            // Object.keys(Links).map(key => {
            //     console.log(Links[key]);

            // })

            // console.log(Personal);

            this.setState({
                personaldata: Personal,
                portfolio: Portfolio,
                links: Links,
                education: Education,
                experience: Experience,
                skills: Skills
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

