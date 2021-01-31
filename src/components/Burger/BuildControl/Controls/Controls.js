import React from 'react'  ; 
import './Controls.css' ;

const Controls = (props) => {

    return (
        <div className='cont'>
            <div className='label' >{props.label}</div>
            <button className='more' onClick={props.added} >More</button>
            <button className='less' onClick={props.remove} >Less</button>
        </div>
    )
//             <button className='less' onClick={props.remove} disabled={props.disabled}>Less</button>

}

export default Controls;
