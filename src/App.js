import React ,{Component} from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch , Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Detail from './Components/Detail';
import Productlist from './Components/Productlist';
import Product from './Components/Product';
import Default from './Components/Default';
import Cart from './Components/Cart';
import Model from './Components/Model';

class App extends Component {
 

  render() {
    return (
      <React.Fragment>
     <Navbar/>
      <Switch>
     <Route exact path  ="/" component = {Productlist}></Route>
     <Route path  ="/detail" component = {Detail}></Route>
     <Route path  ="/product" component = {Product}></Route>
     <Route path  ="/cart" component = {Cart}></Route>
     <Route  component = {Default}></Route>

      </Switch>
     <Model/>
        
      </React.Fragment>

    );
  }
}
export default App;