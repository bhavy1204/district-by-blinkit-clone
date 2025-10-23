import CardRow from "./CardRow.jsx"

export default function Events() {
    const items = [
        { img: "events/a.png", title: "event", desc: "description", price: 5000 },
        { img: "events/b.jpg", title: "event", desc: "description", price: 5000 },
        { img: "events/c.png", title: "event", desc: "description", price: 5000 },
        { img: "events/d.jpg", title: "event", desc: "description", price: 5000 },
        { img: "events/e.jpg", title: "event", desc: "description", price: 5000 },
        { img: "events/f.jpg", title: "event", desc: "description", price: 5000 },
        { img: "events/g.jpg", title: "event", desc: "description", price: 5000 },
        { img: "events/h.jpg", title: "event", desc: "description", price: 5000 },
        { img: "events/i.png", title: "event", desc: "description", price: 5000 },
        { img: "events/j.jpg", title: "event", desc: "description", price: 5000 },
        { img: "events/k.jpg", title: "event", desc: "description", price: 5000 },
    ]

    return (
        <div className="p-6">
            <CardRow category="Events neat you" items={items} />
        </div>
    )
}
