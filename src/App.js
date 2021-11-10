import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import ProductList from './Components/ProductList'
import AddProduct from './Components/AddProduct'
import {Switch, Route, BrowserRouter } from 'react-router-dom'
import Details from './Components/Details';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/Products" component={ProductList}/>
       <Route exact path="/Products/:id" component={Details}/>
       <Route exact path="/AddProduct" component={AddProduct}/>
     

     </Switch>

    </BrowserRouter>
    </div>
  );
}

export default App;
