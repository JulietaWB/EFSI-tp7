import React, { useState } from 'react';

const Contacto = () => {
    // Solo para manejar inputs localmente (opcional)
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Formulario enviado (simulado)");
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4 text-center">Contacto</h1>
            <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: 600 }}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        className="form-control"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="mensaje" className="form-label">Mensaje</label>
                    <textarea
                        id="mensaje"
                        name="mensaje"
                        className="form-control"
                        rows="5"
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary w-100">Enviar</button>
            </form>
        </div>
    );
};

export default Contacto;
