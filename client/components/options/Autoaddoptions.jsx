import React from 'react'
import TextField from '@material-ui/core/TextField';

function Autoaddoptions({add, handleChange, setadd, payload}) {
    const Arr = [...Array(add)];

    
    return (
        <>
        {Arr.map((item,index)=>{
                if(index + 1 === Arr.length){
                    return (
                  <>
                        <TextField
                    id="filled-multiline-static"
                    key={index}
                    onChange={e =>handleChange(e)}
                    onFocus={()=>setadd(add+1)}
                    name={'answer'+index}
                    label="type choose answer ..."
                    multiline
                    fullWidth
                    size="small"
                    variant='outlined'
                    style={{marginTop: '10px'}}
                    />
                    </>
                    )
                }else{
                    return (
                    <>
                        <TextField
                        id="filled-multiline-static"
                        key={index}
                        onChange={e =>handleChange(e)}
                        name={'answer'+ index}
                        label="type choose answer ..."
                        multiline
                        fullWidth
                        size="small"
                        variant='outlined'
                        style={{marginTop: '10px'}}
                        />
                    </>
                    )
                }
        })}
    </>
    )
}

export default Autoaddoptions
