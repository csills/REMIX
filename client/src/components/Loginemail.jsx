import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import UserRemixGallery from '../UserRemixGallery';
// import UserButtons from '../UserButtons';

class Loginregister extends Component {

    constructor(props) {
        super(props);

        // this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);

        this.state = {
            user: [],
            signupFormVisible: false,
            isLoggedIn: '',
            // welcomeMessage: '',
            // userInfo: []
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
                    // welcomeMessage: 'Hello',
                    // userInfo: data.user
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
                     {/* <h1 className="hello">{this.state.welcomeMessage}{this.state.userInfo.username}</h1>
                     <h1 className="hello">HELLO {this.state.user}</h1> */}
                    {/* <h1 className="hello"></h1> */}
                    <UserRemixGallery/>
                    {/* <UserButtons/> */}

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
                            {/* <h2>Login</h2> */}
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

// V_01
// componentdidmount()

    ifDisplay = (res) => {
        axios.get(`/api/user/`)
        .then(( {data} ) => {
            console.log(data.user)
            if (data.user !== null) {
                console.log('Logout');
                // return (<h2>'Logout'</h2>)
                // this.setState({
                //     isLoggedIn: 'Logout',
                // })
                
            } else {
                console.log('Login');
                // return  (<h2>'Login'</h2>)
                // this.setState({
                //     isLoggedIn: 'Login',
                // }) 
            }
        })
    }

// ===========================================================
// V_02

    // logoutButton = (event) => {
    //     this.setState({
    //         isLoggedIn: true
    //     })
    // }

    // loginButton = (event) => {
    //     this.setState({
    //         isLoggedIn: false
    //     })
    // }

    // ifLoggedin = (event) => {
    //     event.preventDefault();
    //     axios({
    //         method: 'get',
    //         url: '/api/user',
    //         data: {
    //             user: this.user.username
    //         }
    //     })
    //     .then(({data}) => {
    //         this.logoutButton();
    //     })
    //     .catch((res) => {
    //         console.log(res)
    //     })
    // }

// ===========================================================
// V_03

    // ifDisplay = (res) => {
    //     axios.get(`/api/user/`)
    //     .then(( {data} ) => {
    //         console.log(data.user)
            
    //     })
    // }

// ===========================================================     
// V_04


    // ifDisplay = (res) => {
    //     const loggedUserId = this.state.user.id;
    //     console.log(loggedUserId);
    //     // once user logs in, log out button remain until the user clicks log out
    //     if (isNaN(loggedUserId)) {
    //         return (
    //             'Login'
    //         );
    //     }
    //     return (
    //         'Logout'
    //     );
    // }

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
                // Is there where alert box would go for failed registration?
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
            // Is there where alert box would go for failed login?
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
