import React from 'react'
import TableMySurvey from '../components/tableMySurvey/TableMySurvey'
import { useSelector, useDispatch } from 'react-redux'
import { getMyQuestions } from '../actions/questions'

function mysurvey() {

    const dispatch = useDispatch()
    const { data }= useSelector(state => state.myQuestion)
    const { userInfo } = useSelector(state => state.userLogin);
    const [questions, setQuestions] = React.useState([]);

    // const id = localStorage.getItem('userInfo')

 
    console.log(questions, data)

    React.useEffect(() => {
        if(userInfo){
            dispatch(getMyQuestions(userInfo.userData.id));
            console.log(userInfo.userData.id, "ini")
        }
    }, [userInfo]);

    React.useEffect(() => {
        if(data){
            setQuestions(data.data.question)
        }
    }, [data]);

    return (
        <div>
            <TableMySurvey questions={questions}/>
        </div>
    )
}

export default mysurvey
