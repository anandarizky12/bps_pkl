import React from 'react';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import EditIcon from '@mui/icons-material/Edit';

const TableMySurvey = () => {
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
        
             <tr className="text-center text-xs h-20 text-gray-500 bg-gray-100">
                 
                 <td  className="text-left pl-2 ">
                     <p className="text-blue-500 font-bold">Title fdsfsdfsdf</p>
                     <p className="text-gray-400">Created 08/12/2000</p>
                 </td>
                 <td className="font-bold text-lg ">120</td>
                 <td><EqualizerIcon className="text-gray-500 cursor-pointer hover:text-gray-400"/></td>
                 <td><EditIcon  className="text-gray-500 cursor-pointer hover:text-gray-400"/></td>
                 <td><DeleteIcon  className="text-gray-500 cursor-pointer hover:text-gray-400"/></td>
                 <td><ShareIcon  className="text-gray-500 cursor-pointer hover:text-gray-400"/></td>
             
             </tr>
             <tr className="text-center text-xs h-20 text-gray-500 bg-gray-100">
                 
                 <td  className="text-left pl-2 ">
                     <p className="text-blue-500 font-bold">Title fdsfsdfsdf</p>
                     <p className="text-gray-400">Created 08/12/2000</p>
                 </td>
                 <td className="font-bold text-lg ">120</td>
                 <td><EqualizerIcon className="text-gray-500 cursor-pointer hover:text-gray-400"/></td>
                 <td><EditIcon  className="text-gray-500 cursor-pointer hover:text-gray-400"/></td>
                 <td><DeleteIcon  className="text-gray-500 cursor-pointer hover:text-gray-400"/></td>
                 <td><ShareIcon  className="text-gray-500 cursor-pointer hover:text-gray-400"/></td>
             
             </tr>
             <tr className="text-center text-xs h-20 text-gray-500 bg-gray-100">
                 
                 <td  className="text-left pl-2 ">
                     <p className="text-blue-500 font-bold">Title fdsfsdfsdf</p>
                     <p className="text-gray-400">Created 08/12/2000</p>
                 </td>
                 <td className="font-bold text-lg ">120</td>
                 <td><EqualizerIcon className="text-gray-500 cursor-pointer hover:text-gray-400"/></td>
                 <td><EditIcon  className="text-gray-500 cursor-pointer hover:text-gray-400"/></td>
                 <td><DeleteIcon  className="text-gray-500 cursor-pointer hover:text-gray-400"/></td>
                 <td><ShareIcon  className="text-gray-500 cursor-pointer hover:text-gray-400"/></td>
             
             </tr>
            </table>
        </div>
    )
};

export default TableMySurvey;