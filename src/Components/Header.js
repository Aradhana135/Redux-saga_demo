import React from 'react' 
import { useSelector } from 'react-redux/es/exports';
import aradhanaprofile from '../Images/aradhanaprofile.jpg';
import { cartData } from '../Redux/reducer';
const Header = () => {
    const result=useSelector((state)=>state.cartData);
    console.log("redux data",result)
  return (
    <div className='header'>
        <div className='cart_div'>
<span >{result.length}</span>
<img src="https://i.pinimg.com/736x/49/d5/97/49d5971381e9c13c2ec4c613f1c072df.jpg" alt="img1"/>
<br/>
{/* <img src={aradhanaprofile} alt="img2"/> */}
        </div>
    </div>
  )
}

export default Header