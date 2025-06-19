import { Link, Outlet } from "react-router-dom";
import './layout.css';
import { marcas } from '../../data';

const Layout = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
                <div className="container">
                    <Link to="/" className="navbar-brand fw-bold text-white">📱 ReventaCell</Link>  
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/quienes-somos" className="nav-link">Quiénes Somos</Link>
                            </li>
                            <li className="nav-item dropdown ">
                                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Nuestros productos
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link to="/productos" className="dropdown-item">Todos los productos</Link>
                                    </li>
                                    {marcas.map(p => (
                                        <li key={p.id}>
                                            <Link to={`/productos/${p.id}/${p.nombre}`} className="dropdown-item">{p.nombre}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/contacto" className="nav-link">Contacto</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <main className="contenido-principal">
                <Outlet />
            </main>

            <footer className="bg-dark text-white py-4 mt-5">
                <div className="text-center">
                    <p className="mb-2">&copy; {new Date().getFullYear()} Reventa de Celulares. Todos los derechos reservados.</p>
                    <div>
                        <Link to="/" className="text-white mx-2 text-decoration-none fw-bold">Home</Link>
                        <Link to="/quienes-somos" className="text-white mx-2 text-decoration-none fw-bold">Quiénes Somos</Link>
                        <Link to="/contacto" className="text-white mx-2 text-decoration-none fw-bold">Contacto</Link>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Layout;