import { useState } from 'react'
import axios from '../../api/axios'
import { FileUploader } from "react-drag-drop-files";
import { Link } from 'react-router-dom';

const UPLOAD_PRODUCT = 'product/createproduct'

const fileTypes = ["JPG", "PNG", "GIF"];

const AddProduct = () => {
    const [ name, setName ] = useState()
    const [ description, setDescription ] = useState()
    const [ price, setPrice ] = useState()
    const [ category, setCategory ] = useState()
    const [ image, setImage ] = useState()
    const [ location, setLocation ] = useState()
    const [loading, setLoading] = useState(false)
    const [added, setAdded] = useState(false)
    const [errMsg, setErrMsg] = useState()

    const token = JSON.parse(localStorage.getItem('user')).accessToken

    const handleChange = async (file) => {
        // console.log(file)
        // const formData = new FormData()
        // formData.append('image', file)
        // const response = await axios.post("http://165.232.123.217:8029/predict", formData ,{
            //     headers: {
        //       'Content-Type': 'multipart/form-data',
        //       "Access-Control-Allow-Origin": "*"
        //     }})
            // const response = await axios.get('165.232.123.217:8000/all_users')
            // console.log(response.data)
        setImage(file);
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setErrMsg(null)
        try {
            const formData = new FormData()
            formData.append('name', name)
            formData.append('description', description)
            formData.append('price', price)
            formData.append('image', image)
            formData.append('category', category)
            formData.append('location', location)
            // console.log(image)
            await axios.post(UPLOAD_PRODUCT, formData, {headers: {Authorization: `Bearer ${token}`, "Content-Type":"multipart/form-data", 'Access-Control-Allow-Origin': 'http://localhost:5173',}})
            // console.log(response)
            setLoading(false)
            setAdded(true)
        } catch(err) {
            setLoading(false)
            if (err) {
                setErrMsg('Try Again')
            }
        }
    }

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
        <div className='w-full h-[] max-w-2xl border border-gray-300 rounded-xl p-5 '>
            <h1 className='heading-text text-2xl border-b border-black'>Add New Product</h1>
            {loading ? 
            <div className="w-full h-[50%] flex items-center justify-center">
                <svg width="50px" height="50px" className="animate-spin my-36" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle cx="7" cy="7" r="6" stroke="#000000" strokeOpacity=".1" strokeWidth="2"/><path fill="#6b21a8" fillOpacity="1" fillRule="nonzero" d="M7 0a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5V0z"/></g></svg>
            </div>
            :
            <>{added ? 
            <div className='flex flex-col items-center justify-center my-4'>
                <i className="fa-solid fa-check fa-2xl text-6xl text-green-900 border-4 p-5 border-green-900 rounded-full"></i>
                <p className='text-4xl font-bold'>Product Added</p>
                <div className='flex items-center justify-center space-x-5'>
                    <Link to={'/products'} className='p-3 rounded-lg bg-[#16294d] hover:bg-[#082a6a] text-white'>Listings</Link>
                    <button onClick={() => {window.location.reload()}} className='p-3 rounded-lg bg-purple-800 hover:bg-purple-600 text-white'>Add Another Product</button>
                </div>
            </div>
            :
            <form onSubmit={handleSubmit} className='my-3'>
                {errMsg ? 
                <div className='p-3 bg-red-200 rounded-lg w-full'>
                    <p className='text-red-600'>{errMsg}</p>
                </div>
                :
                <></>}
                <div>
                    <label htmlFor="name" className="block mb-2">Product Name</label>
                    <input type="text" placeholder="Product Name" onChange={(e) => {setName(e.target.value)}} className="border-2 border-gray-400 outline-slate-500 px-3 py-2 w-full rounded-lg mb-3" />
                </div>
                <div>
                    <label htmlFor="description" className="block mb-2">Description</label>
                    <input type="text" placeholder="Description" onChange={(e) => {setDescription(e.target.value)}} className="border-2 border-gray-400 outline-slate-500 px-3 py-2 w-full rounded-lg mb-3" />
                </div>
                <div>
                    <label htmlFor="price" className="block mb-2">Price</label>
                    <input type="text" placeholder="Price" onChange={(e) => {setPrice(e.target.value)}} className="border-2 border-gray-400 outline-slate-500 px-3 py-2 w-full rounded-lg mb-3" />
                </div>
                <div>
                    <label htmlFor="category" className="block mb-2">Category</label>
                    {/* <input type="text" placeholder="Last Name" onChange={(e) => {setCategory(e.target.value)}} className="border-2 border-gray-400 outline-slate-500 px-3 py-2 w-full rounded-lg mb-3" /> */}
                    <select onChange={(e) => {setCategory(e.target.value)}} className="border-2 border-gray-400 outline-slate-500 px-3 py-2 w-full rounded-lg mb-3" >
                        <option value="" placeholder='Category'></option>
                        <option value="clothing">Clothing</option>
                        <option value="accessories">Accessories</option>
                        <option value="shoes">Shoes</option>
                        <option value="books">Books</option>
                        <option value="stationery">Stationery</option>
                        <option value="toiletries">Toiletries</option>
                        <option value="food">Food</option>
                        <option value="devices">Devices</option>
                    </select>
                </div>
                {/* <div>
                    <label htmlFor="category" className="block mb-2">Image</label>
                    <input type="file" name='image' accept="image/*" onChange={handleChange} className="border-2 border-gray-400 outline-slate-500 px-3 py-2 w-full rounded-lg mb-3" />
                </div> */}
                <FileUploader
                    multiple={false}
                    handleChange={handleChange}
                    name="image"
                    types={fileTypes}
                >
                    {/* <button className="bg-[#3838F3] hover:bg-[#000088] py-7 px-10 mb-8 flex items-center justify-center text-4xl font-bold text-white rounded-[20px]">
                        <svg className="me-4" width="50" height="47" viewBox="0 0 50 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.875 25.125H28.125V12.625H37.5L25 0.125L12.5 12.625H21.875V25.125ZM31.25 18.0938V22.9125L45.5594 28.25L25 35.9156L4.44063 28.25L18.75 22.9125V18.0938L0 25.125V37.625L25 47L50 37.625V25.125L31.25 18.0938Z" fill="white"/></svg>
                        Upload Image
                    </button>
                    <p className="text-[#606060] text-3xl font-medium">or drop a file</p> */}
                </FileUploader>
                <div>
                    <label htmlFor="location" className="block mb-2">Hall</label>
                    <select onChange={(e) => {setLocation(e.target.value)}} className="border-2 border-gray-400 outline-slate-500 px-3 py-2 w-full rounded-lg mb-3" >
                        <option value=""></option>
                        <option value="peter">Peter</option>
                        <option value="john">John</option>
                        <option value="paul">Paul</option>
                        <option value="joseph">Joseph</option>
                        <option value="daniel">Daniel</option>
                        <option value="esther">Esther</option>
                        <option value="mary">Mary</option>
                        <option value="deborah">Deborah</option>
                        <option value="lydia">Lydia</option>
                        <option value="dorcas">Dorcas</option>
                    </select>
                </div>
                <input type="submit" value="Add Product" className="bg-[#0c1423] hover:bg-[#14294c] w-full text-white py-2 rounded-lg mb-2" />
            </form>}
            </>
            }
        </div>
    </div>
  )
}

export default AddProduct