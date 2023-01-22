import AppProvider from './context/AppProvider'
import ChildrenOne from './components/ChildrenOne'
import ChildrenTwo from './components/ChildrenTwo'
import './App.css'

const AppContext = createContext(null)

function App() {
  

  return (
    <AppProvider>
      <ChildrenOne />
      <ChildrenTwo />
    </AppProvider>
  )
}





export default App
