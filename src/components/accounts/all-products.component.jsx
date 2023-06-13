import { useEffect, useState } from "react"
import axios from "../../api/axios"
import { useNavigate } from "react-router-dom"

const GET_PRODUCTS = 'admin/allgoods'
const DELETE_PRODUCT = 'admin/deletegoods/'

const AllProducts = () => {
    const navigate = useNavigate()

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [reload, setReload] = useState(false)

    const getProducts = async () => {
        setLoading(true)
        const user = JSON.parse(localStorage.getItem('user'))
        if (user?.roles === 'admin') {
            const response = await axios.get(GET_PRODUCTS, {headers: {Authorization: `Bearer ${user.accessToken}`}})
            console.log(response)
            setProducts(response.data.products)
            setLoading(false)
        } else {
            navigate('/listings')
        }
    }

    const deleteProduct = async (product) => {
        // e.preventDefault()
        const user = JSON.parse(localStorage.getItem('user'))
        const response = await axios.delete(`${DELETE_PRODUCT}${product}`, {headers: {Authorization: `Bearer ${user.accessToken}`}})
        console.log(response)
        setReload(true)
    }

    useEffect(() => {
        getProducts()
    }, [reload])

  return (
    <div className="w-screen">
        <h1 className="heading-text text-center my-5 text-2xl">All Products</h1>
        <div className="w-full min-h-screen">
            {loading ? 
            <div className="w-full h-[50%] flex items-center justify-center">
                <svg width="50px" height="50px" className="animate-spin my-36" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle cx="7" cy="7" r="6" stroke="#000000" strokeOpacity=".1" strokeWidth="2"/><path fill="#6b21a8" fillOpacity="1" fillRule="nonzero" d="M7 0a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5V0z"/></g></svg>
            </div>
            :
            <>
                {products?.length > 0 ? 
                <table className="table-fixed w-full max-w-7xl m-auto text-center">
                    <thead className="">
                        <tr className="bg-slate-50">
                            <th>S/N</th>
                            <th className="p-3">Name</th>
                            <th className="p-3">Description</th>
                            <th className="p-3">Price</th>
                            <th className="p-3">Category</th>
                            <th className="p-3">Hall</th>
                            <th className="p-3">Contact Seller</th>
                            <th className="p-3">Delete Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.map((product, i) => {
                            return <tr key={i} className=" odd:bg-white even:bg-slate-50">
                                <td className="p-3">{i + 1}</td>
                                <td className="p-3 capitalize">{product.name}</td>
                                <td className="p-3 capitalize">{product.description}</td>
                                <td className="p-3 capitalize">₦{product.price}</td>
                                <td className="p-3">{product.category}</td>
                                <td className="p-3">{product.location}</td>
                                <td className="p-3 "><a href={`https://${product.contact}`} target="_blank" rel="noreferrer" className="p-2 bg-purple-800 text-white rounded">Contact</a></td>
                                <td><button className="p-2 bg-red-800 text-white rounded" onClick={() => {deleteProduct(product.productSlug)}}>Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
                :
                <div className="m-auto">
                    <p className="text-center">No Products Found</p>
                </div>
                }
            </>
            }
        </div>
    </div>
  )
}

export default AllProducts