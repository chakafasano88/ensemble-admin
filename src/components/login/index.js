import React, { Component } from "react";
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Card, CardFooter } from 'reactstrap';
import "./style.css"
import { NavLink } from "react-router-dom";

class LoginForm extends Component {
    render() {
        return (
            <div className="login-form" >
            <Card>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Input without validation</Label>
                        <Input />
                        <FormFeedback>You will not be able to see this</FormFeedback>
                        <FormText></FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Valid input</Label>
                        <Input valid />
                        <FormFeedback valid>Sweet! that name is available</FormFeedback>
                        <FormText></FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Invalid input</Label>
                        <Input invalid />
                        <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                        <FormText></FormText>
                    </FormGroup>
                </Form>
                <CardFooter style={{ justifyContent: "flex-start", flexDirection: "column" }} >
                    <div><span> New User?</span><NavLink to="/register" > Sign Up</NavLink></div>
                    <div> Forgot Password?<NavLink to="/register" > Click Here</NavLink></div>
                </CardFooter>
            </Card>
          </div>
        );
    }
}

export default LoginForm