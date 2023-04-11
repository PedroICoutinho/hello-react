import style from "./style.module.css"

export function TextBox(){
    return (
        <>
        <h2 className = {style.headerTitle}>Say hello to <br></br>React JS</h2>
        <p className = {style.headerSubtitle}>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
        <button className = {style.btnTitle}> Awesome!</button>
        </>
    )
}