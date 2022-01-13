import React from 'react';
import ShareIcon from '@mui/icons-material/Share';

import EqualizerIcon from '@mui/icons-material/Equalizer';
import EditIcon from '@mui/icons-material/Edit';
import moment from 'moment';
import { useRouter } from 'next/router';
import DraggableDialog from '../confirmation/DeleteConfirmation';
import Share from '../share/Share';
import { server } from '../../config/server';
const TableMySurvey = ({questions}) => {
    const router = useRouter();
    const [open, setOpen] = React.useState(false);
    const [shareid, setShareId] = React.useState('');
    const url = `${server}/survey/${shareid}` ;

    const openShare = (id) => {
        setShareId(id);
        setOpen(true);
    }
    return (
        <div className="flex justify-center flex-col items-center mt-24 px-2 md:px-24  ">
            <div className="w-full">
                <p className="text-3xl font-light mb-2">Your Survey Down Below!</p>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="border-collapse table-fixed min-w-96 md:min-w-full">
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
                                    className="group py-3 px-6 text-left pl-2 cursor-pointer hover:bg-gray-200 transition duration-100 ease-in-out">
                                    <p className="text-blue-500 font-bold  group-hover:text-blue-800">{question.title}</p>
                                    <p className="text-gray-400 group-hover:text-gray-600">Created {moment(question.date).format('MMMM Do YYYY, h:mm:ss a')}</p>
                                </td>
                                <td className="font-bold text-lg py-3 px-6">{question.response}</td>
                                <td className="font-bold text-lg py-3 px-6"  ><EqualizerIcon className="text-gray-500 cursor-pointer hover:text-gray-400"/></td>
                                <td className="font-bold text-lg py-3 px-6" ><EditIcon onClick={()=>router.push(`edit/${question._id}`)} className="text-gray-500 cursor-pointer hover:text-gray-400"/></td>
                                <td className="font-bold text-lg py-3 px-6" ><DraggableDialog id={question._id} /></td>
                                <td className="font-bold text-lg py-3 px-6" ><ShareIcon onClick={()=>openShare(question._id)}  className="text-gray-500 cursor-pointer hover:text-gray-400"/></td>

                        </tr>
                        )
                })}
            
                </table>
            </div>
            <Share open={open} setOpen={setOpen} url={url} />
        </div>
    )
};

export default TableMySurvey;