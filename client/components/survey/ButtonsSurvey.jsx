import React from 'react'
import Share from '../share/Share';


function ButtonsSurvey({handleVote , url}) {
    
    const [open, setOpen] = React.useState(false);

    return (
        <div className="flex justify-between w-full">
            <div>
                <button onClick={()=>handleVote()} className="bg-green-400 font-semibold rounded-sm hover:bg-green-500 text-gray-100 text-xs md:text-sm p-2  md:w-full" >Vote</button>
             
            </div>
            <div  >
                <button onClick={()=>setOpen(!open)} className="bg-green-400 font-semibold rounded-sm hover:bg-green-500 text-gray-100 text-xs md:text-sm p-2 md:w-full" >Share</button>
            </div>
            <Share url={url} open={open} setOpen={setOpen} />
             
        </div>
    )
}

export default ButtonsSurvey
