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
    
    
    GET_ALL_QUESTIONS,
    GET_ALL_QUESTIONS_SUCCESS,
    GET_ALL_QUESTIONS_FAILED,

} from  './actions_type/actions_type_question';
import axios from 'axios';



export const createQuestion = (question) => async (dispatch, getState) => {
  
    try{
        dispatch({ 
            type: CREATE_QUESTION
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
      

        const data  = await axios.post('/api/question', question, config);
        console.log(data, "ini data");
        dispatch({
            type: CREATE_QUESTION_SUCCESS,
            payload: data
        });
        

    }catch(error){
        dispatch({
            type: CREATE_QUESTION_SUCCESS,
            payload: data
        });
        
        console.log(error);
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
export const editQuestion = (id, question) => async (dispatch, getState) => {
    try{
        dispatch({ 
            type: EDIT_QUESTION
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
      

        const data  = await axios.put('/api/question/'+id, question, config);
        console.log(data, "ini data");
        dispatch({
            type: EDIT_QUESTION_SUCCESS,
            payload: data
        });
        

    }catch(error){
        dispatch({
            type: EDIT_QUESTION_SUCCESS,
            payload: data
        });
        
        console.log(error);
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

        const data = await axios.get('/api/question/'+id, config);

        console.log(data)
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


const makeVote = () => async (id, vote) => {
    try{

    }catch(error){
        console.log(error);
    }
}