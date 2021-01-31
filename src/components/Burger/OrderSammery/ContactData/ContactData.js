import React from 'react';
import './ContactData.css' ;
import axios from '../../../../axios-orders' ;
import SpinnerLoader from '../../../UI/spinnerLoader/spinnerLoader';
class ContactData extends React.Component {
    state = {
        customerData: null,
        test: 'test',
        loading: false,
        loading2: false,
        purchasing: false,
    }
    customerData= {
        name: '',
        email: '',
        address: {
        street: '',
        postalCode: ''
        }
    }

    orderedHandler = () => {
        alert('continue !') ;


        this.setState( {loading: true} )

         const order = {
             ingredients: this.state.ingredients,
             price: this.state.totalPrice,
             customerData: this.customerData
         }
 
         axios.post('/orders.json', order)
         .then(response => { 
             console.log(response);
             this.setState( {loading: false, loading2: true, purchasing: false} ) ;
            })
         .catch(error => {
             console.error(error);
             this.setState( {loading: false, purchasing: false} ) ;

         }) ;
     }
       
     handleChange = (event) => {

        
        switch(event.target.name) {
            case 'name': this.customerData.name= event.target.value;
            break;
            case 'email': this.customerData.email= event.target.value;
            break;
            case 'street': this.customerData.address.street= event.target.value;
            break;
            case 'postal': this.customerData.address.postalCode= event.target.value;
            break;
        }
        console.log(this.customerData) ;
        console.log('*******************************')
        // this.setState({customerData: customerData}) ;
        // console.log('----',this.state.customerData) ;
      }

    render () {
        let form = (
            <div className='ContactData' >
                <h3>Enter Your Contact Data</h3> 
                <form onSubmit={() => alert('Submited!')}>
                    <div className='inputs'>
                        <input required type='text' name='name' placeholder='Your Name' onChange={this.handleChange} /> 
                        <input required type='email' name='email' placeholder='Your Mail' onChange={this.handleChange} /> 
                        <input required type='text' name='street' placeholder='Street' onChange={this.handleChange} /> 
                        <input required type='text' name='postal' placeholder='Postal Code' onChange={this.handleChange}/> 
                    </div>
                    <div className='buts'>
                        <button className='Cansle' onClick={this.props.cansel}>CANCEL</button>
                        <button type='submit' className='order' onClick={this.orderedHandler}>ORDER</button>
                    </div>
                    </form>
                   
                
            </div>
        )
        if(this.state.loading) {
            form= <SpinnerLoader />
        }
        if(this.state.loading2){
            form= (
                <div>
                  <h2>Ordered, Thank you</h2>
                  <button onClick={ () => { this.setState({loading2: false})}}>New Order</button>

                  <button onClick={this.props.cansel}>Cansel</button>
                </div>
            )
        } 
        return (
           <div>
                {form}
           </div>
        )
    }

} ;

export default ContactData; 