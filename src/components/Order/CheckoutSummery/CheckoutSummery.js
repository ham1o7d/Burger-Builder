import React from 'react' ;
import Burger from '../../Burger/Burger' ;

import './CheckoutSummery.css';
const CheckoutSummery = (props) => {
    return (
      <div className='CheckoutSummery'>
        <h1>We hope it tastes well!</h1>
        <div style ={{width: '100%', margin: 'auto'}}>
          <Burger ingredients={props.ingredients} />
          <div className='buts'>
            <button className='Cansle' onClick={props.cansel}>Cansle</button>
            <button className='Continue' onClick={props.continue}>Continue</button>
          </div>
        </div>
      </div>   
    ) ; 
}

export default CheckoutSummery ;