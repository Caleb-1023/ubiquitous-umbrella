import { Link } from "react-router-dom"

const Categories = () => {
  return (
    <div className="w-screen">
        <div className="w-full max-w-6xl m-auto py-8">
            <h2 className="text-2xl font-bold mb-2">Browse by category</h2>
            <div className="flex items-center justify-between space-x-10">
                <Link to={'/listings/categories/shoes'} className="text-center border-[1px] rounded">
                    <img src="/category-graduation.png" alt="" className="rounded-t" />
                    <p className="p-3">Shoes</p>
                </Link>
                <Link to={'/listings/categories/clothing'} className="text-center border-[1px] rounded">
                    <img src="/category-furniture.png" alt="" className="rounded-t" />
                    <p className="p-3">Clothing</p>
                </Link>
                <Link to={'/listings/categories/accessories'} className="text-center border-[1px] rounded">
                    <img src="/category-school.png" alt="" className="rounded-t" />
                    <p className="p-3">Accessories</p>
                </Link>
                <Link to={'/listings/categories/food'} className="text-center border-[1px] rounded">
                    <img src="/category-electronics.png" alt="" className="rounded-t" />
                    <p className="p-3">Food</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Categories