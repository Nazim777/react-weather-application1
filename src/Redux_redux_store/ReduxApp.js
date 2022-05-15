import './App.css';
import Products from './React-router/Products';
import Userdetails from './React-router/Userdetails';
import { Routes,Route } from 'react-router-dom';
import MultipleProducts from './Redux_redux_store/MultipleProducts';
import SingleProduct from './Redux_redux_store/SingleProduct';
import Header from './Redux_redux_store/Header';
import Cart from './Redux_redux_store/Cart';

function App() {
  return (
   
    <div className="App">
      <Header/>


      <Routes>

        <Route path='/' exact= {true} element={ <MultipleProducts/>}/>
        <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
        <Route path='*' exact={true} element={ <MultipleProducts/>}/>
        <Route path='/cart' element={<Cart/>}/>

      
     </Routes>
     
    </div>
  );
}

export default App;
