import React from 'react';
import ShareIcon from '@mui/icons-material/Share';

import EqualizerIcon from '@mui/icons-material/Equalizer';
import EditIcon from '@mui/icons-material/Edit';
import moment from 'moment';
import { useRouter } from 'next/router';
import DraggableDialog from '../confirmation/DeleteConfirmation';
import Share from '../share/Share';
const TableMySurvey = ({questions}) => {
    const router = useRouter();
    const [open, setOpen] = React.useState(false);
    const [shareid, setShareId] = React.useState('');
    const url = `http://localhost:3000/survey/${shareid}` ;

    const openShare = (id) => {
        setShareId(id);
        setOpen(true);
    }
    return (
        <div className="flex justify-center flex-col items-center">
            <div className="w-8/12">
                <p className="text-2xl font-normal text-gray-500 my-5 ">Your Survey Down Below</p>
            </div>
            <table className="w-8/12 ">
                <tr className="bg-gray-500 text-gray-100 h-10 ">
               
                    <th className="font-light border w-3/12 text-left pl-2">Title</th>
                    <th className="font-light border w-1/12">Responses</th>
                    <th className="font-light border w-1/12">Result</th>
                    <th className="font-light border w-1/12">Edit</th>
                    <th className="font-light border w-1/12">Delete</th>
                    <th className="font-light border w-1/12">Share</th>

                </tr>
            {questions.length >= 1 && questions.map((question, index) => {
              
                return (
                    <tr key={index} className="text-center text-xs h-20 text-gray-500 bg-gray-100">
                 
                            <td  
                                onClick={() => {router.push(`/survey/${question._id}`)}}
                                className="group text-left pl-2 cursor-pointer hover:bg-gray-200 transition duration-100 ease-in-out">
                                <p className="text-blue-500 font-bold  group-hover:text-blue-800">{question.title}</p>
                                <p className="text-gray-400 group-hover:text-gray-600">Created {moment(question.date).format('MMMM Do YYYY, h:mm:ss a')}</p>
                            </td>
                            <td className="font-bold text-lg ">{question.response}</td>
                            <td><EqualizerIcon className="text-gray-500 cursor-pointer hover:text-gray-400"/></td>
                            <td><EditIcon  className="text-gray-500 cursor-pointer hover:text-gray-400"/></td>
                            <td><DraggableDialog id={question._id} /></td>
                            <td><ShareIcon onClick={()=>openShare(question._id)}  className="text-gray-500 cursor-pointer hover:text-gray-400"/></td>

                     </tr>
                    )
            })}
          
            </table>
            <Share open={open} setOpen={setOpen} url={url} />
        </div>
    )
};

export default TableMySurvey;