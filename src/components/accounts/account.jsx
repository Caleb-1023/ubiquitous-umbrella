import { useEffect, useState } from "react"
import axios from "../../api/axios"
import { Link } from "react-router-dom"

const GET_STUDENT = 'student/studentinfo'

const Account = () => {
    const token = JSON.parse(localStorage.getItem('user')).accessToken
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)

    const getDetails = async () => {
        setLoading(true)
        const response = await axios.get(GET_STUDENT, {headers: {Authorization: `Bearer ${token}`}})
        console.log(response)
        setUser(response.data.student[0])
        setLoading(false)
    }

    useEffect(() => {
        getDetails()
    }, [])

  return (
    <div className="w-screen min-h-screen">
        {loading ? 
        <>
            <div className="w-full h-[50%] flex items-center justify-center">
                <svg width="50px" height="50px" className="animate-spin my-36" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle cx="7" cy="7" r="6" stroke="#000000" strokeOpacity=".1" strokeWidth="2"/><path fill="#6b21a8" fillOpacity="1" fillRule="nonzero" d="M7 0a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5V0z"/></g></svg>
            </div></>
        :
        <div className="my-5 max-w-xl m-auto">
            <h1 className="heading-text text-center text-3xl">Student Account</h1>
            <h2>Name:</h2>
            <h2 className="capitalize font-bold">{user?.firstName} {user?.lastName}</h2>
            <h2>Email:</h2>
            <h2 className="font-bold">{user?.email}</h2>
            <h2>Hall:</h2>
            <h2 className="capitalize font-bold">{user?.hall}</h2>
            <h2>Telegram:</h2>
            <h2><a href={`https://${user?.telegramUserName}`} target="_blank" rel="noreferrer" className="text-blue-400 underline">{user?.telegramUserName}</a></h2>
            <div className="my-3">
                <Link to={'/wishlist'} className="p-2 rounded text-white bg-purple-800 text-center">Wishlist</Link>
            </div>
        </div>}

    </div>
  )
}

export default Account