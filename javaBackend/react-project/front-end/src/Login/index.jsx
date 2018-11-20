import React, {Component} from "react";
import { Form, Label, Button } from "semantic-ui-react";
import { Redirect } from 'react-router-dom';

class Login extends Component {
    render(){
        return(
            <div>
                {this.props.loggedIn ? <Redirect to="/weather"/>: <div/> }
                <div className="spacer"/>
                <h1>Login or Register</h1>
                <h2>Login</h2>
                <Form onSubmit={this.props.submitLogin}>
                    <Label>
                        username: 
                        <Form.Input type="text" name="username" onChange={this.props.handleInputs} />
                    </Label>
                    <Label>
                        password: <Form.Input type="password" name="password" onChange={this.props.handleInputs} />
                    </Label>
                    <br/>
                    <br/>
                    <Button color="blue" type="submit">Submit</Button>
                </Form>
                <div className="spacer"/>
                <div className="spacer"/>
                <h2>Register</h2>
                <Form onSubmit={this.props.submitRegistration}>
                    <Label>
                        username: 
                        <Form.Input type="text" name="username" onChange={this.props.handleInputs} />
                    </Label>
                    <Label>
                        password: <Form.Input type="password" name="password" onChange={this.props.handleInputs} />
                    </Label>
                    <Label>
                        zip code: <Form.Input type="number" name="location" onChange={this.props.handleInputs}/>
                    </Label>
                    <br/>
                    <br/>
                    <Button color="green">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default Login;