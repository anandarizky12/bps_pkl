import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { route } from 'next/dist/server/router';

function register() {
    
    const router = useRouter();

    return (
        <div className="flex w-screen h-screen">
            <div className="ml-36 mt-12 w-full">
                <div className="">
                    <p className="text-2xl text-gray-600">Registrasi</p>
                    <p className= "text-4xl font-bold text-blue-900">Sahabat Data!</p>
                </div>
                <div className="mt-10">
                    <div className="flex flex-col my-2">
                        <label className="text-gray-600">Nama<span className="text-red-600">*</span></label>
                        <input type="email" className="text-gray-600 my-2 border p-5 h-12 w-10/12 border-gray-300 rounded-md"></input>
                    </div>
                    <div className="flex flex-col my-2">
                        <label className="text-gray-600">Email <span className="text-red-600">*</span></label>
                        <input type="email" className="text-gray-600 my-2 border p-5 h-12 w-10/12 border-gray-300 rounded-md"></input>
                    </div>
                    <div className="flex flex-col my-2">
                        <label className="text-gray-600">Password <span  className="text-red-600">*</span></label>
                        <input type="password" className="text-gray-600 p-5 my-2 border h-12 w-10/12 border-gray-300 rounded-md"></input>
                    </div>
                 
                    <div className="my-8 flex justify-between  w-10/12">
                        <button className="bg-blue-900 p-2 w-32 rounded-3xl text-white">Daftar</button>
                        <p className="text-gray-500"></p>
                    </div>
                    <div className="">
                        <p className="text-gray-500">Sudah punya akun?
                        <span onClick={()=>{router.push('/login')}} className="text-gray-600 font-medium cursor-pointer"> Klik disini</span></p>
                    </div>
                </div>
            </div>
            <div className="w-full bg-gray-200 bg-bps_login bg-center bg-cover"></div>
        </div>
    )
}

export default register