import React from 'react'
import TextField from '@material-ui/core/TextField';
import Autoaddoptions from '../components/options/autoaddoptions';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import MyAlert from '../components/alert/alert';
import { createQuestion } from '../actions/questions';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SaveIcon from '@mui/icons-material/Save';

function create() {
    
    const [optionAdd,setoptionAdd]=React.useState(1);
    const { userInfo } = useSelector(state => state.userLogin);
    const  create = useSelector(state => state.create);
    const dispatch = useDispatch();
    const [payload, setPayload] = React.useState({private : false, userid : userInfo ? userInfo.userData.id : null });
    const [loading, setLoading] = React.useState(false);
    const [alert, setAlert] = React.useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
      let answer = [];
      let data = {};

      for (let val in payload) {
        if(val.slice(0,6) == "answer"){
          answer.push(payload[val]);
        }else {
          data[val] = payload[val];
        }}
      if(answer.length >= 2){
        
        data['options'] = answer;
     
        dispatch(createQuestion(data))
        .then(() => {
          setLoading(false);
          setAlert(true);
          setPayload({private : false, userid : userInfo ? userInfo.userData.id : null });
          dispatch({type: 'SUCCESS_ALERT', payload: 'Successfully created Data'});
        })
        .then(res=>window.location.reload());
      

      }else{
        setLoading(false);
        setAlert(true);
        dispatch({type: 'ERROR_ALERT', payload: 'Please add atleast two options'});
      }
    };

    const handleChange = (e) => {
      const{ name, value } = e.target;
      setPayload({
        ...payload,
        [name]: value
      })};

      const handleCheckBox = e => {
        const { id, checked } = e.target
        setPayload(prev => ({
            ...prev,
            [id]:checked
        }))
    }


    return (
      <div className="px-10 py-5 flex align-center justify-center">
             <form onSubmit={(e)=>handleSubmit(e)} className="border border-2 w-9/12 p-5">
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

                <TextField
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
                <Autoaddoptions add = {optionAdd} setadd={setoptionAdd} handleChange={handleChange}/>
                <FormGroup>
                  <FormControlLabel  control={<Checkbox id={"private"} onChange={(e)=>handleCheckBox(e)} />} label="Private" />
                  <p className="font-normal text-gray-500 text-xs">*if it's private, the survey only shown to user who have the link (Not Public)</p>
                </FormGroup>
                <div className="flex justify-end items-center">
                   <Button size="medium" startIcon={<RestartAltIcon />} color="secondary" style={{marginTop : '10px', marginRight : '10px', width : '90px'}} variant="outlined" type="submit">Reset</Button>
                   <Button size="medium" startIcon={<SaveIcon />} color="primary" style={{marginTop : '10px', width : '90px'}} variant="outlined" type="submit">Save</Button>
                </div>
                {/* {loading ? <p className="text-4xl  my-5">Loading...</p> : null} */}
                <MyAlert setOpen={ setAlert } open = {alert}/>
             </form>
      </div>
    )
}

export default create

