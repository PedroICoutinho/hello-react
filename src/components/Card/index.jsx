

export function Card(props){
    return (
    <div>
        <img src={props.img} alt={props.cardTitle} />
        <h2>{props.cardTitle}</h2>
        <p>{props.content}</p>
    </div>
 );
}