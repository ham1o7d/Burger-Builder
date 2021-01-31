import React from 'react'  ; 
import './BuildControl.css' ;
import Controls from '../BuildControl/Controls/Controls' ;

const BuildControl = (props) => {

    const Control = [
        {label: 'Salad', type: 'salad'},
        {label: 'Bacon', type: 'bacon'},
        {label: 'Cheese', type: 'cheese'},
        {label: 'Meat', type: 'meat'},
    ]
    return (
        <div className='BuildControl'>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong> </p>
            {
                Control.map (cont => {
                    return <Controls 
                        key={cont.label} 
                        label={cont.label} 
                        added={() => props.addIng(cont.type)}
                        remove={ () => props.removeIng(cont.type)}
                        disabled={props.disabled}
                        />
                })
            }
            <button className='OrderButton' 
            onClick={props.ordered}
            >ORDER NOW</button>
        </div>
    )
}

export default BuildControl ;