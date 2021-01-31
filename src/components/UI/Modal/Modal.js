import React from 'react' ;
import './Modal.css'
import Aux from '../../../hoc/Auxx' ;
import Backdrop from '../Backdrop/Backdrop' ;       
const Modal = (props) => (
    <Aux>
        
        <div className='Modal'
            style ={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0' ,
            }}   
            >
        {props.children}
</div>
<Backdrop show={props.show} close={props.close}/> 
    </Aux>
) ;

export default Modal ;
