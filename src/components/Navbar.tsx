import { Link } from "react-router-dom"


export const Navbar = () => {
    return (
        <>
                <nav className="navbar is-dark" role="navigation" aria-label="main navigation">

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link to='/' className="navbar-item">
                        Home
                    </Link>

                    <Link to='/user' className="navbar-item">
                        Usuarios
                    </Link>
                    <Link to='/user/create' className="navbar-item">
                        Crear Usuario
                    </Link>
                </div>

            <div className="navbar-end">
            <div className="navbar-item">
                <div className="buttons">
                {/* <a className="button is-primary">
                    <strong>Sign up</strong>
                </a>
                <a className="button is-light">
                    Log in
                </a> */}
                </div>
            </div>
            </div>
        </div>
        </nav>
        </>
    )
}

