import React, { useContext } from "react";
import classes from "./layout1.module.css";
import NavBar1 from "../../NavBars/navBar1/navBar1";
import Footer1 from "../../footer/footer1";
import { ContextStore } from "../../../contextStore/contextStore";
import Backdrop from '../../backdrop/backdrop'

const Layout1 = (props) => {
    const { active } = useContext(ContextStore);

    console.log("active", active);

    return (

        <div className={classes.layout}>
         
           
                <NavBar1 />
        
           
           



            <main className={classes.content}>


                {props.children}
            </main>



            {/* <Footer1 /> */}

        </div>

    );
};

export default Layout1;
