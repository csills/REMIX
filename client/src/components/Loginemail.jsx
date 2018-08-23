import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import UserRemixGallery from './UserRemixGallery';

class Loginregister extends Component {

    constructor(props) {
        super(props);

        // this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);

        this.state = {
            user: [],
            signupFormVisible: false,
            isLoggedIn: '',
        };

        console.log(this.state)
    }

    componentDidMount() {
        axios.get(`/api/user/`)
        .then(( {data} ) => {
            // console.log(data.user)
            if (data.user !== null) {
                console.log(data.user)
                console.log('Logout');
                this.setState({
                    user: data.user,
                    isLoggedIn: 'Logout',
                })
                
            } else {
                console.log(data.user)
                console.log('Login');
                this.setState({
                    isLoggedIn: 'Login',
                }) 
            }
        })
    }

    render() {
        return (
            
        <div className="login-form">
            {this.state.user ? (
                <div className="user" onSubmit={this.showProfile}>
                    <UserRemixGallery/>
                    <button className="submitbuttons" onClick={this.logout}>{this.state.isLoggedIn}</button>
                </div>
            ) : (
                <div className="user-form">
                    <button className="topbuttons" onClick={this.showSignupForm} disabled={this.state.signupFormVisible}>Register</button>
                    <button className="topbuttons" onClick={this.showLoginForm} disabled={!this.state.signupFormVisible}>Login</button>
                    {this.state.signupFormVisible ? (
                        <form id="registerForm" onSubmit={this.register}>
                            {/* <h2>Register</h2> */}
                            <div className="form-field">
                                <label className="registerEmail" htmlFor="registerEmail">Email:</label>
                                <input name="registerEmail" type="text" required />
                            </div>
                            <div className="form-field">
                                <label htmlFor="registerUsername">Username:</label>
                                <input name="registerUsername" type="text" required />
                            </div>
                            <div className="form-field">
                                <label htmlFor="registerPassword">Password:</label>
                                <input name="registerPassword" type="password" required />
                            </div>
                            <button className="submitbuttons" type="submit">Register</button>
                        </form>
                    ) : (
                        <form id="loginForm" onSubmit={this.login}>
                            <div className="form-field">
                                <label htmlFor="username">Username:</label>
                                <input name="username" type="text" required />
                            </div>
                            <div className="form-field">
                                <label htmlFor="password">Password:</label>
                                <input name="password" type="password" required />
                            </div>
                            <button className="submitbuttons" type="submit">Login</button>
                        </form>
                    )}
                </div>
            )
            }
        </div>
        );
    }

    showLoginForm = (event) => {
        this.setState({
            signupFormVisible: false,
        })
    }

    showSignupForm = (event) => {
        this.setState({
            signupFormVisible: true,
        })
    }

    register = (event) => {
        event.preventDefault();
        axios({
            method: 'post',
            url: '/auth/signup',
            data: {
                email: event.target.registerEmail.value,
                username: event.target.registerUsername.value,
                password: event.target.registerPassword.value,
            }
        })
            .then((res) => {
                this.showLoginForm();
                console.log(res);
            })
            .catch((res) => {
                console.log(res);
                swal("Registration Failed", "...please try again!");
            });
    }

    login = (event) => {
        event.preventDefault();
        axios({
            method: 'post',
            url: '/auth/login',
            data: {
                username: event.target.username.value,
                password: event.target.password.value,
            }
        })
        .then((res) => {
            this.setState({
                user: res.data.user,
                showSignupForm: false,
                isLoggedIn: 'Logout',
            })
            // console.log(res);
        })
        .catch((res) => {
            console.log(res);
            swal("Incorrect Login", "...please try again!");
        });
    }

    logout = () => {
        axios({
            method: 'get',
            url: '/auth/logout'
        })
        .then(() => {
            this.setState({
                user: null,
            })
        })
        .catch((res) => {
            console.log(res);
        });
    }
}

export default Loginregister;
