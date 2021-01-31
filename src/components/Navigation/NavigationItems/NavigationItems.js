import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem' ;
import './NavigationItems.css'
const NavigationItems = (props) => {
    return (
        <ul className='NavigationItems'>
            <NavigationItem Link='Burger Builder' active/>
            <NavigationItem Link='Checkout'  />
        </ul>
    )
}
export default NavigationItems ;