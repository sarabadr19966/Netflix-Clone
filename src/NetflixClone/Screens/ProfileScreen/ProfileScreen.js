import React from 'react';
import './ProfileScreen.css';
import Nav from '../HomeScreen/HomeContent/Nav';
import avatar from '../../../images/Avatar.png';
import {connect} from 'react-redux';
import { auth } from '../../Apis/firebase';

const ProfileScreen = (props) => {
    return  <div className='profileScreen'>
        <Nav/>
        <div className='profileScreen__body'>
            <h1>Edit Profile</h1>
            <div className='profileScreen__info'>
                <img src={avatar} alt='Avatar'/>
                <div className='profileScreen__details'>
                    <h2>
                        {props.user.email}
                    </h2>
                    <div className='profileScreen__plan'>
                        <h3>My Plan</h3>
                        <div className='profileScreen__planDetails'>
                            <h5>premium</h5>
                            <h5>200 EGP/month</h5>
                        </div>
                    </div>
                    <button onClick={()=>auth.signOut()}>Sign Out</button>
                </div>
            </div>
        </div>
    </div>
};

const mapStateToProps = state => {
    return {
        user : state.user,
    };
};

export default connect(mapStateToProps)(ProfileScreen);