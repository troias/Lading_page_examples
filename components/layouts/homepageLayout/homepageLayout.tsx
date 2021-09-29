import React from 'react'
import classes from './homepageLayoutStyle.module.css'

 const HomepageLayout = (props) => {
    return (
        <div className={classes.content}>
           {props.children} 
        </div>
    )
}

export default HomepageLayout
