import React, {Component} from 'react';
import Navigation from './MainNavigation';

export default class Login extends Component {
    render() {
        return(
        <div>
            <Navigation/>
            <div className="loginform" style={{ marginTop: '50px'}}>
                <h2 className="loginformheader">Login</h2>
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
        </div>
        )
    }
}
