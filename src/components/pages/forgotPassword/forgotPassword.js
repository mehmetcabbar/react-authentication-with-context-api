import React, { useContext, useState } from 'react';
import './forgotPassword.css'
import Context from '../../../context/store/store';
import welcomeImage from '../../../assets/images/welcomeImage.svg';
import logoIcon from '../../../assets/images/logoIcon.svg';
import { Link } from 'react-router-dom';
import { emailAction } from '../../../actions';




export default function ForgotPassword() {
    const [email, setEmail] = useState('')
    const [showPassword, setShowPassword] = useState('')
    const { state, dispatch } = useContext(Context)

    const checkPassword = async () => {
        var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (email.length === 0) {
            setShowPassword('Please, enter your email address')
        }
        else if
            (!email.match(pattern)) {
            setShowPassword('Please enter a vaild email address. ');

        }
        else if
            (email.length < 5) {
            setShowPassword('Please enter a properly email address. ');
        }
        else if (email !== state.email) {
            setShowPassword('No registered user found for this e-mail address')
        }
        else {
            await dispatch(emailAction())
            alert('Your password: ' + state.password)
        }
    }

    return (
        <div className='containerForgotPassword'>
            <div className='bottomSignUp'>
                For home page &nbsp; <Link href='/forgotPassword' className='signupLink'> Contact Us</Link>
            </div>
            <div className='wrapperRight'>
                <div className='imageBox'>
                    <img src={welcomeImage} className={welcomeImage} alt={'welcome'} />
                </div>
            </div>
            <div className='wrapperLeft'>
                <div className='contentBox'>
                    <img src={logoIcon} className={logoIcon} alt={'logo icon'} />
                    <h1 className='title'>AuthSteps</h1>
                    <div className='titleContent'>
                        Don't worry! We can help you. <br /> Please enter your email address!
                    </div>
                    {showPassword ? (
                        <div className="errorMessageWelcome"> {showPassword} </div>
                    ) : null}
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
                        <div className='buttonBox'>
                            <button onClick={checkPassword} type='button' className='myButton'>Show my password</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
};
