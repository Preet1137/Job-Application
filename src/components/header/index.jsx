import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './index.css';


const Header = ()=>{
    const navigate = useNavigate();
    const token = Cookies.get("jwtToken");

    const onLogout = ()=>{

        Cookies.remove("jwtToken");
        navigate("/login");      
    }


    return(
        <nav className='nav-cont'>

            <Link to = "/">
            <img className='nav-icon' src="../src/assets/logo.png" alt="" width={"170px"}/>
            </Link>

            <ul className='ul-cont'>

                <li>
                <Link to  = "/" className='li-item'>Home</Link>
                </li>

                <li>
                <Link to  = "/jobs" className='li-item'>Jobs</Link>
                </li>

            </ul>
                <button onClick={onLogout} className='btn btn-logout'>Logout</button>

        </nav>
    )
}

export default Header;