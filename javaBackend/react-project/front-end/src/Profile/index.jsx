import React, {Component} from "react";
// import { Form, Label, Button } from "semantic-ui-react";
import { Label, Button, Input, Modal, Form, ModalFooter, ModalBody, ModalHeader, FormGroup } from "reactstrap";
import {Redirect} from "react-router-dom";

export default class Profile extends Component{
    render(){
        return(
            <div className="big-container">
                {this.props.isOpen ? <div/> : <Redirect to="/weather"/>}
                <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
                    <ModalHeader toggle={this.toggle}>Edit Your Profile</ModalHeader>
                        <Form onSubmit={this.props.submitEdits}>
                    <ModalBody>
                            <FormGroup>
                                <Label>username:</Label>
                                <Input onChange={this.props.handleInputs} name="username" value={this.props.username}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>
                                    password:
                                </Label>
                                <Input onChange={this.props.handleInputs} name="password" value={this.props.password}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>
                                    location:
                                </Label>
                                <Input onChange={this.props.handleInputs} name="location" value={this.props.location}/>
                            </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                            <FormGroup>
                                <Button color="primary" type="submit" onClick={this.props.toggle}>Submit Changes</Button>{' '}
                                <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
                            </FormGroup>
                    </ModalFooter>
                        </Form> 
                </Modal>
            </div>
        )
    }
}