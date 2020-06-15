import React from 'react'
import { Link } from 'react-router-dom'
import { signInWithGoogle } from '../../../firebase/firebase'
import './login.scss'

class Login extends React.Component {
    render() {
        const { errorMessage } = this.props
        let error = null
        if (errorMessage) {
            error = <span style={{ color: 'red' }}>{errorMessage}</span>
        }
        return (
            <div className="login-dark">
                <form onSubmit={this.props.handleSubmit}>
                    <h2 className="sr-only">Login Form</h2>
                    <div className="form-group">
                        <input className="form-control"
                            type="email" name="email"
                            placeholder="Email" required
                            onChange={this.props.handleChange} />
                    </div>
                    <div className="form-group">
                        <input className="form-control"
                            type="password" name="password"
                            placeholder="Password" required
                            onChange={this.props.handleChange} />
                        {error}
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary btn-block"
                            type="submit">Sign In</button>

                        {/* google signin button is added for optional but hidded*/}
                        <button className="btn btn-primary btn-block" style={{ display: 'none' }}
                            onClick={signInWithGoogle}>Sign In with Google</button>
                    </div>
                    <Link className="forgot" to="/admin">Forgot your email or password?</Link>
                </form>
            </div>
        )
    }
}

export default Login