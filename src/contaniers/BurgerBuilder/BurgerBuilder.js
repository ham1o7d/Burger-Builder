
import React from 'react' ;
import Auxx from '../../hoc/Auxx' ;
import Burger from '../../components/Burger/Burger'
import BuildControl from '../../components/Burger/BuildControl/BuildControl'
import Modal from '../../components/UI/Modal/Modal' ;
import OrderSummery from '../../components/Burger/OrderSammery/OrderSammery' ;
import axios from '../../axios-orders' ;
import SpinnerLoader from '../../components/UI/spinnerLoader/spinnerLoader'
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler' ;

    const Ingredients_Prices = {
            salad: 0.5,
            bacon: 0.3,
            cheese: 0.7,
            meat: 1.5
    }

class BurgerBuilder extends React.Component {
    
    state = {
        ingredients: {
            bacon: 0,
            cheese:0,
            meat: 0,
            salad: 0
        },
        // ingredients: null,
        totalPrice: 4,
        purchasing: false,
        loading: false,
        error: true
    }
    // componentDidMount(){
    //     axios.get('https://react-my-burger-60c85-default-rtdb.firebaseio.com/ingredients.json')
    //     .then(response => {
    //         this.setState({ingredients: response.data});
    //     }).catch(error => {
    //         this.setState({error: true})
    //     })
    // }
    addIngredientHandler = (type) => {
         //// ingredients update
        const oldCount = this.state.ingredients[type] ;
        const updateCount = oldCount + 1 ;
        const updateIngredient = {
            ...this.state.ingredients 
        } ;
        updateIngredient[type] = updateCount ;

        /// preices update

        const priceAddition = Ingredients_Prices[type] ;
        const oldPrice = this.state.totalPrice ;
        const updatePrice = oldPrice + priceAddition ;

        this.setState({
            ingredients: updateIngredient ,
            totalPrice: updatePrice
        }) ;
    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type] ;
        if(oldCount <=0) {
           return ;
        }
        const updateCount = oldCount - 1 ;
        const updateIngredient = {
            ...this.state.ingredients 
        } ;
        updateIngredient[type] = updateCount ;

        /// preices update

        const priceAddition = Ingredients_Prices[type] ;
        const oldPrice = this.state.totalPrice ;
        const updatePrice = oldPrice - priceAddition ;

        this.setState({
            ingredients: updateIngredient ,
            totalPrice: updatePrice
        }) ;
    }

    purchasingHandler = () => {
         this.setState({purchasing: !this.state.purchasing})
    }
//     purchasingHandler = () => {
//         this.setState({purchasing: true})
//    }

    continueHandler = () => {
       alert('continue !') ;

        this.setState( {loading: true} )
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,

            customerData: {
                name: 'Someone ',
                address: {
                    street: 'First Street',
                    zipCode: '41351',
                    country: 'Palestine'
                } ,
                email: 'Ag@ttt.com' ,
            },
            deliveryMethod: 'fastest' 
        }

        axios.post('/orders.json', order)
        .then(response => { 
            console.log(response)
            this.setState( {loading: false, purchasing: false} ) ;
        })
        .catch(error => {
            console.error(error);
            this.setState( {loading: false, purchasing: false} ) ;
        }) ;
    }
    render () {

        const disabledInfo = {
            ...this.state.ingredients
        }

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] == 0 ;
        }

        let orderSammery = null;
        let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <SpinnerLoader /> ;

        if(this.state.ingredients) {
            burger= (
                <Auxx>
                    <Burger ingredients={this.state.ingredients } />
                    <BuildControl 
                        addIng={this.addIngredientHandler} 
                        removeIng={this.removeIngredientHandler}
                        price={this.state.totalPrice}
                        disabled={disabledInfo}
                        ordered= {this.purchasingHandler}
                        />
                </Auxx>
            )
            orderSammery = <OrderSummery 
            ingredients ={this.state.ingredients} 
            cansel ={this.purchasingHandler}
            continue= {this.continueHandler}
            price={this.state.totalPrice}
            disabled={disabledInfo}
        />
        } ;

        
        if(this.state.loading) {
            orderSammery= <SpinnerLoader />
        }

        return (
            <Auxx>
                <Modal show={this.state.purchasing} close={this.purchasingHandler}>
                     {orderSammery}
                </Modal>
                {burger}
            </Auxx>
        )
    }
}
export default WithErrorHandler(BurgerBuilder, axios) ;