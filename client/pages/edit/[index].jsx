import React from 'react'
import TextField from '@material-ui/core/TextField';
import Autoaddoptions from '../../components/options/AutoAddOptions';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import MyAlert from '../../components/alert/alert';
import { editQuestion, getQuestion } from '../../actions/questions' 
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SaveIcon from '@mui/icons-material/Save';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import CardEdit from '../../components/card/CardEdit';


function Index() {
  const router = useRouter();
  const dispatch = useDispatch();
  const id = router.query.index;
  const { data } = useSelector(state => state.question);
  React.useEffect(() => {
        
    dispatch(getQuestion(id))

  }, [id]);

    return (
      <div className= "mt-24 py-5 flex align-center justify-center ">
          {data ? 
             <CardEdit data={data} id={id}/>
            :
             <CircularProgress/>
            }
      </div>
    )
}

export default Index

