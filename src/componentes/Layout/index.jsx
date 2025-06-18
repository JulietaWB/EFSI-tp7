import { Link, Outlet } from "react-router-dom";
import './layout.css';

const Layout = () => {
    
    //HARDCODEO
    const marcas = [
        { id: 1, nombre: 'Apple' },
        { id: 2, nombre: 'Samsung' },
        { id: 3, nombre: 'Xiaomi' },
        { id: 4, nombre: 'Motorola' }
      ];

    return (<>
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" >
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link to="/" class="nav-link active">Home  </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/quienes-somos" class="nav-link" >Quienes Somos  </Link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Nuestros productos
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <Link to="/productos" class="dropdown-item">Todos los productos  </Link>
                            </li>
                            <li>
                                { marcas.map(p => <Link to={`/productos/${p.id}/${p.nombre}`} class="dropdown-item">   {p.nombre} </Link> ) }
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <Link to="/contacto" class="nav-link" >Contacto  </Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>

        <Outlet></Outlet>

        <footer>
            <div className="container text-center">
                <p>&copy; {new Date().getFullYear()} Reventa de Celulares. Todos los derechos reservados.</p>
                <div>
                    <Link to="/" className="text-white mx-2 text-decoration-none">Home</Link>
                    <Link to="/quienes-somos" className="text-white mx-2 text-decoration-none">Quiénes Somos</Link>
                </div>
            </div>
        </footer>
    </>);
}

export default Layout;