const Nosotros = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">¿Quiénes somos?</h1>
            <p className="text-center lead">
                Somos una empresa dedicada a la reventa de celulares reacondicionados, comprometidos con brindar tecnología accesible y sustentable. 
                Contamos con más de 10 años de experiencia en el rubro, y oficinas comerciales en distintos puntos del país.
            </p>

            <h3 className="text-center mt-5 mb-4">Nuestras oficinas</h3>

            <div className="row">
                <div className="col-md-4 mb-4">
                    <img
                        src="https://subeinteriorismo.com/wp-content/uploads/2020/09/sube-interiorismo-oficina-moderna-BIOLAN-w047-scaled.jpg"
                        alt="Oficina 1"
                        className="img-fluid rounded shadow"
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <img
                        src="https://subeinteriorismo.com/wp-content/uploads/2020/09/sube-interiorismo-oficina-moderna-BIOLAN-w048-1932x2048.jpg"
                        alt="Oficina 2"
                        className="img-fluid rounded shadow"
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <img
                        src="https://subeinteriorismo.com/wp-content/uploads/2020/09/sube-interiorismo-oficina-moderna-BIOLAN-w029-1801x2048.jpg"
                        alt="Oficina 3"
                        className="img-fluid rounded shadow"
                    />
                </div>
            </div>
        </div>
    );
};

export default Nosotros;
