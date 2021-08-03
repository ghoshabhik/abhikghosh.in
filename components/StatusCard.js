export default function StatusCard({name, count}) {


    return (
        <div className="px-2 py-3 flex items-center justify-between border-b pb-5">
            <p>{name}</p>
            <p className="text-3xl font-bold">{count}</p>
        </div>
    )
}
