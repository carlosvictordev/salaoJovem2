import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faHouse, faCalendarDays } from '@fortawesome/free-solid-svg-icons';


function NavBar(){
    return(
    <nav>
            <div className="navbar">
                <div className="geral-itens">
                    <div className="itens"><a href="/home"><FontAwesomeIcon icon={faHouse} /></a></div>
                    <div className="itens"><a href="/agenda"><FontAwesomeIcon icon={faCalendarDays} /></a></div>
                    <div className="itens"><a href="/conta"><FontAwesomeIcon icon={faUser} /></a></div>
                </div>
            </div>
            </nav>
    )
}
export default NavBar;