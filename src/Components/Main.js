
import {addToCart, removeToCart} from '../Redux/action'
import {useDispatch} from 'react-redux'
import Header from './Header';
function Main() {
  const dispatch =useDispatch();
  const product={
    name:'I phone',
    type:'mobile',
    price:10000,
    color:'red'
  }
  return (
    <div className="App">
      <Header/>
      <button onClick={()=>dispatch(addToCart(product))}>Add To Cart</button>
      {/* <button onClick={()=>dispatch(removeToCart(product))}>Remove From Cart</button> */}
      
    </div>
  );
}

export default Main;
