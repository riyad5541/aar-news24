import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const {user, logout} = useContext(AuthContext) 
  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link tp="/career">Career</Link>
      </div>
      <div className="login flex gap-2 items-center">
        <div>
          <img src={userIcon} alt="" />
        </div>
        {
          user && user?.email ? <button onClick={logout} className="btn btn-neutral">Logout</button>:<Link to='/auth/login' className="btn btn-neutral">Login</Link>
        }
        
      </div>
    </div>
  );
};

export default Navbar;
