import {createContext, useState } from "react"

export let UserContext = createContext();

export default function UserContextProvider(porps){

let [userlogin,setuserlogin]=useState(
    localStorage.getItem("userToken")? localStorage.getItem("userToken"):null
)

    return <UserContext.Provider value={{userlogin,setuserlogin}}>
        {porps.children}
    </UserContext.Provider>
}
