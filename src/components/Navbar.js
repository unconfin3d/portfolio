import "./Navbar.css";
import React from "react";
import { Link ,useLocation} from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
// import { CSSTransition, TransitionGroup } from "react-transition-group";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color, setColor]=useState(false);
  const handleColor =()=>{
    if(window.scrollY >=100){
      setColor(true);
    } else{
      setColor(false);
    }
  }

  window.addEventListener("scroll",handleColor)
  // const location = useLocation();


  return (
    <div className={color?"header header-bg":"header"}>
      <Link to="/">
        <h1> My Portfolio</h1>
      </Link>

      <ul className={click?"nav-menu active":"nav-menu"}>
      {/* <TransitionGroup component={null}>
      <CSSTransition key={location.key} classNames="slide" timeout={3000}> */}
        {/* <> */}
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {/* </> */}
        {/* </CSSTransition>
        </TransitionGroup> */}
      </ul>
      {console.log(click)}
      <div className="barStyle" onClick={handleClick}>
        {click==true ? (
          <FaTimes size={20} style={{ color: "#ffffff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#ffffff" }} />
        )}
        
      </div>
    </div>
  );
};

export default Navbar;
