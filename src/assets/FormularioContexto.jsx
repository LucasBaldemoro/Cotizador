import React, { createContext, useState } from 'react';

// Crear el contexto
const FormularioContexto = createContext();

// Crear el proveedor
const FormularioProveedor = ({ children }) => {
    const [datos, setDatos] = useState([]);

    // Función para agregar datos a la lista
    const agregarDato = (nuevoDato) => {
        setDatos([...datos, nuevoDato]);
    };

    return (
        <FormularioContexto.Provider value={{ datos, agregarDato }}>
            {children}
        </FormularioContexto.Provider>
    );
};

export { FormularioContexto, FormularioProveedor };
