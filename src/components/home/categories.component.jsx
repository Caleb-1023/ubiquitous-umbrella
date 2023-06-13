import { Link } from "react-router-dom"

const Categories = () => {
  return (
    <div className="w-screen">
        <div className="w-full max-w-6xl m-auto py-8">
            <h2 className="text-2xl font-bold mb-2">Browse by category</h2>
            <div className="grid grid-cols-4 gap-5 my-3">
                <Link to={'/products/categories/shoes'} className=" text-center border-gray-300 border-[1px] rounded">
                    <img src="/shoes.jpg" alt="" className="rounded-t h-3/4 object-cover" />
                    <p className="p-3 h-1/4">Shoes</p>
                </Link>
                <Link to={'/products/categories/clothing'} className=" text-center border-gray-300 border-[1px] rounded">
                    <img src="/clothing.jpg" alt="" className="rounded-t h-3/4 object-cover" />
                    <p className="p-3 h-1/4">Clothing</p>
                </Link>
                <Link to={'/products/categories/stationery'} className=" text-center border-gray-300 border-[1px] rounded">
                    <img src="/stationery.jpg" alt="" className="rounded-t h-3/4 object-cover" />
                    <p className="p-3 h-1/4">Stationery</p>
                </Link>
                <Link to={'/products/categories/food'} className=" text-center border-gray-300 border-[1px] rounded">
                    <img src="/food.jpg" alt="" className="rounded-t h-3/4 object-cover" />
                    <p className="p-3 h-1/4">Food</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Categories