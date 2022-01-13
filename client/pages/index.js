
import React from 'react';
import { useSelector } from 'react-redux'
import router from 'next/router'
import BasicCard from '../components/card/CardQuestion';
import { server } from '../config/server';

export default function Home({data}) {
  const { userInfo } = useSelector((state)=>state.userLogin);

  React.useEffect(()=>{
    if(!userInfo){
        router.push('/login')
    }
  },[userInfo])


  return (
    <div className=" md:py-5 mt-24 w-full flex flex-col items-center md:justify-center px-10 md:px-24">
      <p className="text-3xl font-light">Welcome, <span>Public Vote Available Down Below</span>!</p>
      <div className='flex w-full flex-wrap justify-between '>
          {data.map((n,i)=>(
              <BasicCard key={i} data={n} />
            ))
          }
      </div>
    </div>
  )
}



export async function getServerSideProps(context) {
  const res = await fetch(`${server}/api/publicquestion`)
  const { data }  = await res.json()

  if (!res) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data
    } 
    , // will be passed to the page component as props
  }
}