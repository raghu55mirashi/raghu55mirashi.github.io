import React, { Component } from 'react'
import MyContext from './MyContext'

export default class GlobalStore extends Component {
    state = {
        Personal: {},
        Portfolio: {},
        Links: {},
        Education: {},
        Experience: {},
        Skills: {},
        url: 'https://react-porfolio.firebaseio.com',
        error: false,
        loading: true
    }

    componentDidMount = async () => {
        await this.fetch_data()
    }

    fetch_data = async () => {

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

            this.setState({
                Personal,
                Portfolio,
                Links,
                Education,
                Experience,
                Skills,
                loading: false
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

