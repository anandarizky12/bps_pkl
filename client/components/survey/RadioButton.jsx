import React from 'react'

function RadioButton({text, id, setValueSelected}) {
    return (
        <div className="m-2 flex items-center">
            <input className="text-xs" name="radio" id={text} value={id} onChange={(e)=>setValueSelected(id)} type="radio"/>
            <label htmlFor={text} className="text-xs md:text-base ml-2">{text}</label>
        </div>
    )
}

export default RadioButton