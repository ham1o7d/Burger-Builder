
import React, { Component } from 'react';
import Layout from './components/Layout/Layout' ;
import BurgerBuilder from './contaniers/BurgerBuilder/BurgerBuilder';
import Checkout from './contaniers/Checkout/Checkout' ;
import {Route, Switch} from 'react-router-dom' ;
class App extends Component {
  state= {
    show: true
  }

  
  render () {
    
    return (
      <div className="App">  

       {/* {true && ( 5 === 5 ) ? <h1>Hello !</h1> : <h1>hi !</h1> } */}
        <Layout>
          <Switch>
            <Route path='checkout' component= {Checkout} />
            <Route path='/' exact component= {BurgerBuilder} />
          </Switch>
        </Layout>
        
      </div>
    );
}
}

export default App ;


