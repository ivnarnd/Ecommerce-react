
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRoutes,Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <BrowserRoutes>
        <NavBar/>
        <Routes>
            <Route exact path="/" item={<ItemListContainer/>}/>
            <Route exact path="/category/:id" item={<ItemListContainer/>}/>
        </Routes>
    </BrowserRoutes>
  );
}

export default App;
