import {
    LOGIN_USER,
      LOGIN_SUCCESS,
      LOGIN_FAILED,
  
      LOGOUT_USER,
      LOGOUT_SUCCESS,
      LOGOUT_FAILED,
      
      REGISTER_USER,
      REGISTER_SUCCESS,
      REGISTER_FAILED,
      
      GET_USER_DATA,
      UPDATE_USER_DATA,
      UPDATE_USER_DATA_SUCCESS,
      UPDATE_USER_DATA_FAILED,
      UPDATE_USER_DATA_RESET,
      
      FETCH_USER,
      FETCH_USER_SUCCESS,
      FETCH_USER_FAILED,
      FETCH_USER_RESET,
      
      USER_IS_UNAUTHORIZED,
      SET_TOKEN,
    } from '../../actions/actions_type/actions_type_user';
import * as type from '../../actions/actions_type/actions_type_user';

import { getCookie, removeCookie, setCookie } from '../../components/utils/cookie/cookie';
    
let initialState;
if (typeof localStorage !== "undefined") {
	const authCookie = getCookie("auth");
	if (authCookie) {
		initialState = JSON.parse(decodeURIComponent(authCookie));
	} else {
		initialState = {
			is_auth: false,
			detail_user: {},
			token: null,
		};
	}
} else {
	initialState = {
		is_auth: false,
		detail_user: {},
		token: null,
	};
}
    export const userLoginReducer = (state = {}, action) => {
      switch (action.type) {
        case LOGIN_USER:
          return { loading: true }
        case LOGIN_SUCCESS:
          return { loading: false, userInfo: action.payload }
        case LOGIN_FAILED:
          return { loading: false, error: action.payload }
         
        case LOGOUT_SUCCESS:
          return {}
        default:
          return state
      }
    }
    
    // export const userRegisterReducer = (state = {}, action) => {
    //   switch (action.type) {
    //     case REGISTER_USER:
    //       return { loading: true }
    //     case REGISTER_SUCCESS:
    //       return { loading: false, userInfo: action.payload }
    //     case REGISTER_FAILED:
    //       return { loading: false, error: action.payload }
    //     case LOGOUT_SUCCESS:
    //       return {}
    //     default:
    //       return state
    //   }
    // };

export const user = (state = initialState, action) => {
      let py = action.payload;
      let authObj;
    
      switch (action.type) {
        case type.LOGIN_USER:
          authObj = {
            ...state,
            is_auth: true,
            detail_user: py,
          };
          setCookie("auth", authObj);
          return authObj;
    
        case type.LOGIN_SUCCESS:
          authObj = {
            ...state,
            is_auth: py,
          };
          setCookie("auth", authObj);
          return authObj;
    
        case type.LOGIN_FAILED:
          return { ...state };
    
        case type.LOGOUT_USER:
          removeCookie("auth");
          return {
            ...state,
            detail_user: {},
          };
        case type.LOGOUT_SUCCESS:
          removeCookie("auth");
          return {
            ...state,
            is_auth: false,
          };
        case type.LOGOUT_FAILED:
          return state;
    
        case type.FETCH_USER:
          authObj = {
            ...state,
            detail_user: py,
          };
          setCookie("auth", authObj);
          return authObj;
        case type.SET_TOKEN:
          authObj = {
            ...state,
            token: py,
          };
          setCookie("auth", authObj);
          return authObj;
        default:
          return state;
      }
    };
    
    // export const userDetailsReducer = (state = { user: {} }, action) => {
    //   switch (action.type) {
    //     case FETCH_USER:
    //       return { ...state, loading: true }
    //     case FETCH_USER_SUCCESS:
    //       return { loading: false, user: action.payload }
    //     case FETCH_USER_FAILED:
    //       return { loading: false, error: action.payload }
    //     case FETCH_USER_RESET:
    //       return { user: {} }
    //     default:
    //       return state
    //   }
    // }
    
    // export const userUpdateProfileReducer = (state = {}, action) => {
    //   switch (action.type) {
    //     case UPDATE_USER_DATA:
    //       return { loading: true }
    //     case UPDATE_USER_DATA_SUCCESS:
    //       return { loading: false, success: true, userInfo: action.payload }
    //     case UPDATE_USER_DATA_FAILED:
    //       return { loading: false, error: action.payload }
    //     case UPDATE_USER_DATA_RESET:
    //       return {}
    //     default:
    //       return state
    //   }
    // }
  
  
    // export const userUpdateReducer = (state = { user: {} }, action) => {
    //   switch (action.type) {
    //     case UPDATE_USER_DATA:
    //       return { loading: true }
    //     case UPDATE_USER_DATA_SUCCESS:
    //       return { loading: false, success: true }
    //     case UPDATE_USER_DATA_FAILED:
    //       return { loading: false, error: action.payload }
    //     case UPDATE_USER_DATA_RESET:
    //       return {
    //         user: {},
    //       }
    //     default:
    //       return state
    //   }
    // }