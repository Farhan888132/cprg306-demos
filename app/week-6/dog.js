export default function Dog({id, name, age, onDelete}) {
    return (
        <div>
            <h2>Dog</h2>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <button onClick={() => onDelete(id)} className="w-24 bg-red-600 rounded-lg hover:bg-red-900 active:bg-blue-600">Delete</button>
        </div>
    )
}