
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {CartProvider}from './context/CartContext';
function App() {
  return (
    <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
              <Route exact path="/" element={<ItemListContainer greeting="Bienvenidos!"/>}/>
              <Route exact path="/category/:id" element={<ItemListContainer greeting="Bienvenidos!"/>}/>
              <Route exact path="/item/:itemId" element={<ItemDetailContainer/>}/>
          </Routes>
        </CartProvider>        
    </BrowserRouter>
  );
}

export default App;
