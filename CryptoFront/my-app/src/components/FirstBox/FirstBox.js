import "./FirstBox.css"
import { Link } from "react-router-dom";
import cryptoPhoto from "../FirstBox/cryptoPhoto.png"

const FirstBox = () => {

    return (
        <div className="FirstBoxContainer">
            <div className="bannerContainer">
                <div className="leftBoxContainer">
                    <h1 className="banner">Consulta los precios del mercado de criptomonedas</h1>
                    <h3 className="bannerSubtitle">Unete al mejor exchange de criptomonedas de todo Argentina</h3>
                    <Link  className="btnBanner" to="/register">
                        Registrate
                        </Link>
                </div>
            <img src={cryptoPhoto} alt="" className="imgCrypto"></img>
             </div>
            
        </div>
    )
}

export default FirstBox