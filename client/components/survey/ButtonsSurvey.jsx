import React from 'react'
import Share from '../share/Share';


function ButtonsSurvey({handleVote , url}) {
    
    const [open, setOpen] = React.useState(false);

    return (
        <div className="flex justify-center w-full">
            <div className="flex-1">
                <button onClick={()=>handleVote()} className="bg-blue-700 font-semibold rounded-sm hover:bg-blue-500 text-gray-300 text-xs md:text-sm p-2 w-7/12 md:w-6/12" >Vote</button>
             
            </div>
            <div className="flex flex-1 justify-end">
                <button className="bg-blue-700 font-semibold rounded-sm hover:bg-blue-500 text-gray-300 text-xs md:text-sm mx-2 p-2 md:w-2/6" >Result</button>
                <button onClick={()=>setOpen(!open)} className="bg-blue-700 font-semibold rounded-sm hover:bg-blue-500 text-gray-300 text-xs md:text-sm p-2 md:w-2/6" >Share</button>
            </div>
            <Share url={url} open={open} setOpen={setOpen} />
             
        </div>
    )
}

export default ButtonsSurvey
