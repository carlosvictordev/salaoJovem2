import "../styles/Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faHouse, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBarPhone from "./elements/NavbarPhone";

import Noticia from "../assets/noticia1.jpg";
import Noticia2 from "../assets/noticia2.jpg";
import Noticia3 from "../assets/noticia3.jpg";
import Noticia4 from "../assets/noticia4.jpg";


function Home(){
    const navigate = useNavigate();
    function Agenda(){
        navigate("/agenda");
    }
    return(
        <>
        <div className="container2">
        <NavBarPhone/>
            <nav>
            <div className="navbar">
                <div className="geral-itens">
                    <div className="itens"><Link to="/home"><FontAwesomeIcon icon={faHouse} /></Link></div>
                    <div className="itens"><Link to="/agenda"><FontAwesomeIcon icon={faCalendarDays} /></Link></div>
                    <div className="itens"><Link to={"/conta"}><FontAwesomeIcon icon={faUser} /></Link></div>
                </div>
            </div>
            </nav>
            
            
        <header>
            <div className="container3">
                <div className="anuncio">
                    <div className="info">
                        <h1>Experiência que <br />você merece!</h1>
                    <button onClick={Agenda}>AGENDAR</button>
                    </div>
                </div>
                <div className="slider-geral">
                    <div class="slider">
                        <div class="slides">
                            <img src={Noticia} />
                            <img src={Noticia2} />
                            <img src={Noticia3} />
                            <img src={Noticia4} />
                        </div>
                    </div>
                </div>


                <div className="descontos">
                    <div className="promocao">
                        <h1>Notícias</h1>
                        <div className="info-promo">
                        <div className="info-promo1">
                                <div className="card-anuncio" onClick={Agenda}>
                                    <img src={Noticia} alt=""/>
                                    <p>Desconto de 20% <br /> em todos os cortes</p>
                                </div>
                        </div>
                        <div className="info-promo2">
                            <div className="card-anuncio" onClick={Agenda}>
                                <img src={Noticia2} alt=""/>
                                <p>Melhores babeiros <br />da região</p>
                            </div>
                        </div>
                        <div className="info-promo2" onClick={Agenda}>
                            <div className="card-anuncio">
                                <img src={Noticia4} alt=""/>
                                <p>Confiança e Comprometimento</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </div>
        </>
    )
}
export default Home;