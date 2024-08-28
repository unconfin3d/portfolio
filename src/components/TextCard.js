import "./TextCard.css"
const TextCard =(props)=>{
    return (
        <div className="containerText">
      <h3 >{props.heading}</h3>
      <p >
      {props.message} </p>
    </div>
    )
}
export default TextCard;
