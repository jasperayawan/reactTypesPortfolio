import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-gray-100 dark:text-gray-100 text-gray-800 min-h-screen flex flex-col justify-between ">
      <Header/>
      
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
