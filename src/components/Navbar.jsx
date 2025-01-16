import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.jpg";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} />
        </div>

        <div className="links">

          <Link className="link" to="/">
            <h6>HOME</h6>
          </Link>
          <Link className="link" to="/?cat=art">
            <h6 className="nev">ART</h6>
          </Link>

          <Link className="link" to="/?cat=technology">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link className="link" to="/?cat=design">
            <h6>GAMING</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6 className="mar" >FOOD</h6>
          </Link>
          <span className="space">{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}><button className="btn">LOGOUT</button></span>
          ) : (
            <Link className="link" to="/login">
              <button className="btn">SIGN IN</button>
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              <button className="btn">WRITE</button>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
