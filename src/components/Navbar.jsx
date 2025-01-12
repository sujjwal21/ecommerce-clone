import React, { useContext, useState } from "react";
import { getAuth, signInWithPopup } from "firebase/auth";
import "./Navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import { ProductContext } from "../Context/ProductContext";
import { Link, useNavigate } from "react-router-dom";
import { provider,auth } from "../firebase";

function Navbar() {
  const { setCategory, cart, setCartShow, user, setUser } = useContext(ProductContext);
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  // Filtering the products based on the category
  const handleClick = (e) => {
    setCategory(e.target.dataset.id);
    setSelected(e.target.dataset.name);
    navigate("/");
  };

  // Firebase google OAuth login
  const handleLogin = () => {
    // const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log("rspome is",res)
        setUser(res)
      })
      .catch((err) => {
        console.log("firebase failed auth")
        console.log(err)
      });
  };

  return (
    <div className="navbar-container">
      <div className="left-nav">
        <h3 data-id="" data-name="" onClick={(e) => handleClick(e)}>
          Platzi Mart
        </h3>
        <p
          data-id=""
          onClick={(e) => handleClick(e)}
          data-name=""
          className={selected === "" ? "selected-tab" : null}
        >
          All
        </p>
        <p
          data-id="1"
          onClick={(e) => handleClick(e)}
          data-name="clothes"
          className={selected == "clothes" ? "selected-tab" : null}
        >
          Clothes
        </p>
        <p
          data-id="2"
          onClick={(e) => handleClick(e)}
          data-name="electronics"
          className={selected == "electronics" ? "selected-tab" : null}
        >
          Electronics
        </p>
        <p
          data-id="3"
          onClick={(e) => handleClick(e)}
          data-name="furnitures"
          className={selected == "furnitures" ? "selected-tab" : null}
        >
          Furnitures
        </p>
        <p
          data-id="5"
          onClick={(e) => handleClick(e)}
          data-name="toys"
          className={selected === "toys" ? "selected-tab" : null}
        >
          Toys
        </p>
      </div>
      <div className="right-nav">
        {user ? <p><img style={{width:20,height:20,marginRight:10,borderRadius:50}} src={user.photoURL} alt={"img"} />{user.email}</p> : <p onClick={handleLogin}>Login</p>}
        <p>
          <Link to={"/my-orders"} className="nav-link">
            My Orders
          </Link>
        </p>
        <p>
          <Link to={"/my-account"} className="nav-link">
            My Account
          </Link>
        </p>
        <FaShoppingCart
          style={{ marginLeft: "10px", cursor: "pointer", fontSize: "23px" }}
          onClick={() => setCartShow(true)}
        />
        <p>{cart.length}</p>
      </div>
    </div>
  );
}

export default Navbar;
