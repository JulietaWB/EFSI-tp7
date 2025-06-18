import React from 'react';
import { Carousel } from 'react-bootstrap';
import { celulares } from '../../data'; // Asegurate de que el path sea correcto

const obtenerCelularesRandom = (cantidad) => {
    const copia = [...celulares];
    const mezclados = copia.sort(() => 0.5 - Math.random());
    return mezclados.slice(0, cantidad);
};

const Home = () => {
    const celularesRandom = obtenerCelularesRandom(6);

    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src="/img/banner1.jpg" alt="Banner 1" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="/img/banner2.jpg" alt="Banner 2" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="/img/banner3.jpg" alt="Banner 3" />
                </Carousel.Item>
            </Carousel>

            <div className="text-center mt-4">
                <h2>Bienvenidos a nuestra tienda de reventa de celulares</h2>
                <p>Descubrí smartphones reacondicionados con garantía y al mejor precio.</p>
            </div>

            <div className="container mt-5">
                <div className="row">
                    {celularesRandom.map((celular) => (
                        <div key={celular.id} className="col-md-4 mb-4">
                            <div className="card h-100">
                                <img
                                    src={celular.fotos[0]}
                                    className="card-img-top"
                                    alt={celular.nombre}
                                    style={{ objectFit: 'cover', height: '250px' }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{celular.nombre}</h5>
                                    <p className="card-text">{celular.descripcion}</p>
                                    <p className="card-text fw-bold">${celular.precio}</p>
                                    <a href={`/producto/${celular.id}`} className="btn btn-primary">Ver más</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
