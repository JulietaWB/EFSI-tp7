import { useParams } from 'react-router-dom';
import { celulares } from '../../data';
import { Carousel } from 'react-bootstrap';
import './Producto.css';

const Producto = () => {
    const { idCelular } = useParams();
    const celular = celulares.find(c => c.id == idCelular);

    if (!celular) {
        return <h2 className="text-center mt-5">Producto no encontrado</h2>;
    }

    return (
        <div className="container mt-5 producto-detalle">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <h1 className="mb-4 text-center fw-bold">{celular.nombre}</h1>
                    <div className="row align-items-center gy-4">
                        <div className="col-md-6">
                            <Carousel className="shadow rounded overflow-hidden">
                                {celular.fotos.map((foto, index) => (
                                    <Carousel.Item key={index}>
                                        <img
                                            src={foto}
                                            alt={`Foto ${index + 1}`}
                                            className="d-block w-100"
                                            style={{ height: '400px', objectFit: 'cover' }}
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>

                        <div className="col-md-6">
                            <h4 className="mb-3">Descripción</h4>
                            <p className="text-muted">{celular.descripcion}</p>

                            <h4 className="mt-4">Precio</h4>
                            <p className="fw-bold fs-3 text-primary">${celular.precio}</p>

                            <button className="btn btn-success px-5 py-2 rounded-pill mt-3">
                                Comprar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Producto;
