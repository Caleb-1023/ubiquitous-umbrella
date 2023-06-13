/* eslint-disable react/prop-types */

import { Link, useParams } from "react-router-dom";
import Item from "./item.component";
import { useEffect, useState } from "react";
import axios from "../../api/axios";
import Search from "./search.component";

const SEARCH_PRODUCTS = 'product/search/'

const SearchListings = () => {
    const { query } = useParams();

    const [products, setProducts] = useState([]) 
    const [loading, setLoading] = useState(false)
    // const [section, setSection] = useState('all')

    const categories = ['clothing', 'accessories', 'shoes', 'books', 'stationery', 'toiletries', 'food', ]
    const halls = ['peter', 'john', 'paul', 'joseph', 'daniel', 'esther', 'mary', 'deborah', 'lydia', 'dorcas']
    
    // const changeSection = () => {
    //     setSection(hall || category)
    // }

    const getProducts = async () => {
        setLoading(true)
        const response = await axios.get(`${SEARCH_PRODUCTS}${query}`, {headers: {"Content-Type": "application/json"}} )
        console.log(response)
        setProducts(response.data.name)
        setLoading(false)
    }
    // const getProductsByCategory = async () => {
    //     setLoading(true)
    //     const response = await axios.get(`${GET_PRODUCTS_CATEGORY}${category}`)
    //     console.log(response)
    //     setProducts(response.data.category)
    //     setLoading(false)
    // }
    // const getProductsByLocation = async () => {
    //     setLoading(true)
    //     const response = await axios.get(`${GET_PRODUCTS_LOCATION}${hall}`)
    //     console.log(response)
    //     setProducts(response.data.category)
    //     setLoading(false)
    // }

    useEffect(() => {
        // if (category) {
        //     getProductsByCategory()
        // } else if (hall) {
        //     getProductsByLocation()
        // } else {
            getProducts()
        // }
    }, [query])

  return (
    <div>
        <div>
            <h1 className="heading-text text-center text-4xl capitalize">Products matching `{query}`</h1>
            <p></p>
            <Search />
            {/* categories */}
            <div className="flex flex-wrap items-center justify-center space-x-5 my-5">
                {categories.map((c, i) => {
                    return <Link key={i} to={`/listings/categories/${c}`} className={`border-[1px] border-gray-700 inline-block w-36 text-center capitalize py-2 rounded`}>{c}</Link>
                })}
            </div>
            <div className="flex flex-wrap items-center justify-center space-x-5 my-5">
                {halls.map((h, i) => {
                    return <Link key={i} to={`/listings/halls/${h}`} className={`border-[1px] border-gray-700 inline-block w-28 text-center capitalize py-2 rounded`}>{h}</Link>
                })}
            </div>
            {/* items */}
            <div className="w-screen min-h-screen">
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
                            return <Link key={i} to={`/listings/${product.productSlug}`}><Item item={product} /></Link>
                        })}
                    </>
                </div>
                :
                <div>
                    {/* <i className="fa-solid fa-empty-set fa-2xl"></i> */}
                    <p className="text-center w-full">
                        No Products Found
                    </p>
                </div>
                }
            </>
            }
            </div>
        </div>
    </div>
  )
}

export default SearchListings