import React, {useState} from 'react'


export const ContextStore = React.createContext({
    activeHandler: () => {},
    active: false
})

 const ContextStoreProvider = (props) => {

    const [active, setActive] = useState(false)

    const menuActiveHandler = () => {
        setActive(prevState => !prevState)
    }

     const defaultContextStore = {
        activeHandler: menuActiveHandler, 
        active: active,
     }

    return (
        <ContextStore.Provider value={defaultContextStore}>
            {props.children}
        </ContextStore.Provider>
    )
}

export default ContextStoreProvider