/* eslint-disable react/prop-types */

const Item = ({item}) => {
  return (
    <div className="text-start w-[15rem] h-[20rem] border-[1px] border-gray-300 rounded">
        <img src={item.image} alt="" className="h-[60%] rounded-t w-full object-cover" />
        <div className="h-[40%] p-3 capitalize">
            <h3 className="font-bold">{item.name}</h3>
            <h4 className="font-bold">₦{item.price}</h4>
            <p className="text-gray-500">{item.description}</p>
            <h5 className="text-gray-700 my-2">{item.firstName} {item.lastName}</h5>
        </div>
    </div>
  )
}

export default Item