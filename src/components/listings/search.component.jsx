import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Search = () => {
    const navigate = useNavigate()

    const [query, setQuery] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        navigate(`/search/${query}`)
    }

  return (
    <div>
        <form onSubmit={handleSubmit} className="flex items-center justify-center my-5">
            <input type="text" placeholder="Search" onChange={(e) => {setQuery(e.target.value)}} className="border-[1px] border-e-0 rounded-s border-gray-700 p-2 outline-none" />
            <button type="submit" className="border-[1px] rounded-e border-gray-700 px-4 py-2"><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
    </div>
  )
}

export default Search