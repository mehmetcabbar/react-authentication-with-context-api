import React, { useContext, useState } from 'react';
import Context from '../../context/store/store';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Welcome from '../pages/welcome/welcome';
import Register from '../pages/register/register';
import ForgotPassword from '../pages/forgotPassword/forgotPassword';
import Home from '../pages/home/home';

const Navigation = () => {
    const { state } = useContext(Context)
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path='/'>
                        {state.isLoggedIn ? (<Home />) :
                            (<Redirect
                                to={{
                                    pathname: "/welcome",
                                }}
                            />)}
                    </Route>

                    <Route path='/welcome'>
                        <Welcome />
                    </Route>

                    <Route path='/register'>
                        <Register />
                    </Route>
                    <Route path='/forgotpassword'>
                        <ForgotPassword />
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}

export default Navigation;
