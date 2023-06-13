import { Link } from "react-router-dom"
import Category from "./category.component"

const Categories = () => {
    const categories = ['clothing', 'accessories', 'shoes', 'books', 'stationery', 'toiletries', 'food', ]


  return (
    <div className="w-screen min-h-screen max-w-7xl m-auto">
        <h1 className="heading-text text-4xl text-center">Category</h1>
        <div className="grid grid-cols-4 gap-10 my-10">
            {categories.map((c,i) => {
                return <Link to={`/products/categories/${c}`} key={i}><Category name={c} image={'/category-graduation.png'} /></Link>
            })}
        </div>
    </div>
  )
}

export default Categories