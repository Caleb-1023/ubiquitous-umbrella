import { Link } from "react-router-dom"
import Hall from "./hall.component"

const Halls = () => {
    const halls = ['peter', 'john', 'paul', 'joseph', 'daniel', 'esther', 'mary', 'deborah', 'lydia', 'dorcas']

  return (
    <div className="w-screen min-h-screen max-w-7xl m-auto">
        <h1 className="heading-text text-4xl text-center">Category</h1>
        <div className="grid grid-cols-4 gap-10 my-10">
            {halls.map((h,i) => {
                return <Link to={`/listings/halls/${h}`} key={i}><Hall name={h} image={'/category-graduation.png'} /></Link>
            })}
        </div>
    </div>
  )
}

export default Halls