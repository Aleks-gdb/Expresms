import React, {Component} from 'react';
import Navigation from './MainNavigation';

export default class Register extends Component {
    render() {
        return(
        <div>
            <Navigation/>
            <div className="registerform" style={{ marginTop: '50px'}}>
                <h2 className="registerformheader">Register</h2>
                <form>
                    <div className="form-groupregister">
                        <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        />
                    </div>
                    <div className="form-groupregister">
                        <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        />
                    </div>
                    <div className="form-groupregister">
                        <input
                        type="password"
                        placeholder="Confirm password"
                        name="password"
                        />
                    </div>
                    <div className="form-groupregister">
                        <button type="submit" className="registerbuttonform">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}