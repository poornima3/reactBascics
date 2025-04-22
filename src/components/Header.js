import { useState, useContext } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from "react-redux";

const Header = () => {

  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  
  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);

  // console.log(cartItems);

  return (
    <div className='header flex justify-between bg-pink-100 shadow-lg'>
      <div className='logo-container'>
        <img className='w-30' src={LOGO_URL} />
      </div>
      <div className='nav-items'>
        <ul className='flex p-4 m-4'>
          <li className='px-4'>Online Status: { onlineStatus ? "🟢" : "🔴" }</li>
          <li className='px-4'><Link to="/">Home</Link></li>
          <li className='px-4'><Link to="/about">About Us</Link></li>
          <li className='px-4'><Link to="/contact-us">Contact Us</Link></li>
          <li className='px-4'><Link to="/grocery">Grocery</Link></li>
          <li className='font-bold text-lg'><Link to="/cart">Cart ({cartItems.length } items)</Link></li>
          <button
            onClick={() => { btnName === "Login" ? setBtnName("Logout") : setBtnName("Login") }}
            className='login'>
            {btnName}
          </button>
          <li className='px-4'>{ loggedInUser }</li>
        </ul>
      </div>
    </div>
  )
}

export default Header;