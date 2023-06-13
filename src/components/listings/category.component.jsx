/* eslint-disable react/prop-types */

const Category = ({image, name}) => {
  return (
    <div className="text-center border-[1px] rounded group">
        <img src={image} alt="" className="rounded-t w-full" />
        <p className="p-3 group-hover:underline capitalize">{name}</p>
    </div>
  )
}

export default Category