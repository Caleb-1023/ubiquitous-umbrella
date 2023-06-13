import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
// import useAuth from "../../hooks/useAuth"

const Navbar = () => {
    // const { auth } = useAuth()
    const [user, setUser] = useState()
    // const navigate = useNavigate()

    const handleLogout = (e) => {
        e.preventDefault()
        setUser();
        // setUsername("");
        // setPassword("");
        localStorage.clear();
        window.location.reload()
    }
    
    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
          const foundUser = JSON.parse(loggedInUser);
          setUser(foundUser);
        //   console.log(user)
        } 
        // else {
        //     navigate('/accounts/login')
        // }
      }, []);

    return (
      <div className="bg-[#ffffff] sticky top-0 w-screen">
        <div className="max-w-7xl w-full m-auto p-3 flex items-center justify-between font-bold text-[#00000080]">
            <div className="flex items-center justify-around space-x-3">
                <Link to={'/'}><img src="/cumart.png" alt="logo" className="w-14" /></Link>
                <ul className="flex items-center justify-around space-x-3">
                    <li><Link to={'/products'}>All Products</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                </ul>
                <a href="#" target="_blank" rel="noreferrer" className="text-purple-800 px-3 py-2 rounded border-[1px] border-purple-800 outline-none"><i className="fa-regular fa-comments"></i> Feedback</a>
            </div>

            {user ? <>
                <div className="flex items-center justify-around space-x-3">
                    {user?.roles === 'admin' ? 
                    <>
                        <Link to={'/all-students'} className="text-black">All Students</Link>
                        <Link to={'/all-products'} className="text-black">All Products</Link>
                        <p className="text-black">Admin</p>
                    </>
                    : 
                    <>
                        <Link to={'/wishlist'} className="text-black hover:underline">Wishlist</Link>
                        <Link to={'products/add-product'} className="text-black hover:underline"><i className="fa-solid fa-plus"></i> Add Product</Link>
                        <Link to={'account'} className="capitalize text-black hover:underline">{user.name}</Link>
                    </>
                    }
                    <button onClick={handleLogout} className="text-purple-800 border-purple-800 border-[1px] p-1 rounded">Log out</button>
                </div>
            </>
            :
            <div className="flex items-center justify-around space-x-3">
                <Link to={'accounts/login'} className="text-purple-800 border-purple-800 border-[1px] px-2 py-1 rounded">Log In</Link>
                <Link to={'accounts/signup'} className="text-white bg-purple-800 border-[1px] px-2 py-1 rounded">Sign Up</Link>
            </div>}
        </div>
      </div>
    )
  }
  
  export default Navbar