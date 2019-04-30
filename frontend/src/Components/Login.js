import React, {Component} from 'react';
import Navigation from './MainNavigation';
import {Button, Modal} from 'react-bootstrap';
import {withRouter} from 'react-router';
class Login extends Component {
    emptyItem={
        email: '',
        password: ''
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            item: this.emptyItem,
            show: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose(){
        this.setState({show: false});
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }
  
    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;
        await fetch('http://localhost:3000/messages', {
            method: 'GET',
            headers: {
                'Authorization': 'Basic dXNlcjt1c2Vy',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => {
            response.json();
            console.log(response);
            if(response.status === 200)
            {
                let path = `/profile`;
                this.props.history.push(path);
            }else{
                (this.state.show ? this.setState({show: false}) : this.setState({show: true}));
            }
        });
        
    }  

    render() {
        return(
        <div>
            <Navigation/>
            <div className="loginform" style={{ marginTop: '50px'}}>
                <h2 className="loginformheader">Login</h2>
                <form className="form-grouplogin">
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
                        <Button variant="dark" className="loginButtonForm" onClick={this.handleSubmit}>
                            Login
                        </Button>
                    </div>
                </form>
                <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.show} onHide={this.handleClose} id="modalbody">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Something went wrong!</Modal.Title>
                </Modal.Header>
                <Modal.Body id="modalbody">Invalid username or password</Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={this.handleClose}>
                    Ok
                    </Button>
                </Modal.Footer>
                </Modal>
            </div>
        </div>
        )
    }
}

export default withRouter(Login);