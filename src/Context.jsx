import { createContext, useState } from "react";

export const Context = createContext({})


function ContextProvider({children}){

    const [selectedBlog,setSelectedBlog] = useState({})

    return(
        <>
        <Context.Provider  value={{selectedBlog,setSelectedBlog}}>
            {
                children
            }
        </Context.Provider>
        </>
    )
}

export default ContextProvider