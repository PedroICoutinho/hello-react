import style  from "./style.module.css"

export function Button (props){
    return(
        <div>
            <button className={props.btnTitle === "Primary" ? style.primary : style.danger} >{props.btnTitle}</button>
        </div>
    )
}