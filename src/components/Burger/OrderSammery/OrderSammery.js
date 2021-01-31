import React from 'react' 
import Aux from '../../../hoc/Auxx' ;
import './OrderSammery.css';
import ContactData from './ContactData/ContactData' ;
const OrderSammery = (props) => {

    const ingredintSummery = Object.keys(props.ingredients)
        .map(inKey => {
        return <li key={inKey} ><strong>{inKey}</strong> :{props.ingredients[inKey]}</li> 
        }) ;
        const ing = Object.keys(props.ingredients)
        .map(inKey => {
        return inKey ; 
        }) ;
        let result = (
           <Aux>
                <h2>You have no ingredients.</h2> 
                <button onClick={props.cansel}>Add ingredients</button>
           </Aux>
        ) 

        if (props.price > 4.00) {
            result = (
                <Aux>
                  <div className='main-div'>
                    <h3>Your order</h3>
                    <p>A delicious burger with following ingredints:</p>
                    <ul className='ing'> 
                        {ingredintSummery}
                    </ul>
                    <h4>Total Price: {props.price.toFixed(2)}</h4>
                    <p>Continue to checkout ...</p>
                    
                    <ContactData 
                        ingredients={ingredintSummery}
                        price={props.price}
                        cansel={props.cansel}
                        order={props.continue}/>
                    </div>
                    
                </Aux> 
            )
        }
        
        return (
          <div>
                {result}
          </div>
        )

} ;

export default OrderSammery ;