import { Route, Routes } from "react-router-dom"
import { Login } from "./pages/login"
import { MainLayout } from "./layout/main-layout"
import { Home } from "./pages/home"
import { Register } from "./pages/register/register"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/app" element ={<MainLayout/>}>
            <Route index element ={<Home/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
