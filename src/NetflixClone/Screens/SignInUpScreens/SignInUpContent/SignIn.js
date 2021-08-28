import React from 'react';
import './SignIn.css'
const SignIn = ({logInClicked}) => {
    return(
        <div className='signIn'>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <form>
                <input type='email' placeholder='Email Address'/>
                <button onClick={logInClicked}>GetStarted</button>
            </form>
        </div>  
    )
}

export default SignIn;
