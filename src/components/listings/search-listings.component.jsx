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

    const categories = ['clothing', 'accessories', 'shoes', 'books', 'stationery', 'toiletries', 'food', 'devices' ]
    const halls = ['peter', 'john', 'paul', 'joseph', 'daniel', 'esther', 'mary', 'deborah', 'lydia', 'dorcas']
    
    // const changeSection = () => {
    //     setSection(hall || category)
    // }

    const [openHall, setOpenHall] = useState(false);
    const [openCategory, setOpenCategory] = useState(false);

    const handleOpenHall = () => {
        setOpenHall(!openHall);
        if (openCategory) {
            setOpenCategory(!openCategory)
        }
    };
    const handleOpenCategory = () => {
        setOpenCategory(!openCategory);
        if (openHall) {
            setOpenHall(!openHall)
        }
    };

    const getProducts = async () => {
        setLoading(true)
        const response = await axios.get(`${SEARCH_PRODUCTS}${query}`, {headers: {"Content-Type": "application/json"}} )
        // console.log(response)
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
        <div className="w-screen">
            <h1 className="heading-text text-center text-4xl">Products matching `{query}`</h1>
            <p></p>
            <Search />
            {/* categories */}
            {/* <div className="flex flex-wrap items-center justify-center space-x-5 my-5">
                {categories.map((c, i) => {
                    return <Link key={i} to={`/products/categories/${c}`} className={`border-[1px] border-gray-700 inline-block w-36 text-center capitalize py-2 rounded`}>{c}</Link>
                })}
            </div>
            <div className="flex flex-wrap items-center justify-center space-x-5 my-5">
                {halls.map((h, i) => {
                    return <Link key={i} to={`/products/halls/${h}`} className={`border-[1px] border-gray-700 inline-block w-28 text-center capitalize py-2 rounded`}>{h}</Link>
                })}
            </div> */}
            {/* <div className="w-full flex items-center justify-center">
                <div className="grid grid-cols-4">
                    {categories.map((c, i) => {
                        return <Link key={i} to={`/products/categories/${c}`} className={`border-[1px] border-gray-700 inline-block w-28 text-center capitalize m-3 py-2 rounded`}>{c}</Link>
                    })}
                </div>
                <div className="grid grid-cols-5">
                    {halls.map((h, i) => {
                        return <Link key={i} to={`/products/halls/${h}`} className={`border-[1px] border-gray-700 inline-block w-28 text-center capitalize m-3 py-2 rounded`}>{h}</Link>
                    })}
                </div>
            </div> */}
            {/* items */}
            <div className="w-screen min-h-screen">
            {loading ? 
            <div className="w-full h-[50%] flex items-center justify-center">
                <svg width="50px" height="50px" className="animate-spin my-36" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle cx="7" cy="7" r="6" stroke="#000000" strokeOpacity=".1" strokeWidth="2"/><path fill="#6b21a8" fillOpacity="1" fillRule="nonzero" d="M7 0a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5V0z"/></g></svg>
            </div>
            :
            <>
                <div className="w-full flex items-center justify-center">
                    {/* <div className="grid grid-cols-4">
                        {categories.map((c, i) => {
                            return <Link key={i} to={`/products/categories/${c}`} className={`border-[1px] border-gray-700 inline-block w-28 text-center capitalize m-3 py-2 rounded`}>{c}</Link>
                        })}
                    </div> */}
                    <div className="relative">
                        <button onClick={handleOpenCategory} className="p-3">Categories <i className="fa-solid fa-chevron-down fa-2xs"></i></button>
                        {openCategory ? (
                            <ul className="absolute rounded bottom-[-1] border bg-white text-black">
                                {categories.map((c, i) => {
                                return <Link key={i} to={`/products/categories/${c}`}><li className="capitalize py-1 px-4 hover:bg-gray-200">{c}</li></Link>
                                })}
                            </ul>
                        ) : null}
                    </div>
                    <div className="relative">
                        <button onClick={handleOpenHall} className="p-3">Hall <i className="fa-solid fa-chevron-down fa-2xs"></i></button>
                        {openHall ? (
                            <ul className="absolute rounded bottom-[-1] border bg-white text-black">
                                {halls.map((h, i) => {
                                return <Link key={i} to={`/products/halls/${h}`}><li className="capitalize py-1 px-4 hover:bg-gray-200">{h}</li></Link>
                                })}
                            </ul>
                        ) : null}
                    </div>
                    {/* <div className="grid grid-cols-5">
                        {halls.map((h, i) => {
                            return <Link key={i} to={`/products/halls/${h}`} className={`border-[1px] border-gray-700 inline-block w-28 text-center capitalize m-3 py-2 rounded`}>{h}</Link>
                        })}
                    </div> */}
                </div>
                {products?.length > 0 ? 
                <div className="max-w-6xl mx-auto my-10 grid grid-cols-4 gap-5">
                    <>
                        {products?.map((product, i) => {
                            return <Link key={i} to={`/products/${product.productSlug}`}><Item item={product} /></Link>
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