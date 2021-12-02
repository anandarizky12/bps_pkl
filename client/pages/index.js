import styles from '../styles/Home.module.css'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import router from 'next/router'

export default function Home() {
  const { userInfo } = useSelector((state)=>state.userLogin);

  React.useEffect(()=>{
    if(!userInfo){
        router.push('/login')
    }
 },[userInfo])

  return (
    <div className="px-10 py-5">
      <p className="text-3xl font-light">Welcome, <span className="text-yellow-600">Alex</span>!</p>
    </div>
  )
}
