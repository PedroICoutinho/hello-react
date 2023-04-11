import { NavBar } from "../Navbar";
import style from "./style.module.css";
import { TextBox } from "../TextBox";

export function Header(){
    return(
        <header className = {style.headerContainer}>
            <NavBar/>
            <TextBox/>
        </header>
    )
}

