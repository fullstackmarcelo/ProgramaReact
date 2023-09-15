import { NavLink } from "react-router-dom";
import '../../styles/componentes/layouts/nav.css';

  

const Nav = (props) => {
    return (
        <nav>
            <div class='holder'>
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => isActive ?  'activo' : '' }>Home</NavLink></li>
                    <li><NavLink to="/tienda" className={({ isActive }) => isActive ?  'activo' : '' }>Tienda</NavLink></li>
                    <li><NavLink to="/reserva" className={({ isActive }) => isActive ?  "activo" : undefined }>Reserva</NavLink></li>
                    <li><NavLink to="/contactos" className={({ isActive }) => isActive ?  "activo" : undefined }>Contactos</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;