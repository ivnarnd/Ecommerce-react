
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
            <Route exact path="/" element={<ItemListContainer greeting="Bienvenidos!"/>}/>
            <Route exact path="/category/:id" element={<ItemListContainer greeting="Bienvenidos!"/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
