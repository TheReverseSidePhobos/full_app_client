import * as types from '../actions/types';


export const initialState = {
    user: null,
    isAuth: false,
    loading: false
}

const auth_reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_AUTH:
            debugger
            return {
                ...state,
                isAuth: action.bool
            };
        case types.SET_USER:
            debugger
            return{
                ...state,
                user: action.user
            }
        case types.SET_LOADING:
            debugger
            return{
                ...state,
                loading: action.loading
            }
    
            default:
                return state;
    }
}


export default auth_reducer;