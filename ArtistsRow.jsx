import ArtistCard from "./ArtistCard.jsx"

export default function ArtistRow({ category, items }) {
    return (
        <div className="mb-8 mx-20">
            <div className="flex justify-start items-center mb-3">
                <h2 className="text-lg font-bold">{category}</h2>
            </div>

            <div className="flex space-x-5 overflow-x-auto scrollbar-hide">
                {items.map((item, idx) => (
                    <ArtistCard
                        key={idx}
                        img={item.img}
                        title={item.title}
                    />
                ))}
            </div>
        </div>
    )
}