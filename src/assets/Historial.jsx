import React, { useContext } from 'react';
import { FormularioContexto } from './FormularioContexto';

function Historial(Total) {


    const { datos } = useContext(FormularioContexto);
    console.log(datos)

    return (
        <section className="cotenedorHistorial">
            <h1>HISTORIAL</h1>
            <p>La tabla muestra un historial general de todas las cotizaciones echa por parte del usuario</p>
            <table>
                <thead>
                    <tr>
                        <th>Nombre	</th>
                        <th>Propiedad</th>
                        <th>Ubicación</th>
                        <th>Metros cuadrados	</th>
                        <th>Póliza mensual
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {datos.map((datos, index) => (
                        <tr key={index}>
                            <td>{datos.nombre + " "+ datos.apellido} </td>
                            <td>{datos.propiedad}</td>
                            <td>{datos.ubicacion}</td>
                            <td>{datos.metros}</td>
                            <td>{datos.resultado}</td>

                        </tr>
                    ))}
                </tbody>
            </table>









        </section>
    )
}

export default Historial