import axios from 'axios';
import {
  
LOGIN_USER,
LOGIN_FAILED,
LOGOUT_USER,
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
} from './actions_type/actions_type_user';




export const loginUser = (email, password) => async (dispatch) => {
    
    
    try {
        dispatch({ type: LOGIN_USER });
        
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        
        const res = await axios.post('localhost:5000/api/login', { email, password }, config);
        
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
        
    } catch (err) {
        
        dispatch({
            type: LOGIN_FAILED,
            payload: err
        });
}};

export const registerUser = ( name, email, password )=> async (dispatch) => {
    
    try{
        dispatch({ type: REGISTER_USER });
        
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        
        const res = await axios.post('/api/users/register', { name, email, password }, config);
        
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
        
    }catch(err){

    }
}