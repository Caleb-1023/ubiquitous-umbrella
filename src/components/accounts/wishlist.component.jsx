/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react"
import axios from "../../api/axios"
import { Link, useNavigate } from "react-router-dom"
import Item from "../listings/item.component"

const STUDENT_WISHLIST = 'student/studentwishlist'

const Wishlist = () => {
    const navigate = useNavigate()

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const user = JSON.parse(localStorage.getItem('user'))


    const getDetails = async () => {
        setLoading(true)
        const token = JSON.parse(localStorage.getItem('user')).accessToken
        const response = await axios.get(STUDENT_WISHLIST, {headers: {Authorization: `Bearer ${token}`}})
        // console.log(response)
        setProducts(response.data.wishlist)
        setLoading(false)
    }

    useEffect(() => {
        if (user) {
            getDetails()
        } else {
            alert("You're not logged in!")
            navigate('/accounts/login') 
        }
    }, [])
  return (
    <div className="w-screen h-screen">
        <h1 className="heading-text capitalize text-center text-3xl mb-5">{`${user?.name}'s`} Wishlist</h1>
        {loading ? 
            <div className="w-full h-[50%] flex items-center justify-center">
                <svg width="50px" height="50px" className="animate-spin my-36" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle cx="7" cy="7" r="6" stroke="#000000" strokeOpacity=".1" strokeWidth="2"/><path fill="#6b21a8" fillOpacity="1" fillRule="nonzero" d="M7 0a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5V0z"/></g></svg>
            </div>
            :
            <>
                {products?.length > 0 ? 
                <div className="max-w-6xl m-auto grid grid-cols-4 gap-5">
                    <>
                        {products?.map((product, i) => {
                            return <Link key={i} to={`/products/${product[0].productSlug}`}><Item item={product[0]} /></Link>
                        })}
                    </>
                </div>
                :
                <div className="h-full flex items-center">
                    {/* <i className="fa-solid fa-empty-set fa-2xl"></i> */}
                    <p className="text-center w-full">
                        No Products Found
                    </p>
                </div>
                }
            </>
            }
    </div>
  )
}

export default Wishlist