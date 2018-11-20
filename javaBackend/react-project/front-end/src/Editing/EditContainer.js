import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render(){
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.props.toggle}>
          <h4>Edit User</h4>
          <form onSubmit={this.props.closeAndEdit}>
            <label>
              Edit Username:
              <br/>
              <input type='text' name='username' value={this.props.userToEdit.username} onChange={this.props.handleEditChange}/>
            </label>
            <label>
              Edit Location:
              <br/>
              <input type='text' name='location' value={this.props.userToEdit.location} onChange={this.props.handleEditChange}/>
            </label>
            <button type='submit'>Edit User</button>
          </form>
        </Modal>
      </div>
      )
  }
}

export default EditUser;
