import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { onUserLogin } from '../actions';

class LoginBertasbih extends Component {

    onBtnLoginClick = () => {
        var username = this.refs.username.refs.tbUsername.value;
        this.props.onUserLogin(username)
    }

    render() {
        return (
            <div>
                <Form style={{ margin: "0 auto", paddingTop: "50px"}} className="col-3">
                    <FormGroup>
                        <Label for="exampleUsername">Username</Label>
                        <Input type="text" name="username" ref="username" innerRef="tbUsername" id="exampleUsername" placeholder="Username" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="Your Password" />
                    </FormGroup>
                    <Button color="success"
                        onClick={this.onBtnLoginClick}>
                        Login
                    </Button>
                </Form>
            </div>
        );
    }
}

export default connect(null, { onUserLogin })(LoginBertasbih);
