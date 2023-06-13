/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react"
import axios from "../../api/axios"
import { Link, useNavigate } from "react-router-dom";

const SIGNUP_URL = 'student/signup';

const Signup = () => {
    const navigate = useNavigate()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [telegram, setTelegram] = useState('')
    const [hall, setHall] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post(SIGNUP_URL, {
                "firstName": firstName,
                "lastName": lastName,
                "email": email,
                "password": password,
                "telegramUserName": telegram,
                "hall": hall
            }, {
                headers: { "Access-Control-Allow-Origin": "*", }
            })
            // console.log(response)
            alert('Account Created')
            navigate('/accounts/login')
        } catch(err) {
            alert(err?.request.response)
        }
    }

    const checkLoggedIn = () => {
        const user = localStorage.getItem('user')
        if (user) {
            alert('Already Logged In')
            navigate('/products')
        }
    }

    useEffect(() => {
        checkLoggedIn()
    }, [])

  return (
    <div className="w-screen min-h-screen flex items-center justify-center">
        <div className="my-20 border-2 rounded-lg p-8">
            <h1 className="text-4xl heading-text text-[#0a1323] mb-2">Sign Up</h1>
            <div className="px-8 py-4 bg-[#d1ecf1] text-[#0c5460] rounded-lg">
                <ul className="list-disc m-auto text-sm">
                    <li>Your email must end in @stu.cu.edu.ng</li>
                    <li>Your password must contain at least 8 characters.</li>
                </ul>
            </div>
            <form onSubmit={handleSubmit} className="max-w-lg">
                <div>
                    <label htmlFor="firstname" className="block mb-2">First Name</label>
                    <input type="text" placeholder="First Name" onChange={(e) => {setFirstName(e.target.value)}} className="border-2 outline-slate-300 px-3 py-2 w-full rounded-lg mb-3" />
                </div>
                <div>
                    <label htmlFor="lastname" className="block mb-2">Last Name</label>
                    <input type="text" placeholder="Last Name" onChange={(e) => {setLastName(e.target.value)}} className="border-2 outline-slate-300 px-3 py-2 w-full rounded-lg mb-3" />
                </div>
                <div>
                    <label htmlFor="lastname" className="block mb-2">Telegram Username</label>
                    <input type="text" placeholder="Telegram username" onChange={(e) => {setTelegram(e.target.value)}} className="border-2 outline-slate-300 px-3 py-2 w-full rounded-lg mb-3" />
                </div>
                <div>
                    <label htmlFor="lastname" className="block mb-2">Hall</label>
                    <input type="text" placeholder="Hall" onChange={(e) => {setHall(e.target.value)}} className="border-2 outline-slate-300 px-3 py-2 w-full rounded-lg mb-3" />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2">School e-mail</label>
                    <input type="email" placeholder="E-mail address" onChange={(e) => {setEmail(e.target.value)}} className="border-2 outline-slate-300 px-3 py-2 w-full rounded-lg mb-3" />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2">Password</label>
                    <input type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}} className="border-2 outline-slate-300 px-3 py-2 w-full rounded-lg mb-3" />
                </div>
                <div className="px-5 py-4 my-2 bg-[#d1ecf1] text-[#0c5460] rounded-lg">
                    <p>By signing up, you agree to our Terms of Use. Basically, be nice to each other and don't sell live animals.</p>
                </div>
                <input type="submit" value="Sign Up" className="bg-[#16294d] hover:bg-[#0a1323] w-full text-white py-2 rounded-lg mb-2" />
            </form>
            <p className="text-gray-400 text-sm">Already have an account? <Link to={'/accounts/login'} className="text-[#0a1323] hover:underline">Log in instead.</Link></p>
        </div>
    </div>
  )
}

export default Signup