import * as actionTypes from './action';

const initialState = {
    user : null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN :
            return {
                user : action.user
            };
        case actionTypes.LOGOUT :
            return {
                user:null
            };
        default : 
            return state;       
    }
}

export default userReducer;