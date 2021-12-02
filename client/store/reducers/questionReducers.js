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