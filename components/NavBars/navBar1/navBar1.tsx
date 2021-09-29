import React from "react";
import classes from "./navBar1.module.css";
import Image from 'next/image'
import logo from '../../../public/search.svg'
const NavBar1 = () => {
  return (
    <header className={classes.navigation}>

      <div className={classes.header}>

        <ul>
          <h2>
            <span>Company name</span>
            <a href="#">
            </a>
          </h2>
          <form action="" className={classes.search}>
            <input type="text" placeholder="Search"/>
          </form>
          <li>Home</li>
          <li>Logo</li>


        </ul>

      </div>



    </header>
  );
};

export default NavBar1;