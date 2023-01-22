import { AppContext } from "./AppContext"
import { useState } from "react"

export default function AppProvider({children}) {
  const [name, setName] = useState('Front Beginners')

  return  (
  <AppContext.Provider value={{name, setName}}>
    {children}
  </AppContext.Provider>
  )
}