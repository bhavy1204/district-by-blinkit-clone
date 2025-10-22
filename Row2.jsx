import SmallCardRow from "./SmallCardRow.jsx"

export default function Row2() {
    const items = [
        { img: "hindi Movies/a.jpg", title: "movie", desc: "description", price: 5000 },
        { img: "hindi Movies/b.jpg", title: "movie", desc: "description", price: 5000 },
        { img: "hindi Movies/c.jpg", title: "movie", desc: "description", price: 5000 },
        { img: "hindi Movies/d.jpg", title: "movie", desc: "description", price: 5000 },
    ]

    return (
        <div className="p-6">
            <SmallCardRow category="Top hindi movies" items={items} />
        </div>
    )
}
