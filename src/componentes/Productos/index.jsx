import { useParams } from "react-router-dom";
import { celulares, marcas } from "../../data";

const Productos = () => {
    const { idMarca } = useParams();

    // Si hay marca, filtramos. Si no, mostramos todos.
    const celularesFiltrados = idMarca
        ? celulares.filter(cel => cel.marcaId == idMarca)
        : celulares;

    // Buscamos el nombre de la marca si hay marca seleccionada
    const nombreMarca = idMarca
        ? marcas.find(m => m.id == idMarca)?.nombre || "Marca desconocida"
        : null;

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">
                {idMarca ? `Productos de la marca ${nombreMarca}` : "Todos los celulares disponibles"}
            </h1>

            <div className="row">
                {celularesFiltrados.map((celular) => (
                    <div key={celular.id} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <img
                                src={celular.fotos[0]}
                                className="card-img-top"
                                alt={celular.nombre}
                                style={{ height: '250px', objectFit: 'cover' }}
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

                {celularesFiltrados.length === 0 && (
                    <div className="col-12">
                        <p className="text-center">No hay celulares disponibles para esta marca.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Productos;
