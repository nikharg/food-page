import React from "react";
import { RestaurantOutlined, ShoppingCart } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom'

const Navbar = ({counter}) => {
  const navigate = useNavigate()
  return (
    <div className="navbar">
      <RestaurantOutlined />
      <h1>Food's Restaurant</h1>
      <div className="cart" onClick={()=>navigate('/checkout')}><ShoppingCart className="cart-icon"/>
      <div className="count">{counter}</div>
      </div>
    </div>
  );
};

export default Navbar;
