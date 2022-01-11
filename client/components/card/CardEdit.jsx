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


function CardEdit({data, id}) {

    
  
    const [optionAdd,setoptionAdd]=React.useState(1);
    const { userInfo } = useSelector(state => state.userLogin);
    const dispatch = useDispatch();
  


    const [payload, setPayload] = React.useState({
        private : data.private, 
        userid : userInfo ? userInfo.userData.id : null,
        title : data.title,
        question : data.question,
      
    
    });

    ///arrrrrr
    const [options , setOptions] = React.useState(
      data.answer.map((item,index)=>{
        return {
          'answer':item
        } 
        
    }))
    

    const [loading, setLoading] = React.useState(false);
    const [alert, setAlert] = React.useState(false);
   
    


    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
      setPayload({
        ...payload,
        options : options
      })
      let answer = [];
      let data = {};
      
      for (let val in payload) {
        if(val !== 'options'){
          data[val] = payload[val];
        }else{
          for(let i = 0 ; i < payload.options.length ; i++){
            answer.push(payload.options[i].answer.option)
          }
        }
      
      }
      if(answer.length >= 2){
        
        data['options'] = answer;
       
        const config = {
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + userInfo.token
          }
        };

               axios
               .put(`/api/question/${id}`, data, config)
               .then(res => {
                 dispatch(editQuestion(res.data))
                 setLoading(false);
                 setAlert(true);
                 setPayload({private : false, userid : userInfo ? userInfo.userData.id : null });
                 dispatch({type: 'SUCCESS_ALERT', payload: 'Successfully Edit Data'});
                }).catch((err)=>{
                 setLoading(false)
                 const msg = JSON.parse(err.request.response);     
                 setAlert(true);
                 dispatch({type: 'ERROR_ALERT', payload: err.request.response});
               })
            }else{
              setLoading(false);
              setAlert(true);
              dispatch({type: 'ERROR_ALERT', payload: 'Please add at least two options OR click One more time'});
            }
          };

    const handleChange = (e) => {
      const{ name, value } = e.target;
      setPayload({
        ...payload,
        [name]: value
      })};

      const handleOptionChange = (e,index) => {
        const{ name, value } = e.target;
        options[index].answer.option = value
        setOptions([...options])
      }

      const handleCheckBox = e => {
        const { id, checked } = e.target
        setPayload(prev => ({
            ...prev,
            [id]:checked
        }))
    }


    return (
        <div className='w-full flex items-center justify-center'>
           <form onSubmit={(e)=>handleSubmit(e)} className="border  w-9/12 p-5 shadow-md">
                <p className="text-2xl font-light my-5">Create a new Survei</p>
                <TextField
                id="filled-multiline-static"
                label="Title"
                multiline
                value={payload.title}
                onChange={e =>handleChange(e)}
                fullWidth
                name="title"
                required
                size="small"
                variant='outlined'
                />
                
                <TextField
                id="filled-multiline-static"
                label="Question"
                multiline
                value={payload.question}
                name="question"
                required
                onChange={e =>handleChange(e)}
                fullWidth
                size="small"
                variant='outlined'
                style={{marginTop: '20px'}}
                />

                {/* <TextField
                id="filled-multiline-static"
                label="type choose answer ..."
                multiline
                fullWidth
                value={payload.answery}
                size="small"
                name={"answery"}
                onChange={e =>handleChange(e)}
                variant='outlined'
                style={{marginTop: '10px'}}
                />
                <TextField
                id="filled-multiline-static"
                label="type choose answer ..."
                multiline
                value={payload.answerx}
                fullWidth
                size="small"
                name={"answerx"}
                onChange={e =>handleChange(e)}
                variant='outlined'
                style={{marginTop: '10px'}}
                />
                <Autoaddoptions add = {optionAdd} setadd={setoptionAdd} handleChange={handleChange}/> */}
                {
                    options.map((item,index)=>{
                        return(
                            <TextField
                            key={index}
                            id="filled-multiline-static"
                            label="type choose answer ..."
                            multiline
                            value={item.answer.option}
                            onChange={e =>handleOptionChange(e,index)}
                            fullWidth
                            size="small"
                            name={"answer"}
                            variant='outlined'
                            style={{marginTop: '10px'}}
                            />
                        )
                    })
                }
              
                <div className='mt-2 text-gray-600 '>
                  <input checked= { payload.private  } id={"private"} type="checkbox" onChange={(e)=>handleCheckBox(e) }/>
                  <label htmlFor="private"> Private</label>
                  <p className="font-normal text-gray-500 text-xs">*if it&apos;s private, the survey only shown to user who have the link (Not Public)</p>
                </div>
                <div className="flex justify-end items-center">
                   <button className="text-gray-500 flex  items-center" style={{marginTop : '10px', marginRight : '10px', width : '90px'}}  type="submit">
                      <RestartAltIcon className='mr-2'/>
                      Reset
                     </button>
                   <button className="text-gray-500 flex  items-center" color="primary" style={{marginTop : '10px', width : '90px'}}  type="submit">
                     {loading ? <CircularProgress size={22} className='mr-2' /> : <SaveIcon className='mr-2' />}
                     Save
                    </button>
                </div>
                {/* {loading ? <p className="text-4xl  my-5">Loading...</p> : null} */}
                <MyAlert setOpen={ setAlert } open = {alert}/>
             </form>
        </div>
    )
}

export default CardEdit
