import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Checkout from './checkout/Checkout';
import Account from './account/Account';
import Login from './login/Login';
import Menu from './shared/Menu';
import AdicionaProduto from './adicionaProduto/AdicionaProduto';

function App() {
  return (
    <div className="App">
<Menu>  </Menu>
      <Routes>
      <Route path={"/home"} element={<Home />}></Route>
        <Route path={"/login"} element={<Login />}></Route>
      <Route path={"/checkout"} element={<Checkout />}></Route>
      <Route path={"/account"} element={<Account />}></Route>
       <Route path={"/adiciona"} element={<AdicionaProduto />}></Route>
      </Routes>
    
    </div>
 
  );
}

export default App;
