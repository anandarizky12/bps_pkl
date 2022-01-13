import React from 'react'
import { useRouter } from "next/router";
import { useDispatch, useSelector } from 'react-redux';
import { getQuestion } from '../../actions/questions'

import Survey from '../../components/survey/Survey';
import LinearProgress from '@mui/material/LinearProgress';

function Votesurvei() {

    const router = useRouter(); 
    const query  = router.query.index;
    const dispatch = useDispatch();
    const { data } = useSelector(state => state.question);
    const { userInfo } = useSelector((state)=>state.userLogin);

    console.log(router.query)
    React.useEffect(()=>{
      if(!userInfo){
          router.push('/login')
      }
    },[userInfo])
  
      
    React.useEffect(() => {
        if(query){
            dispatch(getQuestion(query));
        }
    }, [query]);


    return (
        <div className = "flex ml-6  mt-20 md:mt-0 md:justify-center w-full" >
            {!data ?    
            <div className="w-full fixed left-0 top-14"><LinearProgress/></div>
            : 
            <Survey data={data} id={query} />
            }
           
        </div>
    )
}

export default Votesurvei
