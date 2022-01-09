import { useEffect,  } from "react"
import { useDispatch, useSelector} from "react-redux"
import { getCoins } from "../../Actions/actions";
import "./Coins.css"


const Coins = () => {
    const dispatch = useDispatch();
    const coins = useSelector(coins => coins.coins)
    const dislplayCoins = coins.slice(0,5)
    
    useEffect(() => {
        dispatch(getCoins())
    }, [dispatch])
    
    return (
        <div className="CoinsContainer">
                { 
                dislplayCoins.map(person => (
                 <ul className="ulContainer">
                     <div className="imgContainer">
                         <img src={person.image} alt={`Imagen de ${person.id}`} className="imgCoins"></img>
                         </div>
                     <div className="infoContainer">
                          <li className="contain">{person.name}</li>
                          <li className="contain">{person.price}</li>
                          <li className="contain">${person.price}</li>
                     </div>
                 </ul>
                 )
                 )}           
        </div>
    )
}

export default Coins