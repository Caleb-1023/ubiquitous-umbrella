/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react"
import axios from "../../api/axios"
import { Link, useNavigate } from "react-router-dom"

const LOGIN_URL = '/student/login'

const Login = () => {
    const navigate = useNavigate('/')

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [errMsg, setErrMsg] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(LOGIN_URL, {
                email: email,
                password: password
            }, {
                headers: {"Content-Type": "application/json"}
            })
            // console.log(response)
            const accessToken = response?.data?.signature;
            const roles = "student"
            const name = response?.data?.student?.firstName;
            localStorage.setItem('user', JSON.stringify({ name, roles, accessToken }))
            navigate('/listings')
        } catch(err) {
            console.log(err)
            setErrMsg(err?.response?.data?.message)
        }
    }

    const checkLoggedIn = () => {
        const user = localStorage.getItem('user')
        if (user) {
            alert('Already Logged In')
            navigate('/listings')
        }
    }

    useEffect(() => {
        checkLoggedIn()
    }, [])

    return (
    <div className="w-screen h-[92vh] flex items-center justify-center">
        <div className="w-1/4 border-2 rounded-lg p-8">
            <h1 className="text-4xl heading-text text-[#0a1323] mb-2">Log In</h1>
            {errMsg ? 
            <div className="bg-red-200 rounded-lg p-5 my-3">
                <h3 className="text-red-700">{errMsg}</h3>
            </div>
            :
            <></>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email" className="block mb-2">School e-mail</label>
                    <input type="email" placeholder="E-mail address" onChange={(e) => {setEmail(e.target.value)}} className="border-2 outline-slate-300 px-3 py-2 w-full rounded-lg mb-3" />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2">Password</label>
                    <input type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}} className="border-2 outline-slate-300 px-3 py-2 w-full rounded-lg mb-3" />
                </div>
                <input type="submit" value="Log In" className="bg-[#111f39] hover:bg-[#0a1323] w-full text-white py-2 rounded-lg mb-2" />
            </form>
            <p className="text-gray-400 text-sm">Login in as <Link to={'/accounts/admin'} className="text-[#0a1323] hover:underline">Admin</Link></p>
            <p className="text-gray-400 text-sm">Don't have an account yet? <Link to={'/accounts/signup'} className="text-[#0a1323] hover:underline">Sign up instead.</Link></p>
        </div>
    </div>
    )
  }
  
  export default Login