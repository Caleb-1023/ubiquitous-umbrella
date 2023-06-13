import { Link } from "react-router-dom"

const Showcase = () => {
  return (
    <div className="bg-[url('/covenant_university.jpg')] bg-no-repeat bg-center bg-cover bg-fixed w-screen h-[75vh]">
        <div className="w-full h-full bg-slate-600/50 pb-36">
            <div className="w-full max-w-[40%] m-auto text-center h-full flex flex-col items-center justify-end">
                <h1 className="text-7xl heading-text text-white tracking-widest">CU<span className="text-purple-800  heading-text">M</span>ART</h1>
                <p className="text-2xl text-white my-3">A free online marketplace built by Covenant students for Covenant students</p>
                {/* <form action="">
                    <input type="text" />
                </form> */}
                <Link to={'/listings'} className="text-xl text-white p-3 bg-[#0d182d] rounded-lg my-3">View All Listings</Link>
            </div>
        </div>
    </div>
  )
}

export default Showcase