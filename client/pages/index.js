
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import router from 'next/router'
import BasicCard from '../components/card/CardQuestion';

export default function Home({data}) {
  const { userInfo } = useSelector((state)=>state.userLogin);

  React.useEffect(()=>{
    if(!userInfo){
        router.push('/login')
    }
  },[userInfo])

  console.log(data)
  return (
    <div className="px-10 py-5 mt-12 w-full flex flex-col justify-center items-center ">
      <p className="text-3xl font-light">Welcome, <span className="text-yellow-600">Alex</span>!</p>
      <div className='flex w-11/12 flex-wrap justify-between '>
          {data.map((n)=>(
              <BasicCard data={n} />
            ))
          }
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:5000/api/publicquestion`)
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