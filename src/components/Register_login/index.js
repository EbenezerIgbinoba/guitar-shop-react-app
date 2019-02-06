import React from 'react';
import Button from '../utils/Button';

const RegisterLogin = (props) => {
    return (
        <div className="page_wrapper">
            <div className="container">
                <div className="register_login_container">
                    <div className="left">
                        <h1>New Customers</h1>
                        <p>If you are a new customer create an account here.</p>
                        <Button
                            type="default"
                            title="Create an account"
                            linkTo="/register"
                        />
                    </div>
                    <div className="right">
                        Login
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterLogin;