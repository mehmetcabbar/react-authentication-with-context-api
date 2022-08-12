import React, { useContext } from 'react';
import './home.css';
import Context from '../../../context/store/store';
import Avatar from '../../../assets/images/avatar.svg';
import { useHistory, Link } from 'react-router-dom';
import { logoutAction } from '../../../actions';




const Home = () => {
    const { state, dispatch } = useContext(Context)
    const history = useHistory('')

    const logOut = (e) => {
        dispatch(logoutAction())
        history.push('/')
    }

    return (
        <div className='container'>
            <div className='avatarBox'>
                <img className={Avatar} src={Avatar} alt={'just avatar'} />
            </div>
            <div className='titleBox'>
                <h1 className='title'>It's done!</h1>
                <div className='titleContent'>I am very happy that you have <br></br>
                    completed all the steps.</div>
            </div>
            <div className='firstBubbleBox'>
                <h3 className='emailTitle'> Your Email </h3>
                <p className='emailContent'>{state.email}</p>
            </div>
            <div className='secondBubbleBox'>
                <h3 className='emailTitle'> My Email </h3>
                <p className='emailContent'>{state.myEmail}</p>
            </div>
            <div className='lastBox'>
                <Link onClick={logOut} className='talkLink'>Logout</Link>
            </div>
        </div>
    )
}

export default Home;