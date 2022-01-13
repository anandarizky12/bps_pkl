import React from 'react'

import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import {  getQuestion } from '../../actions/questions' 

import CircularProgress from '@mui/material/CircularProgress';
import CardEdit from '../../components/card/CardEdit';


function Index() {
  const router = useRouter();
  const dispatch = useDispatch();
  const id = router.query.index;
  const { data } = useSelector(state => state.question);
  const { userInfo } = useSelector((state)=>state.userLogin);

  React.useEffect(()=>{
    if(!userInfo){
        router.push('/login')
    }
  },[userInfo])

  React.useEffect(() => {
        
    dispatch(getQuestion(id))

  }, [id]);

    return (
      <div className= "mt-24 py-5 flex align-center md:justify-center ">
          {data ? 
             <CardEdit data={data} id={id}/>
            :
             <CircularProgress/>
            }
      </div>
    )
}

export default Index

