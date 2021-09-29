import React from 'react'
import classes from './layout1.module.css'
import NavBar1 from "../../NavBars/navBar1/navBar1"

const Layout1 = (props) => {
    return (
        <div className={classes.layout}>
            <NavBar1 />
            <main className={classes.content}>
                {props.children}
            </main>

        </div>
    )
}

export default Layout1