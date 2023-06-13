import { Outlet } from "react-router-dom"
// import Accounts from "./components/accounts"
import Footer from "./components/footer/footer.component"
// import Home from "./components/home"
// import Navbar from "./components/navbar/navbar.component"
// import Product from "./components/listings/product.component"


function App() {

  return (
    <div className="overflow-x-hidden">
      {/* <Navbar /> */}
      {/* <Home /> */}
      <Outlet />
      {/* <p>lorem5000</p> */}
      <Footer />
    </div>
  )
}

export default App
