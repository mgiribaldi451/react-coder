import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './components/Nav'
import ItemList from './components/ItemListContainer'


function App(){

  return(
    <>
    
    <Nav />
    
    <ItemList greeting='hola soy ItemListContainer luego sera el catalogo' />
    </>
  )
}

export default App;


