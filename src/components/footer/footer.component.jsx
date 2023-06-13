import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-screen p-3 bg-gray-100'>
        <div className='w-full m-auto max-w-7xl flex items-center justify-around text-lg text-gray-500'>
            <Link to={'/'} className=''>FAQs</Link>
            <Link to={'/'} className=''>Privacy Policy</Link>
            <Link to={'/'} className=''>Terms of Service</Link>
            <p>CUMart &copy; 2023</p>
        </div>
    </div>
  )
}

export default Footer