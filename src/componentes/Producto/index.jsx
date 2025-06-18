import { useParams } from 'react-router-dom';
import { celulares } from '../../data';
import { Carousel } from 'react-bootstrap';

const Producto = () => {
    const { idCelular } = useParams();
    const celular = celulares.find(c => c.id == idCelular);

    if (!celular) {
        return <h2 className="text-center mt-5">Producto no encontrado</h2>;
    }

    return (
        <div className="container mt-5">
            <h1 className="mb-4 text-center">{celular.nombre}</h1>

            <div className="row">
                <div className="col-md-6">
                    <Carousel>
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
                    <h4 className="mt-4 mt-md-0">Descripción</h4>
                    <p>{celular.descripcion}</p>

                    <h4>Precio</h4>
                    <p className="fw-bold fs-4">${celular.precio}</p>

                    <button className="btn btn-success">Comprar</button>
                </div>
            </div>
        </div>
    );
};

export default Producto;
