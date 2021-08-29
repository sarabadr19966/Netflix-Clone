import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import ProfileScreen from './Screens/ProfileScreen/ProfileScreen';
import SignInUpScreen from './Screens/SignInUpScreens/SignInUpScreen';
import { auth } from './Apis/firebase';
import {connect} from 'react-redux';
import * as actionCreators from './store/action';

const Netflix = (props) => {
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            if(userAuth) {
                //logged in
                props.logIn({
                    uID : userAuth.uid,
                    email: userAuth.email
                });
            } else {
                //logged out
                props.logOut();
            }
        });
        return unsubscribe;
    },[]);

    return  <>
        {!props.user ? <SignInUpScreen/> :
            <Router>
            <Switch>
                <Route exact path="/profile" component={ProfileScreen} />
                <Route exact path="/" component={HomeScreen} />
            </Switch>
            </Router>
        }
        
    </>
};

const mapStateToProps = state => {
    return {
        user: state.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        logIn: user => dispatch(actionCreators.login(user)),
        logOut: () => dispatch(actionCreators.logout())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Netflix);