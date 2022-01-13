import React from "react";
import { Doughnut } from 'react-chartjs-2';

import 'chart.js/auto';
function Result ({data, total}){

    let label=[];
    let datas=[]

    data.map(i => {
        label.push(i.option)
        datas.push(i.votes)
      })

      const dataPie = {
        labels:label,
        datasets: [{
          label: "Result",
          data:datas,
          padding:5,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(255, 111, 197)',
            'rgb(162, 111, 197)',
            'rgb(147, 76, 197)',
            'rgb(38, 242, 197)',
            'rgb(253, 141, 191)',
            'rgb(228, 150, 72)',
            'rgb(78, 150, 72)'
          ],
          hoverOffset: 4,
       
        }]
    }

    return (
        <div className="h-full w-96 p-12 flex flex-col justify-center items-center">
            <Doughnut data={dataPie} />
            <p className="text-gray-500 py-5">Total Votes {total}</p>
        </div>
    )
}

export default Result;