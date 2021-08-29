import React,{useState, useRef} from'react';
import { auth } from '../../../Apis/firebase'; 
import './SignUp.css';

const SignUp = () => {

    const [signUpClicked ,setSignUpClicked] = useState(false);

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const signUpLink = (e) => {
        e.preventDefault();
        setSignUpClicked(true);
    };

    const signInButton = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
        .catch((error) => {
            alert(error);
        }); 
    };

    const Register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
        .catch((error) => {
            alert(error);
        });
    };

    return <div className='signUp'>
        <h1 className='signUp__title'>Sign {signUpClicked? 'Up' : 'In'}</h1>
        <form>
            <input ref={emailRef} type='email' placeholder='Email or phone number' />
            <input ref={passwordRef} type='password' placeholder='Password' />
            <button type='submit' onClick={signInButton} style={{display:signUpClicked?'none' : 'inline'}}>Sign In</button>
            <button type='submit' onClick={Register} style={{display:signUpClicked?'inline' : 'none'}}>Register</button>
        </form>
        {signUpClicked? '' : <h5><span className='signUp__new'>New to Netflix?</span> <span className='signUp__link' onClick={signUpLink}>Sign up now</span></h5>}
    </div> 
};

export default SignUp;