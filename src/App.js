import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './components/Nav'
import ItemList from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CartContextProvider from './components/CartContext'
import Cart from './components/Cart';



function App() {



  return (
    <CartContextProvider>
   

        <Router>
          <Nav />

          <Switch>

            <Route exact path='/'>
              <ItemList />
            </Route>
            <Route exact path='/categoria/:idCat' component={ItemList}/>
              {/*<ItemList greeting='buzos' />*/}





            <Route exact path='/detalle/:id' component={ItemDetailContainer} />


            <Route exact path='/cart' component={Cart}/>
      
          </Switch>

        </Router>
      
    </CartContextProvider>


  )
}

export default App;


