import {Card} from "../Card"
import DeclarativeIcon from "../../assets/images/icon1.png"
import ComponentIcon from "../../assets/images/icon2.png"
import SingleIcon from "../../assets/images/icon3.png"
import JsxIcon from "../../assets/images/icon4.png"
import style from "./style.module.css"


export function ContentSection(){
    return(
        <div className = {style.displayOrganise}>
            <Card 
            cardTitle="Declarative" 
            content ="React makes it painless to create interactives UIs."
            img={DeclarativeIcon}/>

            <Card 
            cardTitle="Components" 
            content ="Build encapsulated components that manage their state."
            img={ComponentIcon}/>

            <Card 
            cardTitle="Single-Way" 
            content ="A set of immutable values are passed to the component's."
            img={SingleIcon}/>
            
            <Card
            cardTitle="JSX" 
            content ="Statically-typed designed to run on modern browsers."
            img={JsxIcon}/>
        </div>
    )
}