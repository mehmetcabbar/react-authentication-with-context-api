import React, { useContext, useState } from 'react';
import './register.css';
import Context from '../../../context/store/store';
import welcomeImage from '../../../assets/images/welcomeImage.svg';
import logoIcon from '../../../assets/images/logoIcon.svg';
import { Link, useHistory } from 'react-router-dom';



export default function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const { state, dispatch } = useContext(Context)
    const history = useHistory()

    const createNewUser = (event) => {
        if (email.length === 0) {
            setErrorMessage('Enter your email address');
        }
        else if
            (email.length < 5) {
            setErrorMessage('Please enter a properly email address. ');

        }
        else if
            (email.length > 5 && password === 0) {
            setErrorMessage('Please write a password. ');

        }
        else if
            (email === state.email) {
            setErrorMessage('This email address is taken!');
        }
        else if
            (password.length === 0) {
            setErrorMessage('Please write your password')
        }
        else {
            dispatch({ type: "SET_EMAIL", payload: email })
            dispatch({ type: "SET_PASSWORD", payload: password })
            dispatch({ type: "LOGIN", payload: true })
            history.push('/')
        }
    }

    return (
        <div className='containerRegister'>
            <div className='bottomSignUpRegister'>
                Dou you have an account? &nbsp; <Link to='/welcome' className='signupLinkRegister'> Login</Link>
            </div>
            <div className='wrapperRightRegister'>
                <div className='imageBox'>
                    <img src={welcomeImage} className={welcomeImage} alt={'welcome'} />
                </div>
            </div>
            <div className='wrapperLeftRegister'>
                <div className='contentBox'>
                    <img src={logoIcon} className={logoIcon} alt={'logo icon'} />
                    <h1 className='title'>AuthSteps</h1>
                    <div className='titleContent'>
                        Create a new account in a minute.
                    </div>
                    <form>
                        <div className='inputBox'>
                            <div className='inputIcon'>
                                <ion-icon name="mail"></ion-icon>
                            </div>
                            <input
                                className='inputDesign'
                                type='text'
                                placeholder='Email address'
                                value={email}
                                onChange={(event) => setEmail(event.target.value)
                                }
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
                                value={password}
                                onChange={(event) => setPassword(event.target.value)
                                }
                            />
                        </div>
                        {errorMessage ? (
                            <div className="errorMessageWelcome"> {errorMessage} </div>
                        ) : null}
                        <div className='buttonBoxRegister'>
                            <button onClick={createNewUser} type='button' className='myButtonRegister'>Create my account</button>
                        </div>
                    </form>
                    <div className='forgotPassword'>
                        You agree our <Link className='termOfUseLink' href='/register'>Terms of Use</Link> <br></br> by sign up.

                    </div>
                </div>

            </div>
        </div >
    )
};
