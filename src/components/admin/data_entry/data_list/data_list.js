import React, { Component } from 'react'

import Button from '../button/button'

class DataList extends Component {
    constructor() {
        super()
        this.state = {
            Personal: [],
            Portfolio: [],
            Links: [],
            Education: [],
            Experience: [],
            Skills: [],
            url: 'https://react-porfolio.firebaseio.com',
        }
        this.handleShow = this.handleShow.bind(this)
    }

    async handleShow() {

        const urls = [
            'Personal',
            'Portfolio',
            'Projects',
            'Links',
            'Education',
            'Experience',
            'Skills'
        ]
        try {
            const [
                Personal, Portfolio, Links,
                Education, Experience, Skills] = await Promise.all(urls.map(url =>
                    fetch(`${this.state.url}/${url}.json`).then(res => res.json())
                ))

            this.setState({
                Personal, Portfolio,
                Links, Education,
                Experience, Skills
            })

        } catch (error) {
            this.setState({ error })
        }

    }

    render() {
        return (
            <React.Fragment>
                <Button value="Show" onclick={this.handleShow} />{'  '}
                <Button value="Edit" onclick={this.handleEdit} />
            </React.Fragment>
        )
    }
}

export default DataList;