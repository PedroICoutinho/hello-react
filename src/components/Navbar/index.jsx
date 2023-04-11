import Ironhacklogo from "../../assets/images/ironhack-logo-xs.png"
import MenuIcon from "../../assets/images/menu-foto-xs.png"
import style from "./style.module.css"


export function NavBar() {
    return ( 
    <nav className = {style.navBar}>
        <img src={Ironhacklogo} alt = "Ironhack Logo" className={style.icons}/>
        <img src={MenuIcon} alt = "Menu Icon" className={style.icons}/>
    </nav> 
    );
}

