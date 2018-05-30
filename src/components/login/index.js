import React from "react";
import { Form, FormGroup, Label, FormFeedback, FormText, Card, CardBody, Button } from 'reactstrap';
import "./style.css"
import { NavLink } from "react-router-dom";
import ValueLink, { LinkedComponent } from "valuelink";
import { Input } from "valuelink/lib/tags";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { login } from "../../actions/auth"

class LoginForm extends LinkedComponent {
    state = {
        user: {
            email: "",
            password: ""
          }
    }

    _onSubmit = () => {
        const { login } = this.props;
        const { user } = this.state;
        login(user)
    }

    render() {
        const { user } = this.props;
        console.log("username", user)
        const userLink = ValueLink.state(this, "user");
        const emailLink = userLink
          .at("email")
          .check(x => x, "Email is required")
        //   .check(x => x.match(REGEX_EMAIL), "A valid email is required");
        const passwordLink = userLink.at("password").check(x => x.length > 0);
        return (
            <div className="login-form" >
                <Card className="login-card" >
                    <Form 
                        onSubmit={e => {
                            e.preventDefault();
                                this._onSubmit(e);
                            }}
                    >
                        <FormGroup>
                            <Label for="exampleEmail">User Name</Label>
                            <Input 
                                type="text"
                                valueLink={emailLink}
                                className="form-control"
                                placeholder="Username"
                                required="required"
                                // name="shipping_name"
                                // valid 
                            />
                            <FormFeedback valid></FormFeedback>
                            <FormText></FormText>
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input 
                                type="password"
                                valueLink={passwordLink}
                                className="form-control"
                                placeholder="Password"
                                required="required"
                                // name="shipping_name"
                            />
                            <FormFeedback></FormFeedback>
                            <FormText></FormText>
                        </FormGroup>
                        <FormGroup>
                            <Button block >Login</Button>
                        </FormGroup>
                    </Form>
                </Card>
                <Card style={{ marginTop: 5 }} >   
                    <CardBody className="footer">
                        <div><span> New User?</span><NavLink to="/register" > Sign Up</NavLink></div>
                        <div> Forgot Password?<NavLink to="/register" > Click Here</NavLink></div>
                    </CardBody>
                </Card>
          </div>
        );
    }
}


const mapStateToProps = state =>{
    return {
      ...state.auth
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        login,
      },
      dispatch
    );
  };
  
   export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
  
  
   