import ArtistRow from "./ArtistsRow.jsx"

export default function Artists() {
    const items = [
        { img: "people/a.jpg", title: "singer" },
        { img: "people/b.jpg", title: "singer" },
        { img: "people/c.jpg", title: "singer" },
        { img: "people/d.jpg", title: "singer" },
        { img: "people/e.jpg", title: "singer" },
        { img: "people/f.jpg", title: "singer" },
        { img: "people/g.jpg", title: "singer" },
        { img: "people/h.jpg", title: "singer" },
        { img: "people/i.jpg", title: "singer" },
        { img: "people/j.jpg", title: "singer" },

    ]

    return (
        <div className="p-6">
            <ArtistRow category="Top hindi movies" items={items} />
        </div>
    )
}
