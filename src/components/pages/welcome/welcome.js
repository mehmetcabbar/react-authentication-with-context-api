import React, { useState, useContext } from 'react';
import './welcome.css'
import Context from '../../../context/store/store';
import welcomeImage from '../../../assets/images/welcomeImage.svg';
import logoIcon from '../../../assets/images/logoIcon.svg';
import { Link, useHistory } from 'react-router-dom';
import { loginAction } from '../../../actions';




export default function Welcome() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const { state, dispatch } = useContext(Context)
    const history = useHistory()


    const userLogin = async (event) => {
        var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (email.length === 0) {
            setErrorMessage('Please enter your email address');
        }
        else if
            (!email.match(pattern)) {
            setErrorMessage('Please enter a vaild email address. ');

        } else if
            (email !== state.email) {
            setErrorMessage('Sorry! No registered user found for this e-mail address');
        }
        else if
            (password.length === 0) {
            setErrorMessage('Please write your password')
        }
        else if
            (password.length < 6) {
            setErrorMessage('Password should be more than 6 characters.')
        }
        else if
            (email === state.email && password !== state.password) {
            setErrorMessage('Your password is wrong. Please check!')
        }
        else {
            await dispatch(loginAction())
            history.push('/')
        }
    }

    return (
        <div className='containerWelcome'>
            <div className='bottomSignUpWelcome'>
                Are you new here? &nbsp; <Link to='/register' className='signupLink'> Sign up</Link>
            </div>
            <div className='wrapperRightWelcome'>
                <div className='imageBox'>
                    <img src={welcomeImage} className={welcomeImage} alt={'welcome'} />
                </div>
            </div>
            <div className='wrapperLeftWelcome'>
                <div className='contentBox'>
                    <img src={logoIcon} className={logoIcon} alt={'logo icon'} />
                    <h1 className='title'>AuthSteps</h1>
                    <div className='titleContent'>
                        Please login with Context API or create an account. <br /> Email: {state.email}  <br /> Password: {state.password}
                    </div>

                    <div className='inputBox'>
                        <div className='inputIcon'>
                            <ion-icon name="mail"></ion-icon>
                        </div>
                        <input
                            className='inputDesign'
                            type='text'
                            placeholder='Email address'
                            name='email'
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className='passwordBox'>
                        <div className='inputIcon'>
                            <ion-icon name="lock-closed"></ion-icon>
                        </div>
                        <input
                            className='inputDesign'
                            type='password'
                            placeholder='Password'
                            name='password'
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    {errorMessage ? (
                        <div className="errorMessageWelcome"> {errorMessage} </div>
                    ) : null}
                    <div className='buttonBox'>
                        <button onClick={userLogin} type='submit' className='myButton'>Login to my account</button>
                    </div>
                    <div className='forgotPassword'>
                        <Link className='forgotLink' to='/forgotpassword'>Forgot Password</Link>
                    </div>
                </div>

            </div>
        </div>
    )
};
