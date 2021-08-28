import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom'
import logo from '../../../../images/Netflix_logo.png';
import avatar from '../../../../images/Avatar.png';
import './Nav.css';
const Nav = () =>{
    const [showBackground ,setShowBackground] = useState(false);
    const scrolling = () => {
        if(window.scrollY > 100){
            setShowBackground(true);
        } else {
            setShowBackground(false);
        }
    }
    const history = useHistory();
    useEffect(() => {
        window.addEventListener('scroll', scrolling);
        return ()=> {
            window.removeEventListener('scroll', scrolling);
        }
    },[])
    return <div className={`nav ${showBackground ? 'nav__black' : ''}`}>
        <img onClick={() => history.push('/')} className='nav__logo' src={logo} alt='Netflix-Logo'/>
        <img onClick={() => history.push('/profile')} className='nav__avatar' src={avatar} alt='Netflix-Avatar'/>
    </div>
}

export default Nav;