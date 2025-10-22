export default function Card({ img, title, desc, price,disc=0 }) {
    return (
        <div className=" rounded-md flex flex-col w-96 border-1 border-gray-300">
            <div className="img w-60 relative">
                <img
                    src={img}
                    alt={title}
                    className="h-96 w-full object-cover rounded-md"
                />
                <div className="bg-purple-500 h-5 absolute z-10 bottom-0 w-full text-sm text-center text-white pb-1 pt-0 font-semibold">{disc}% discount</div>
            </div>
            <div className="px-3 pb-2">
                <h3 className="font-medium text-lg line-clamp-2">{title}</h3>
                <p className="text-sm text-gray-500 mb-2">{desc}</p>
                <p className="font-semibold text-base">₹{price}</p>
            </div>
        </div>
    )
}
