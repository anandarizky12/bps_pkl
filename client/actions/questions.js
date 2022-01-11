import {
    
    CREATE_QUESTION, 
    CREATE_QUESTION_SUCCESS,
    CREATE_QUESTION_FAILED,

    MAKE_VOTE,
    MAKE_VOTE_SUCCESS,
    MAKE_VOTE_FAILED,
   
    DELETE_QUESTION,
    DELETE_QUESTION_SUCCESS,
    DELETE_QUESTION_FAILED,
   
    EDIT_QUESTION,
    EDIT_QUESTION_SUCCESS,
    EDIT_QUESTION_FAILED,
   
    GET_MYQUESTIONS,
    GET_MYQUESTIONS_SUCCESS,
    GET_MYQUESTIONS_FAILED,
 
    GET_QUESTION,
    GET_QUESTION_SUCCESS,
    GET_QUESTION_FAILED,
    
    
    GET_ALL_QUESTIONS,
    GET_ALL_QUESTIONS_SUCCESS,
    GET_ALL_QUESTIONS_FAILED,

} from  './actions_type/actions_type_question';
import axios from 'axios';

export const AllPublicQuestion = () => async (dispatch, getState) => {
  
    try{
        dispatch({ 
            type: GET_ALL_QUESTIONS
        });

        const { data } = await axios.get('/api/publicquestion');
        dispatch({
            type: GET_ALL_QUESTIONS_SUCCESS,
            payload: data
        });
        

    }catch(error){
        dispatch({
            type: GET_ALL_QUESTIONS_FAILED,
            payload: error
        });
        console.log(error.message, "ini data erro");

    }

};


export const createQuestion = (question) => async (dispatch, getState) => {
  
    try{
        dispatch({ 
            type: CREATE_QUESTION
        });


        dispatch({
            type: CREATE_QUESTION_SUCCESS,
            payload: question.message
        });
        

    }catch(error){
        dispatch({
            type: CREATE_QUESTION_FAILED,
            payload: error
        });
        console.log(error.message, "ini data erro");

    }

};


export const deleteQuestion = (id) => async (dispatch, getState) => {
    try{
        dispatch({ 
            type: DELETE_QUESTION
        });

       
        const {
            userLogin: { userInfo },
        } = getState();
        
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userInfo.token,
            }
        };
      

        const data  = await axios.delete('/api/question/'+id, config);
        console.log(data, "ini data");
        dispatch({
            type: DELETE_QUESTION_SUCCESS,
            payload: data
        });
        

    }catch(error){
        dispatch({
            type: DELETE_QUESTION_SUCCESS,
            payload: data
        });
        
        console.log(error);
    }

}
export const editQuestion = (question) => async (dispatch, getState) => {
    try{
        dispatch({ 
            type: EDIT_QUESTION
        });
     
        dispatch({
            type: EDIT_QUESTION_SUCCESS,
            payload: question
        });
        

    }catch(error){
        dispatch({
            type: EDIT_QUESTION_FAILED,
            payload: "ERROR"
        });

    }

};


export const getMyQuestions = (id) => async (dispatch, getState) => {

    try{

        dispatch({
            type: GET_MYQUESTIONS
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userInfo.token,
            }
        };

        const data = await axios.get('/api/myquestion/'+id, config);

 
        dispatch({
            type: GET_MYQUESTIONS_SUCCESS,
            payload: data
        });

    }catch(error){
        dispatch({
            type: GET_MYQUESTIONS_FAILED,
            payload: error
        });
        console.log(error);
    }
}

export const getQuestion = (id) => async (dispatch, getState) => {

    try{

        dispatch({
            type: GET_QUESTION
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userInfo.token,
            }
        };

        const data = await axios.get('/api/question/'+id, config);

 
        dispatch({
            type: GET_QUESTION_SUCCESS,
            payload: data.data.question
        });

    }catch(error){
        dispatch({
            type: GET_QUESTION_FAILED,
            payload: error
        });
        console.log(error);
    }
}

export const makeVote = (id , idoption, userId) => async (id, vote) => {
    try{
        dispatch({
            type: MAKE_VOTE
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userInfo.token,
            }
        };

        const data = await axios.put(`/${id}/${idoption}/${userId}/votes`, vote, config);

        dispatch({
            type: MAKE_VOTE_SUCCESS,
            payload: data
        });
    }catch(error){
        dispatch({
            type: MAKE_VOTE_FAILED,
            payload: error
        });
        console.log(error);
    }
}