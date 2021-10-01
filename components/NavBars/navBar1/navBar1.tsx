import React, { useContext } from "react";
import classes from "./navBar1.module.css";
import Link from "next/link"
import { MdMenu } from "react-icons/md";
import { ContextStore } from "../../../contextStore/contextStore";
import Backdrop from '../../backdrop/backdrop';


const NavBar1 = () => {
  const {activeHandler, active} = useContext(ContextStore)
  

  const mobileMenuClickHandler = () => {

    activeHandler()
  }

  return (
    <header className={classes.navigation}>

      <div className={classes.desktopMenu}>
        <Link href="/">
          <h2>
            Logo
          </h2>
        </Link>

      </div>
      <div className={classes.mobileMenu}>


        <Link href="/"   >
          <div onClick={mobileMenuClickHandler} >
            <MdMenu className={classes.hamburger} />
            
            {active && <ul className={classes.mobileMenuDropdown} >
           
              
                <Link href="#">Home</Link>
            
            
                <Link href="#">About</Link>
             
            
                <Link href="#">Contact</Link>
           

            </ul>
            }
          </div>
        </Link>
      </div>



      <ul className={classes.navigationLinks}>

        <li>
          <Link href="#" >Home</Link>
        </li>
        <li>
          <Link href="#">About</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li>




      </ul>





    </header>
  );
};

export default NavBar1;
