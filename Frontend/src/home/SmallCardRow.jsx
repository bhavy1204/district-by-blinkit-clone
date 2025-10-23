import SmallCard from "./SmallCard.jsx"

export default function CardRow({ category, items }) {
    return (
        <div className="mb-8 mx-20">
            <div className="flex justify-start items-center mb-3">
                <h2 className="text-lg font-bold">{category}</h2>
            </div>

            <div className="flex space-x-5 overflow-x-auto scrollbar-hide">
                {items.map((item, idx) => (
                    <SmallCard
                        key={idx}
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    )
}