import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faHouse, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import "../../styles/Home.css"


function NavBarPhone(){
    return(
    <nav class="bottom-nav">
  <a href="/home"><FontAwesomeIcon icon={faHouse} /></a>
  <a href="/agenda"><FontAwesomeIcon icon={faCalendarDays} /></a>
  <a href="/conta"><FontAwesomeIcon icon={faUser} /></a>
</nav>
    )
}
export default NavBarPhone;