import React from 'react'
import { useRouter } from "next/router";
import { useDispatch, useSelector } from 'react-redux';
import { getQuestion } from '../../actions/questions'
import Custom404 from '../../components/custom404/Custom404';
import Survey from '../../components/survey/Survey';
import LinearProgress from '@mui/material/LinearProgress';

function Votesurvei() {

    const router = useRouter(); 
    const query  = router.query.index;
    const dispatch = useDispatch();
    const { data } = useSelector(state => state.question);
    
      
    React.useEffect(() => {
        if(query){
            dispatch(getQuestion(query));
        }
    }, [query]);


    return (
        <div className = "flex items-center justify-center w-full h-screen" >
            {!data ?    
            <div className="w-full fixed top-14"><LinearProgress/></div>
            : 
            <Survey data={data.data.question} id={query} />
            }
           
        </div>
    )
}

export default Votesurvei
