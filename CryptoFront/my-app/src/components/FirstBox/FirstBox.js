import "./FirstBox.css"
import Coins from "../Coins/Coins"

const FirstBox = () => {
    return (
        <div className="FirstBoxContainer">
            <div className="bannerContainer">
                <h1 className="banner">Consulta los precios del mercado de criptomonedas</h1>
             </div>
            <h1 className="trendingContainer">Trending</h1>
            <Coins />
        </div>
    )
}

export default FirstBox