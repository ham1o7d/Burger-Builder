import React from 'react' ;
import './NavigationItem.css' ;
import Link from 'react-router-dom' ;

const NavigationItem = (props) => {

    return (
        <li className='NavigationItem'>
            <a 
            href='/'
            className={props.active ? 'active' : ''}
            > {props.Link} </a>
        </li>
    )
};

export default NavigationItem ;