/* eslint-disable react/prop-types */

import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "../../api/axios"

const GET_PRODUCT = 'product/getsingleproduct/'
const DELETE_PRODUCT = 'product/delete/'
// const GET_WISHLIST = 'student/studentwishlist'

const Product = () => {
    const { productSlug } = useParams()

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)
    const [owner, setOwner] = useState(false)
    const [deleted, setDeleted] = useState(false)

    const deleteProduct = async () => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user) {
            if (user?.roles === 'student') {
                try {
                    const response = await axios.delete(`${DELETE_PRODUCT}${productSlug}`, {headers: {Authorization: `Bearer ${user.accessToken}`}} )
                    console.log(response)
                    setDeleted(true)
                } catch (err) {
                    console.log(err)
                }
            }
        } else {
            alert("You're not logged in")
        }
    }
    
    const getProduct = async () => {
        const user = JSON.parse(localStorage.getItem('user'))
        setLoading(true)
        const response = await axios.get(`${GET_PRODUCT}${productSlug}`)
        // console.log(response)
        setProduct(response.data.product)
        setLoading(false)
        if (user.contact == response.data?.product?.contact) {
            setOwner(true)
            // console.log("User's product")
        } else {
            setOwner(false)
        }
    }

    useEffect(() => {
        getProduct()
    }, [])

  return (
    <div className="w-screen min-h-screen">
        <div className="w-full max-w-4xl m-auto my-4">
            {loading ? 
            <>
                <div className="w-full h-[50%] flex items-center justify-center">
                    <svg width="50px" height="50px" className="animate-spin my-36" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle cx="7" cy="7" r="6" stroke="#000000" strokeOpacity=".1" strokeWidth="2"/><path fill="#6b21a8" fillOpacity="1" fillRule="nonzero" d="M7 0a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5V0z"/></g></svg>
                </div>
            </>
            :
            <>
                {deleted ? 
                <>
                    <div className="w-full h-full m-auto text-center">
                        <i className="fa-solid fa-check fa-2xl text-6xl text-green-900 border-4 p-3 border-green-900 rounded-full"></i>
                        <h1 className="text-3xl">Deleted</h1>
                        <Link to={'/products'} className="bg-[#16294d] hover:bg-[#0a1323] inline-block p-3 text-white rounded">Listings</Link>
                    </div>
                </>
                :
                <>
                    <div className="mb-10"><Link to={'products'} className="hover:underline">All Products</Link> / <Link to={`/products/categories/${product?.category}`} className="capitalize hover:underline">{product?.category}</Link> / <span className="text-gray-400">{product?.name}</span></div>
                    <div className="w-full flex items-start justify-between space-x-10">
                        <div className="w-1/2 capitalize">
                            <h1 className="heading-text text-4xl mb-2">{product?.name}</h1>
                            {/* <h3 className="text-gray-500">{seller}</h3> */}
                            <h2 className="font-bold">₦{product?.price}</h2>
                            <h2 className="font-bold">{product?.location}</h2>
                            <h2 className="font-bold">{product?.category}</h2>
                            <p>{product?.description}</p>
                            <a href={`https://${product?.contact}`} target="_blank" rel="noreferrer" className="bg-[#16294d] hover:bg-[#0a1323] block w-full text-white text-center py-2 rounded mt-4 p-3">Contact Seller</a>
                            {owner ? 
                            <>
                            <Link to={`/products/edit-product/${productSlug}`} className="bg-green-800 hover:bg-green-600 block w-full text-white text-center py-2 rounded mt-4 p-3">Edit product</Link> 
                            <button onClick={deleteProduct} className="bg-red-800 hover:bg-red-600 block w-full text-white text-center py-2 rounded mt-4 p-3">Delete Product</button> 
                            </>
                            : 
                            <></>}
                        </div>
                        <div className="w-1/2">
                            <img src={product?.image} alt="" className=" w-full object-cover rounded-xl" />
                        </div>
                    </div>
                </>
                }
            </>
            }
        </div>
    </div>
  )
}

export default Product