import React, { Component } from 'react'
import { HashRouter as Router, Link, Redirect } from "react-router-dom";
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import BackgrounImg from './Background.png'
import Logo from './logo.png'
import axios from 'axios'
class login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            usernameError: '',
            passwordError: '',
            notifyActionSuccess: '',
            redirect:false
        }
    }
    validate = () => {
        let usernameError = "";
        let passwordError = "";

        if (!this.state.username) {
            usernameError = "Please enter Username";
        }
        if (!this.state.password) {
            passwordError = "Please enter Password";
        }
        if (usernameError || passwordError) {
            this.setState({ usernameError, passwordError })
            return false;
        }
        return true;
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit = e => {
        e.preventDefault();
        const isValid = this.validate();
        const { username, password } = this.state;

        if (isValid) {
            axios.post('http://52.76.240.170/login', { username, password })
                .then(response => {
                    console.log(response.data);
                    if(typeof response.data === "object"){  
                        if(response.data.access_token){
                            this.setState({redirect:true})
                        }

                    }
                    else{
                        console.log("error login");
                        this.setState({ notifyActionSuccess: response.data });
                    }
                })
                .catch(function (error) {
                    console.log(error.data);
                })
        }
    }
    notifyActionStatus = () => {
        if (this.state.notifyActionSuccess) {
            return (
                <Alert variant="danger"><Alert.Heading>{this.state.notifyActionSuccess}</Alert.Heading>
                </Alert>
            )
        }
    }
    render() {
        if(this.state.redirect){
            return<Redirect to ="/home"></Redirect>
        }
        
        return (
            <div>
                <Container className="ontainerClass">
                    <Row>
                        <Col sm={8}><Image className="backgroundImage" src={BackgrounImg} /></Col>
                        <Col sm={4}><div className="LoginFormArea">
                            <Row className="justify-content-md-center ">
                                <Form onSubmit={this.handleSubmit} className="LoginForm">
                                    {this.notifyActionStatus()}
                                    <h4>Welcome to <Image src={Logo} /></h4>
                                    <p className="text-muted"> We make easy for everyone to manage <br></br>logistics operations.</p>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label className="text-muted">Username</Form.Label>
                                        <Form.Control
                                            className="text-muted"
                                            name="username"
                                            onChange={this.handleChange}
                                            placeholder="Enter username" />
                                        <Form.Text className="text-error">{this.state.usernameError} </Form.Text>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label className="text-muted">Password</Form.Label>
                                        <Form.Control
                                            className="text-muted"
                                            name="password"
                                            onChange={this.handleChange}
                                            placeholder="Enter password" />
                                        <Form.Text className="text-error" >{this.state.passwordError} </Form.Text>
                                        <Row>
                                            <Col><Form.Check type="checkbox" className="text-muted" label="Remember me" /></Col>
                                            <Col><Form.Text className="text-muted"><Link to="/">Forget password?</Link></Form.Text></Col>
                                        </Row>
                                    </Form.Group>
                                    <Button className="loginButton" variant="primary" type="submit">
                                        Login
                                        </Button>
                                </Form>
                            </Row>
                        </div></Col>
                    </Row>
                    <Router>
                        <Link to="/home">login</Link>
                    </Router>
                </Container>

            </div>
        )
    }
}

export default login
