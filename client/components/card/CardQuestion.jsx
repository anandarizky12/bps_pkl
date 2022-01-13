import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import moment from 'moment';
import Typography from '@mui/material/Typography';
import Router from "next/router";
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard({data}) {
  return (
    <Card onClick={()=>Router.push(`/survey/${data._id}`)} className="shadow-md cursor-pointer hover:bg-gray-100" sx={{ minWidth: 275 , maxWidth: 275 , marginTop : '22px'}}>
      <CardContent>
        <Typography variant="caption"  color="text.secondary" gutterBottom>
          created by <span className={"font-semibold"}> {data._creator ? data._creator.name : "Unknown"}</span>
        </Typography>
        <Typography className="text-green-500" variant="subtitle1" component="div">
          {data.title}
        </Typography>
        
      </CardContent>
      <CardActions className='flex items-center justify-between'>
        <Typography className="ml-2" variant="caption" color="text.secondary">
         {moment(data.date).format("MMM Do YY")}
        </Typography>
        <Typography className="mr-2" variant="caption" color="text.secondary">
          Total Votes <span className={"font-semibold"}>{data.response}</span>
        </Typography>
      </CardActions>
    </Card>
  );
}
