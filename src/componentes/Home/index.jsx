import React from 'react';
import { Carousel } from 'react-bootstrap';
import { celulares } from '../../data';
import './Home.css';

const obtenerCelularesRandom = (cantidad) => {
    const copia = [...celulares];
    const mezclados = copia.sort(() => 0.5 - Math.random());
    return mezclados.slice(0, cantidad);
};

const Home = () => {
    const celularesRandom = obtenerCelularesRandom(6);

    return (
        <>
            <div className="banner-carousel">
                <Carousel fade>
                    <Carousel.Item>
                        <img src="https://miportal.entel.cl/static/images/banner-lanzamiento-s25-feb-desk.jpg" alt="Banner 1" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="https://covercompany.com.uy/cdn/shop/files/KSP_BANNER_5.jpg?v=1736881931" alt="Banner 2" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="https://tecstore.pe/media/Flashfish/TEC-STORE_Semana-3-Xiaomi_Banner-Web-Cat-Desktop-v1.jpg" alt="Banner 3" />
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="text-center mt-5 mb-4">
                <h2 className="titulo-principal">Bienvenidos a nuestra tienda de reventa de celulares</h2>
                <p className="subtitulo-principal">Descubrí smartphones reacondicionados con garantía y al mejor precio.</p>
            </div>

            <div className="container mt-4">
                <div className="row">
                    {celularesRandom.map((celular) => (
                        <div key={celular.id} className="col-md-4 mb-4">
                            <div className="card tarjeta-celular h-100">
                                <img
                                    src={celular.fotos[0]}
                                    className="card-img-top imagen-celular"
                                    alt={celular.nombre}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{celular.nombre}</h5>
                                    <p className="card-text descripcion">{celular.descripcion}</p>
                                    <p className="card-text precio fw-bold">${celular.precio}</p>
                                    <a href={`/producto/${celular.id}`} className="btn btn-outline-primary w-100">Ver más</a>
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
