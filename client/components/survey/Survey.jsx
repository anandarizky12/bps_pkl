import axios from "axios"
import Link from "next/link"
import React from "react"
import { useRouter } from "next/router"

const Survey = () => {

    const [value, setValue] = React.useState(null);


    return (
        <div>
            <div className="flex sm:justify-center">
                <div className="flex flex-col">
                    <h1 className="text-2xl sm:text-4x1 mb-2">{title}</h1>
                    <p className="antialiased text-opacity-80 text-base-400 italic text-xs sm:text-base ">Started About {create_at}</p>
                </div>
            </div>

            <div className="p-5 w-9/12 h-full text-xl ">
                <p className="text-xl font-bold">Vote down below</p>
                <div>
                    <p>{vote.question}</p>
                    {vote && vote.options.map((n,i)=>(
                        <RadioButton key={i} text={n.option} setValueSelected={setValueSelected} id={n._id}/>
                    ))}
                </div>
                <div className="mt-10">
                        <p>Total Votes</p>
                        <p>{totalVotes}</p>
                </div>
                <button className="bg-blue-400 p-2" >Votes</button>
                {/* <Donut data={vote.options}/> */}
            </div>
        </div>
    )
};

export default Survey;


