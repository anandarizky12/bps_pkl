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
import Result from "./Result"
import { server } from "../../config/server"

const Survey = ({ data , id}) => {

    const [ loading, setLoading] = React.useState(false);
    const [alert , setAlert] = React.useState(false);
    const [idoption,setValueSelected]=React.useState('');
    const { userInfo } = useSelector(state => state.userLogin);
    const dispatch = useDispatch();
    const router = useRouter();
    const url = server + router.asPath;



    const handleVote = async () =>{
        setLoading(true);
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
                    dispatch(sendAlert(res.data.message, 1))
                    setLoading(false);
                    window.location.reload();
                }

            )
            .catch(
                (err) => {
                 setLoading(false);
                  setAlert(true)
                  return dispatch(sendAlert(err.request.response, 3));
                }
            )
}

    return (
        <div className="md:mt-32 shadow-md p-5   flex justify-center items-center md:justify-between bg-white flex-col md:flex-row border border-gray-100 rounded-sm  w-full md:w-10/12 lg:w-8/12  md:p-5">
            <MyAlert open={alert} setOpen={setAlert} />
            <div className="w-full"> 
                <div className="flex sm:justify-left">
                    <div className="flex flex-col items-left">
                        <h1 className="md:text-2xl sm:text-4x1 mb-2 font-bold text-green-400">{data.title}</h1>
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
                         <ButtonsSurvey loading={loading} handleVote={handleVote} url={url}/>
                    </div>
                  
                    {/* <Donut data={options}/> */}
                </div>
            </div>
            <Result  total={data.response} data={data.answer}/>
        </div>
    )
};

export default Survey;


