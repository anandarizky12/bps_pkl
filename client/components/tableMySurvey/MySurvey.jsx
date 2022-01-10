import React from 'react'
import Router from 'next/router'
function MySurvey() {
    return (
        <div className="flex flex-col items-center justify-center h-screen ">
            <p className="text-4xl font-light text-gray-600">Create your first survey</p>
            <div className="w-3/6 flex items-center justify-center ">
                <div className="mx-10 my-5 flex flex-col items-center h-20 justify-around text-gray-600">
                    <div className="font-semibold rounded-full h-10 w-10 flex items-center justify-center border b-2 border-black">
                        1
                    </div>
                    <p  className="text-xs font-bold">Add Question</p>
                </div>
                <div className="mx-10 my-5 flex flex-col items-center h-20 justify-around text-gray-600">
                    <div className="font-semibold rounded-full h-10 w-10 flex items-center justify-center border b-2 border-black">
                        2
                    </div>
                    <p className="text-xs font-bold">Send Question</p>
                </div>
                <div className="mx-10 my-5 flex flex-col items-center h-20 justify-around text-gray-600">
                    <div className="font-semibold rounded-full h-10 w-10 flex items-center justify-center border b-2 border-black">
                        3
                    </div>
                    <p className="text-xs font-bold">Analyze Result</p>
                </div>
            </div>
            <button onClick={()=>Router.push('/create')} className="bg-green-500 px-10 py-3 text-white font-light rounded-sm">+ Create Question</button>
        </div>
    )
}

export default MySurvey
