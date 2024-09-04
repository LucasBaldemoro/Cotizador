import react from "react";

import { Link } from "react-router-dom";



function Navbar() {
    return (

        <nav>
            <Link to='/'>Inicio</Link>
            <Link to='/Historial'>Historial</Link>

        </nav>

    )
}

export default Navbar