
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route exact path="/" item={<ItemListContainer/>}/>
            <Route exact path="/category/:id" item={<ItemListContainer/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
