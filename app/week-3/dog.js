export default function Dog(props) {
    return(
        <div className="ml-4 ">
            <h2 className="text-green-400">{props.name}</h2>
            <p className="text-xs">{props.breed}, {props.age} years old, {props.color}</p>
        </div>
    )
}


