import axios from 'axios';
import Cookie from 'js-cookie';
import { registrationSer, logoutSer, loginSer } from '../../pages/services/AuthService';
import * as types from '../actions/types';
import { API_URL } from '../../pages/http/index';
import {useRouter} from 'next/router';




export const toggleModalAC = () => {
  return {
    type: types.TOGGLE_MODAL
  };
};

export const setAuth = (bool) => {
    debugger
    return{
        type: types.SET_AUTH,
        bool
    }
}

export const setLoading = (loading) => {
    debugger
    return{
        type: types.SET_LOADING,
        loading
    }
}

export const setUser = (user) => {
    debugger
    return {
      type: types.SET_USER,
      user
    };
  };

export const registration = (email, password) => {
    debugger
    return async (dispatch) => {
        try {
            debugger
            dispatch(setLoading(true))
            const response = await registrationSer(email, password);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            debugger
            dispatch(setUser(response.data.user));
            debugger
            dispatch(setAuth(true));
            debugger
            dispatch(setLoading(false))
            
        } catch (e) {
            console.log(e.respose?.data?.message);
        }
    };
};


export const login = (email, password) => {
    return async (dispatch) => {
        try {
            debugger
            const response = await loginSer(email, password);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            debugger
            dispatch(setUser(response.data.user));
            dispatch(setAuth(true));

        } catch (e) {
            console.log(e.respose?.data?.message);
        }
    };
};


export const logout = () => {
    return async (dispatch) => {
        try {
            const response = await logoutSer();
            localStorage.removeItem('token');
            dispatch(setAuth(false));
            dispatch(setUser(null));
        } catch (e) {
            console.log(e.respose?.data?.message);
        }
    };
};

export const checkAuth = () => {
    return async (dispatch) => {
        dispatch(setLoading(true))
        try {
            debugger
            const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true});
            console.log(response)
            debugger
            localStorage.setItem('token', response.data.accessToken);
            
            debugger
            dispatch(setUser(response.data.user));
            dispatch(setAuth(true));
        } catch (e) {
            console.log(e.respose?.data?.message);
        }finally{
            dispatch(setLoading(false))
        }
    };
};