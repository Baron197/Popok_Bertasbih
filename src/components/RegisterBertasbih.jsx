import React, { Component } from 'react';

class RegisterBertasbih extends Component {
    render() {
        return (
            <div className="bodyRegister">
                <div className="main">
                    <div className="container">
                        <form method="POST" className="appointment-form" id="appointment-form">
                            <h2>Welcome to the Popok Bertasbih Club</h2>
                            <div className="form-group-1">
                                <input type="text" name="name" id="name" placeholder="Username" required />
                                <input type="email" name="email" id="email" placeholder="Email" required />
                                <input type="number" name="phone_number" id="phone_number" placeholder="Phone number" required />
                                <input type="text" name="password" id="password" placeholder="Password" required />
                            </div>
                            <div className="form-submit">
                                <input type="button" name="submit" id="submit" className="submit" defaultValue="Register" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterBertasbih;