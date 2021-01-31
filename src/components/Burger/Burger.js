import React from 'react' 
import BurIng from './BurIng/BurIng' ;
import './Burger.css' ;
const Burger = (props) => {

    let transformIng = Object.keys(props.ingredients)
          .map(inKey => {
            return [...Array(props.ingredients[inKey])] .map ((_,i) => {
              return <BurIng key={inKey + i} type={inKey} />
            }) ;
          }) .reduce( (arr, el) => {
              return arr.concat(el) ;
          } , [])

        if (transformIng.length === 0) {
          transformIng = <p>Please, Start Adding Ingredients!</p>
        }
    return (
        <div className='Burger'>
          <BurIng type="bread-top" />
          {transformIng}
          <BurIng type="bread-bottom" />
        </div>
    ) ; 
}

export default Burger ;