import React, {Component} from 'react';
import Navigation from './MainNavigation';
import Error from './Error';
import {Button} from 'react-bootstrap';

export default class Login extends Component {
    
    constructor(props, context) {
        super(props, context);
        this.state = {
            email: null,
            password: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.state[name] = value;
        console.log(this.state);
        this.setState({[name] : value});
    }
  
    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;
  
        await fetch('http://localhost:3000/login', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(response => {
                response.json()
                if(response !== 200)
                {
                    return(<Error/>);
                }
            });
    }  

    render() {
        return(
        <div>
            <Navigation/>
            <div className="loginform" style={{ marginTop: '50px'}}>
                <h2 className="loginformheader">Login</h2>
                <form method = "post" className="form-grouplogin">
                    <div>
                        <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="form-control"
                        onChange={this.handleChange.bind(this)}
                        />
                    </div>
                    <div className="form-grouplogin">
                        <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        className="form-control"
                        onChange={this.handleChange.bind(this)}
                        />
                    </div>
                    <div className="form-grouplogin">
                        <Button type="submit" value="Sign In" variant="dark" className="loginButtonForm">
                            Login
                        </Button>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}
