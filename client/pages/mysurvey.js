import React from 'react'
import TableMySurvey from '../components/tableMySurvey/TableMySurvey'
import { useSelector, useDispatch } from 'react-redux'
import { getMyQuestions } from '../actions/questions'
import MySurvey from '../components/tableMySurvey/MySurvey'
import LinearProgress from '@mui/material/LinearProgress';
import { useRouter } from 'next/router'
function Mysurvey() {

    const dispatch = useDispatch()
    const { data, message }= useSelector(state => state.myQuestion)
    const { userInfo } = useSelector(state => state.userLogin);
    const [questions, setQuestions] = React.useState([]);
    const router = useRouter();
    // const id = localStorage.getItem('userInfo')
  

    React.useEffect(() => {
        if(userInfo){
            dispatch(getMyQuestions(userInfo.userData.id));
        }else{
            router.push('/login')
        }
    }, [userInfo]);

    React.useEffect(() => {
        if(data){
            setQuestions(data.data.question)
        }
    }, [data]);

    return (
        <div>

            {data ? 
            data.data.question.length === 0  && <MySurvey /> 
            : 
             <div className="w-full"><LinearProgress/></div>}
            {questions.length > 0 && <TableMySurvey questions={questions} /> }
        
            
        </div>
    )
}

export default Mysurvey
