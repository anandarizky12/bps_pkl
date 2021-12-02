import {
    
    CREATE_QUESTION, 
    CREATE_QUESTION_SUCCESS,
    CREATE_QUESTION_FAILED,
    DELETE_QUESTION,
    DELETE_QUESTION_SUCCESS,
    DELETE_QUESTION_FAILED,
    EDIT_QUESTION,
    EDIT_QUESTION_SUCCESS,
    EDIT_QUESTION_FAILED,

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

}


