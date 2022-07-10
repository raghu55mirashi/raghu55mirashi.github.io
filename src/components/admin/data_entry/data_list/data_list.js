import React, { Component } from 'react'

import Button from '../button/button'
import ShowModel from './show_model'

class DataList extends Component {
    constructor() {
        super()
        this.state = {
            Personal: {},
            Portfolio: {},
            Education: {},
            Experience: {},
            Skills: {},
            Links: {},
            url: 'https://react-porfolio.firebaseio.com',
            itemKey: '',
            onOpenModal: false
        }
    }
    // componentDidMount() {
    //     this.fetch_data()
    // }
    componentDidUpdate() {
        this.fetch_data()
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

            this.setState({
                Personal,
                Portfolio,
                Links,
                Education,
                Experience,
                Skills
            })
        } catch (error) {
            this.setState({ error })
        }

    }
    handleShow = (itemKey) => {
        this.setState({ itemKey, onOpenModal: true })
    }
    onCloseModal = () => {
        this.setState({
            onOpenModal: false,
            itemKey: ''
        })
    }
    render() {
        const { onOpenModal, itemKey } = this.state
        return (
            <React.Fragment>

                <Button value="Show" onclick={() => this.handleShow(this.props.itemKey)} />{'  '}

                {onOpenModal
                    ? <ShowModel
                        onOpenModal={onOpenModal}
                        onCloseModal={this.onCloseModal}
                        handleEdit={this.props.handleEdit}
                        itemKey={itemKey} data={this.state} />
                    : null}

            </React.Fragment>
        )
    }
}

export default DataList;