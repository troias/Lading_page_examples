import { type } from 'os'
import React, {useState} from 'react'

type ContextObj = {
    activeHandler: () => void;
    closeBackdrop: () => void;
    active: boolean;
} 

export const ContextStore = React.createContext<ContextObj>({
    activeHandler: () => {},
    closeBackdrop: () => {},
    active: false,
})

 const ContextStoreProvider = (props) => {

    const [active, setActive] = useState(false)

    const activeHandler = () => {
        setActive(prevState => !prevState)
    }

    const closeBackdrop = () => {
        setActive(false)
    }
  
     const defaultContextStore: ContextObj = {
        activeHandler,
        closeBackdrop,
        active,
     }

     

    return (
        <ContextStore.Provider value={defaultContextStore}>
            {props.children}
        </ContextStore.Provider>
    )
}

export default ContextStoreProvider