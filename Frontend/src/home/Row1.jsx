import SmallCardRow from "./SmallCardRow.jsx"

export default function Row1() {
    const items = [
        { img: "row1/one.jpg", title: "movie", desc: "description", price: 5000 },
        { img: "row1/two.jpg", title: "movie", desc: "description", price: 5000 },
        { img: "row1/three.jpg", title: "movie", desc: "description", price: 5000 },
        { img: "row1/four.jpg", title: "movie", desc: "description", price: 5000 },
    ]

    return (
        <div className="p-6">
            <SmallCardRow category="Top hindi movies" items={items} />
        </div>
    )
}
