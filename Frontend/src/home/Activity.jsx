import CardRow from "./CardRow.jsx"

export default function Activity() {
    const items = [
        { img: "activity/one.jpg", title: "prod 1", desc: "description", price: 5000 },
        { img: "activity/two.png", title: "prod 1", desc: "description", price: 5000 },
        { img: "activity/three.jpg", title: "prod 1", desc: "description", price: 5000 },
        { img: "activity/four.png", title: "prod 1", desc: "description", price: 5000 },
        { img: "activity/five.jpg", title: "prod 1", desc: "description", price: 5000 },
        { img: "activity/six.png", title: "prod 1", desc: "description", price: 5000 },
        { img: "activity/seven.jpg", title: "prod 1", desc: "description", price: 5000 },
        { img: "activity/eight.jpg", title: "prod 1", desc: "description", price: 5000 },
        { img: "activity/nine.jpg", title: "prod 1", desc: "description", price: 5000 },
        { img: "activity/ten.jpg", title: "prod 1", desc: "description", price: 5000 },
        { img: "activity/eleven.png", title: "prod 1", desc: "description", price: 5000 },
        { img: "activity/tweleve.jpg", title: "prod 1", desc: "description", price: 5000 },
    ]

    return (
        <div className="p-6">
            <CardRow category="Offers on Activity" items={items} />
        </div>
    )
}
