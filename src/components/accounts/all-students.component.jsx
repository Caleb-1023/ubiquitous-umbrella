import { useEffect, useState } from "react"
import axios from "../../api/axios"
import { useNavigate } from "react-router-dom"

const GET_STUDENTS = 'admin/loadallstudents'

const AllStudents = () => {
    const navigate = useNavigate()

    const [students, setStudents] = useState([])
    const [loading, setLoading] = useState(false)

    const getStudents = async () => {
        setLoading(true)
        const user = JSON.parse(localStorage.getItem('user'))
        if (user?.roles === 'admin') {
            const response = await axios.get(GET_STUDENTS, {headers: {Authorization: `Bearer ${user.accessToken}`}})
            console.log(response)
            setStudents(response.data.students)
            setLoading(false)
        } else {
            navigate('/listings')
        }
    }

    useEffect(() => {
        getStudents()
    }, [])

  return (
    <div className="w-screen">
        <h1 className="heading-text text-center my-5 text-2xl">All Students</h1>
        <div className="w-full min-h-screen">
            {loading ? 
            <div className="w-full h-[50%] flex items-center justify-center">
                <svg width="50px" height="50px" className="animate-spin my-36" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle cx="7" cy="7" r="6" stroke="#000000" strokeOpacity=".1" strokeWidth="2"/><path fill="#6b21a8" fillOpacity="1" fillRule="nonzero" d="M7 0a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5V0z"/></g></svg>
            </div>
            :
            <table className="table-fixed w-full max-w-7xl m-auto text-center">
                <thead className="">
                    <tr className="bg-slate-50">
                        <th>S/N</th>
                        <th className="p-3">First Name</th>
                        <th className="p-3">Last Name</th>
                        <th className="p-3">Hall</th>
                        <th className="p-3">Email</th>
                        <th className="p-3">Contacts</th>
                    </tr>
                </thead>
                <tbody>
                    {students?.map((student, i) => {
                        return <tr key={i} className=" odd:bg-white even:bg-slate-50">
                            <td className="p-3">{i + 1}</td>
                            <td className="p-3 capitalize">{student.firstName}</td>
                            <td className="p-3 capitalize">{student.lastName}</td>
                            <td className="p-3 capitalize">{student.hall}</td>
                            <td className="p-3">{student.email}</td>
                            <td className="p-3 "><a href={`https://${student.telegramUserName}`} target="_blank" rel="noreferrer" className="p-2 bg-purple-800 text-white rounded">Contact</a></td>
                        </tr>
                    })}
                </tbody>
            </table>
            }
        </div>
    </div>
  )
}

export default AllStudents