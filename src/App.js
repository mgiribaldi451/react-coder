import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './components/Nav'
import ItemList from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <Router>
        <Nav />

        <Switch>

          <Route exact path='/'>
            <ItemList  />
          </Route>
          <Route path='/buzos/'>
            <ItemList greeting='buzos' />
          </Route>
          
          <Route path='/camisetas/'>
            <ItemList greeting='camisetas' />
          </Route>
          <Route   path='/camperas'>
              <ItemList greeting='camperas' />
          </Route>
          <Route   path='/categoria/:idCat' component={ItemList} />
              
          
          <Route   path='/detalle/:id' component={ItemDetailContainer} />
              
          
          <Route exact path='/cart'/> 
        </Switch>

      </Router>
    </>
  )
}

export default App;


