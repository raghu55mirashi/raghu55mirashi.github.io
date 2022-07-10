import React, { Component } from 'react'
import Login from './login/login'
import DataEntry from './data_entry/data_entry'
import { auth } from '../../firebase/firebase';
import {signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'

class Admin extends Component {
    constructor() {
        super()
        this.state = {
            currentUser: null,
            email: '',
            password: '',
            errorMessage: ''
        }
    }
    handleFields = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit = async event => {
        event.preventDefault()

        const { email, password } = this.state
        if (email && password) {
            try {
                await signInWithEmailAndPassword(auth, email, password)
                this.setState({
                    email: '',
                    password: '',
                    errorMessage: ''
                })
            } catch (error) {
                this.setState({
                    errorMessage: error.message
                })
            }
        } else {
            this.setState({
                errorMessage: 'Please provide valid email and password'
            })
        }
    }

    unsubscribeFromAuth = null

    componentDidMount() {
        this.unsubscribeFromAuth = onAuthStateChanged(auth, (user) => {
            this.setState({
                currentUser: user
            })
        })
    }
    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }
    render() {
        const { currentUser, errorMessage } = this.state
        return (
            <React.Fragment>
                {currentUser
                    ? (<DataEntry currentUser={currentUser} />)

                    : (<Login currentUser={currentUser}
                        handleChange={this.handleFields}
                        handleSubmit={this.handleSubmit}
                        errorMessage={errorMessage} />)
                }
            </React.Fragment>
        )
    }
}

export default Admin;
