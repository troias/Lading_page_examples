import classes from "./backdrop.module.css"
import {useContext} from 'react'
import {ContextStore} from '../../contextStore/contextStore'

const Backdrop = (props) => {
  const {active} = useContext(ContextStore)
    return(
      <div className={active && classes.backdrop}>
        {props.children}
      </div>
    )
  }
  export default Backdrop