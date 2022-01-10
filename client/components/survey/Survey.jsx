import axios from "axios"
import Link from "next/link"
import React from "react"
import { useDispatch , useSelector } from "react-redux"
import { useRouter } from "next/router"
import RadioButton from "../../components/survey/RadioButton"
import moment from 'moment';
import ButtonsSurvey from "./ButtonsSurvey"
import { sendAlert } from "../../actions/alertLogin"
import MyAlert from "../alert/alert";


const Survey = ({ data , id}) => {

    const [ value, setValue] = React.useState(null);
    const [alert , setAlert] = React.useState(false);
    const [idoption,setValueSelected]=React.useState('');
    const { userInfo } = useSelector(state => state.userLogin);
    const dispatch = useDispatch();
    const router = useRouter();
    const url = 'http://localhost:3000' + router.asPath;

    const handleVote = async () =>{
        const data = {
            idoption,
            id,
            userId: userInfo ? userInfo.userData.id : null
             }
      
        const config ={
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + userInfo.token
        }
        }

        await axios.patch(`/api/vote`, data , config)
            .then(
                (res) => {
                    setAlert(true);
                    console.log(res.data)
                    return dispatch(sendAlert(res.data.message, 1))
                }

            )
            .catch(
                (err) => {
               
                  setAlert(true)
                  return dispatch(sendAlert(err.request.response, 3));
                }
            )
}
     
    console.log(userInfo.userData.id ,value, idoption, id ,data)
    return (
        <div className="bg-gray-200 border border-gray-100 rounded-sm b-2  md:w-8/12  p-5">
            <MyAlert open={alert} setOpen={setAlert} />
            <div className="flex sm:justify-left">
                <div className="flex flex-col items-left">
                    <h1 className="md:text-2xl sm:text-4x1 mb-2 font-bold text-blue-700">{data.title}</h1>
                    <p className="antialiased text-opacity-80 text-gray-400 text-base-400 italic text-xs md:text-base ">Started {moment(data.date).format('MMMM Do YYYY, h:mm:ss a')}</p>
                </div>
            </div>

            <div className="py-5 w-full h-full text-sm md:text-xl text-gray-700" >
                <div>
                    <p>{data.question}</p>
                    {data.answer.map((n,i)=>(
                        <RadioButton key={i} text={n.option} setValueSelected={setValueSelected} id={n._id}/>
                    ))}
                </div>
                <div className="mt-10">
                        <p>Total Votes</p>
                        {/* <p>{totalVotes}</p> */}
                </div>
                <ButtonsSurvey handleVote={handleVote} url={url}/>
                {/* <Donut data={options}/> */}
            </div>
        </div>
    )
};

export default Survey;


