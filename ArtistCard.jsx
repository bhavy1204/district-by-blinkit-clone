export default function ArtistCard({ img, title}) {
    return (
        <div className=" rounded-md flex flex-col w-44">
            <div className="img w-44">
                <img
                    src={img}
                    alt={title}
                    className="h-44 w-full object-cover rounded-full mb-3"
                />
            </div>
            <div className="px-3 pb-2">
                <h3 className="font-medium text-center">{title}</h3>
                
            </div>
        </div>
    )
}
