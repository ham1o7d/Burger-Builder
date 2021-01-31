import React from 'react' ;
import CheckoutSummery from '../../components/Order/CheckoutSummery/CheckoutSummery' ;
class Checkout extends React.Component {
    state= {
        ingredients: {
            meat: 1,
            cheese: 1,
            bacon: 1,
            salad: 1
        }
    }
    render () {
        return (
            <div>
                <CheckoutSummery ingredients={this.state.ingredients } /> 
            </div>
        )
    }
}
export default Checkout;
