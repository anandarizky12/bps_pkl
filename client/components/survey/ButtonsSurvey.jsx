import React from 'react'
import Share from '../share/Share';
import { CircularProgress } from '@material-ui/core';

function ButtonsSurvey({handleVote , url, loading}) {
    
    const [open, setOpen] = React.useState(false);

    return (
        <div className="flex justify-between w-full">
            <div className='w-24'>
                <button onClick={()=>handleVote()} className="w-full bg-green-400 font-semibold rounded-sm hover:bg-green-500 text-gray-100 text-xs md:text-sm p-2 " >{loading ?  <CircularProgress color="inherit" size={14} /> : 'Vote'}</button>
            </div>
            <div className='w-24' >
                <button onClick={()=>setOpen(!open)} className="w-full bg-green-400 font-semibold rounded-sm hover:bg-green-500 text-gray-100 text-xs md:text-sm p-2 " >Share</button>
            </div>
            <Share url={url} open={open} setOpen={setOpen} />
             
        </div>
    )
}

export default ButtonsSurvey
