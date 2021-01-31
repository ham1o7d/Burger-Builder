import React from 'react' ;
import LogoLink from '../../../assest/burger-logo.png' ;
import './Logo.css' ;
 
const Logo = (props) => {

    return (
        <div className='logo' style={{height: props.height}}>
            <img src={LogoLink} alt='MyBurger'/>
        </div>
    )
}
export default Logo ;