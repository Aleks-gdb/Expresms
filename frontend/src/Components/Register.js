import React, {Component} from 'react';
import Navigation from './MainNavigation';
import {Button, Modal} from 'react-bootstrap';
import ReactDOM from 'react-dom';

export default class Register extends Component {
    emptyItem={
        email: '',
        password: ''
    };


    constructor(props, context){
        super(props, context);
        this.state={
            item: this.emptyItem,
            confirmPassword: '',
            success: false,
            showE: false,
            showP: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose(){
        this.setState({ showE: false });
        this.setState({ showP: false });
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item, confirmPassword: value});
    }

    async handleSubmit(event){
        event.preventDefault();
        const {item} = this.state;
        if(item.password === this.state.confirmPassword){
        await fetch('http://localhost:3000/register',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
        .then(response => {
            response.json();
            if(response.status === 200)
            {
                this.setState({success: true});
            }
        })
        if(this.state.success)
        {
            this.setState({success: false});
            let path = `../login`;
            this.props.history.push(path);
        }else{
            (this.state.showE ? this.setState({showE: false}) : this.setState({showE: true}));
        }
        }else{
            (this.state.showP ? this.setState({showP: false}) : this.setState({showP: true}));
        }
    }

    render() {
        return(
        <div>
            <Navigation/>
            <div className="registerform" style={{ marginTop: '50px'}}>
                <h2 className="registerformheader">Register</h2>
                <form method = "post" className="form-groupregister">
                    <div>
                        <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="form-control"
                        onChange={this.handleChange.bind(this)}
                        />
                    </div>
                    <div className="form-groupregister">
                        <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        className="form-control"
                        onChange={this.handleChange.bind(this)}
                        />
                    </div>
                    <div className="form-groupregister">
                        <input
                        type="password"
                        placeholder="Confirm password"
                        name="confirmPassword"
                        className="form-control"
                        onChange={this.handleChange.bind(this)}
                        />
                    </div>
                    <div className="form-groupregister">
                        <Button type="submit" variant="dark" onClick={this.handleSubmit}>
                            Register
                        </Button>
                    </div>
                </form>
                <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.showE} onHide={this.handleClose} id="modalbody">
                    <Modal.Header closeButton>
                       <Modal.Title id="contained-modal-title-vcenter">Something went wrong!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body id="modalbody">This email is already registered!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="dark" onClick={this.handleClose}>
                            Ok
                            </Button>
                        </Modal.Footer>
                </Modal>
                <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.showP} onHide={this.handleClose} id="modalbody">
                    <Modal.Header closeButton>
                       <Modal.Title id="contained-modal-title-vcenter">Something went wrong!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body id="modalbody">The passwords don't match!</Modal.Body>
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