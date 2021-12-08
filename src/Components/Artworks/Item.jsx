import "tailwindcss/tailwind.css";

export default function Item(props){
    const { artwork, name, date } = props.design;

    return (
        <div className="border border-white border-opacity-20">
            <img src={artwork} alt={artwork} width="330px" />

            <div className="w-10/12	mx-auto py-5 border-opacity-20">
                <h2 className="text-white text-xl font-medium">{name}</h2>
                <p className="text-sm text-gray-400">Created at {date}</p>
            </div>
        </div>
    )
}