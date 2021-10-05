import { type } from 'os'
import React, {useState} from 'react'


type ContextObj = {
    examples: any[];
    activeHandler: () => void;
    closeBackdrop: () => void;
    active: boolean;
} 

export const ContextStore = React.createContext<ContextObj>({
    examples: [],
    activeHandler: () => {},
    closeBackdrop: () => {},
    active: false,
})
const examplePages = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      author: '@bkristastucchio',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      author: '@rollelflex_graphy726',
    },
  ];

 const ContextStoreProvider = (props) => {
    const [examples, setExamples] = useState(examplePages)
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
        examples, 
        active,
     }

     

    return (
        <ContextStore.Provider value={defaultContextStore}>
            {props.children}
        </ContextStore.Provider>
    )
}

export default ContextStoreProvider