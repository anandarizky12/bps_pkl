import React from 'react'
import router from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../actions/user'
import MyAlert  from '../components/alert/alert'
import axios from 'axios'
import { sendAlert } from '../actions/alertLogin'



function Login() {
    const [open , setOpen] = React.useState(false)
    const [state, setState] = React.useState({
        email: '',
        password: '',
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value
    })};

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
  
    const handleSubmit = async(e) => {

        e.preventDefault();
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        
            await axios.post('/api/login', state , config)
                    .then(res => {
                        dispatch(loginUser(res.data));
                        setOpen(true)
                        dispatch(sendAlert('success', 1));
                        router.push('/');
                    })
                    .catch(err => {
                        setOpen(true)
                        dispatch(sendAlert(err.request.response, 3));
                
                    });
    };

    const userLogin = useSelector((state)=>state.userLogin);
    const { userInfo } = userLogin;


    React.useEffect(()=>{
        if(userInfo){
            router.push('/')
        }
    },[userInfo])




    return (
        <div className="flex w-screen h-screen">
            <MyAlert open={open} setOpen={setOpen}/>
            <div className="md:ml-36 ml-12 mt-24 w-full">
                <div className="">
                    <p className="text-2xl text-gray-600">Selamat Datang</p>
                    <p className= "text-4xl font-bold text-green-400">Para Surveyer!</p>
                </div>
                <form onSubmit={(e)=>handleSubmit(e)} className="mt-10">
                    <div className="flex flex-col my-2">
                        <label className="text-gray-600">Email<span className="text-red-600">*</span></label>
                        <input placeholder='youremail@email.com' required name="email" onChange={(e)=>{handleInput(e)}} type="email" className="text-gray-600 my-2 border p-5 h-12 w-10/12 border-gray-300 rounded-md"></input>
                    </div>
                    <div className="flex flex-col my-2">
                        <label className="text-gray-600">Password <span  className="text-red-600">*</span></label>
                        <input placeholder='Your password' required name="password" onChange={(e)=>handleInput(e)} type="password" className="text-gray-600 p-5 my-2 border h-12 w-10/12 border-gray-300 rounded-md"></input>
                    </div>
                    <div className="my-8 flex justify-between  w-10/12">
                        <button className="bg-green-400 p-2 w-32 rounded-3xl text-white">Login</button>
                      
                    </div>
                    <div className="">
                        <p className="text-gray-500">Belum punya akun?
                        <span onClick={()=>{router.push('/register')}} className="text-gray-600 font-medium cursor-pointer"> Klik Untuk Daftar</span></p>
                    </div>
                </form>
            </div>
            <div className="w-full hidden md:block bg-gray-100 bg-bps_login bg-center  bg-cover"></div>
       
        </div>
    )
}

export default Login
