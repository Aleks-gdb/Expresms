import React, {Component} from 'react';

export default class Login extends Component {
    render() {
        return(
        <div className="loginform" style={{ marginTop: '50px'}}>
            <h2 style={{marginBottom: '40px'}} className="loginformheader">Login</h2>
            <form>
                <div className="form-grouplogin">
                    <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    />
                </div>
                <div className="form-grouplogin">
                    <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    />
                </div>
                <div className="form-grouplogin">
                    <button type="submit" className="loginbuttonform">
                        Login
                    </button>
                </div>
            </form>
        </div>
        )
    }
}
