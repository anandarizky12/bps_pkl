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

    GET_ALL_QUESTIONS,
    GET_ALL_QUESTIONS_SUCCESS,
    GET_ALL_QUESTIONS_FAILED,

    GET_MYQUESTIONS_SUCCESS,
    GET_MYQUESTIONS_FAILED,
    GET_MYQUESTIONS
    } from '../../actions/actions_type/actions_type_question';



    
  export const createQuestionReducer = (state = {}, action) => {
      switch (action.type) {
        case CREATE_QUESTION:
          return { loading: true }
        case CREATE_QUESTION_SUCCESS:
          return { loading: false, data: action.payload }
        case CREATE_QUESTION_FAILED:
          return { loading: false, error: action.payload }
        default:
          return state
      }
    }
    
  export const voteReducer = (state = {}, action) => {
      switch (action.type) {
        case MAKE_VOTE:
          return { loading: true }
        case MAKE_VOTE_SUCCESS:
          return { loading: false, data: action.payload }
        case MAKE_VOTE_FAILED:
          return { loading: false, error: action.payload }
        default:
          return state
      }};
      
  export const getAllQuestionsReducer = (state = {}, action) => {
        
    switch(action.type) {
            case GET_ALL_QUESTIONS:
              return { loading: true }
            case GET_ALL_QUESTIONS_SUCCESS:
              return { loading: false, data: action.payload }
            case GET_ALL_QUESTIONS_FAILED:
              return { loading: false, error: action.payload }
            default:
              return state
            
  }};

  export const getMyQuestionsReducer = (state = {}, action) => {
    switch(action.type) {
            case GET_MYQUESTIONS:
              return { loading: true }
            case GET_MYQUESTIONS_SUCCESS:
              return { loading: false, data: action.payload }
            case GET_MYQUESTIONS_FAILED:
              return { loading: false, error: action.payload }
            default:
              return state;
    }};

  export const deleteQuestionReducer = (state = {}, action) => {  
        switch (action.type) {
            case DELETE_QUESTION:
             return { loading: true }
            case DELETE_QUESTION_SUCCESS:
             return { loading: false, data: action.payload }
            case DELETE_QUESTION_FAILED:
             return { loading: false, error: action.payload }
            default:
            return state
        }
        };
    
 export const editQuestionReducer = (state = {}, action) => {
            switch (action.type) {
              case EDIT_QUESTION:
                return { loading: true }
              case EDIT_QUESTION_SUCCESS:
                return { loading: false, data: action.payload }
              case EDIT_QUESTION_FAILED:
                return { loading: false, error: action.payload }
              default:
                return state
            }
          }