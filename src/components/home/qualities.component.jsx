
const Qualities = () => {
  return (
    <div className="w-screen">
        <div className="w-full max-w-6xl m-auto pt-8 flex items-center justify-between space-x-10">
            <div className="w-1/3">
                <i className="fa-solid fa-hand-holding-heart fa-2xl my-5 text-purple-800"></i>
                <h3 className="text-2xl font-bold mb-2">Trusted</h3>
                <p>Only users with Covenant emails can sign up to buy and sell.</p>
            </div>
            <div className="w-1/3">
                <i className="fa-solid fa-tag fa-2xl my-5 text-purple-800"></i>
                <h3 className="text-2xl font-bold mb-2">Free</h3>
                <p>List an unlimited number of your secondhand items for sale with no fees.</p>
            </div>
            <div className="w-1/3">
                <i className="fa-solid fa-basket-shopping fa-2xl my-5 text-purple-800"></i>
                <h3 className="text-2xl font-bold mb-2">Spam-less</h3>
                <p>Spam is flagged and removed to maintain only the highest-quality listings.</p>
            </div>
        </div>
    </div>
  )
}

export default Qualities