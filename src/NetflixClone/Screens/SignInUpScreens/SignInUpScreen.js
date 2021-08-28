import React,{useState} from 'react';
import logo from '../../../images/Netflix_logo.png';
import './SignInUpScreen.css';
import SignIn from './SignInUpContent/SignIn';
import SignUp from './SignInUpContent/SignUp';
const SignInUpScreen = () => {
    const [logedIn, setLogedIn] = useState(false);
    const logInClicked = () =>{
        setLogedIn(true);
    }
    return(
        <div className='signInUpScreen' >
            <div className='signInUpScreen__background'>
                <div className='signInUpScreen__nav '>
                    <img className='signInUpScreen__logo' src={logo} alt='Netflix-Logo'/>
                    <button className='signInUpScreen__button' style={{display: logedIn? 'none' : 'block' }} onClick={logInClicked}>SignIn</button>
                </div>
                <div className='signInUpScreen__content'>
                    {logedIn ? <SignUp/>
                    : <SignIn logInClicked={logInClicked}/>
                    }
                </div>
            </div>
        </div>
            
        
    )
}

export default SignInUpScreen;