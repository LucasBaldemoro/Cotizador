import React, { useState, useContext } from 'react';
import { FormularioContexto } from './FormularioContexto';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal)

function Inicio() {


    const [formData, setFormData] = useState({
        nombre: '',
        propiedad: '',
        ubicacion: '',
        metros: '',
        edad: '',
        resultado: 0,
    });




    const { agregarDato } = useContext(FormularioContexto);

  // Función para manejar cambios en los campos del formulario
  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };




  const manejarSubmit = () => {


    if (!formData.nombre || !formData.propiedad || !formData.ubicacion || !formData.metros || !formData.edad) {
        setError('Por favor, complete todos los campos antes de calcular.'); 
        return; 
      }
  

    const nuevoResultado = formData.propiedad  + formData.ubicacion + formData.metros

    // Actualizar formData con el resultado calculado antes de enviarlo
    const datosConResultado = {
      ...formData,
      resultado: nuevoResultado,
    };

    agregarDato(datosConResultado); // Agrega los datos completos al contexto

    // Reiniciar formData después de enviar el formulario
    setFormData({
      nombre: '',
      apellido: '',
      propiedad: '',
      ubicacion: '',
      metros: '',
      edad: '',
      resultado: nuevoResultado,  // Restablece el resultado a su valor inicial
    });

    notificaciónguardado(); //  función para notificar que se ha guardado la cotizacion 
  };
// 



  

    function notificaciónguardado() {
        MySwal.fire({
            title: <p>Cotización echa</p>,
            icon: 'success',


        })

    }






    return (

        <div className='Contenedor'>
            <div className='Contenedor--info'>

                <h1>VIDA SEGURA</h1>
                <p>"Descubre por qué el alquiler de una vivienda puede ser la opción ideal para disfrutar de comodidad, libertad financiera y menos compromisos a largo plazo."


                </p>

                <ul>
                    <h3>¿Por qué contratar tu seguro de casa con VIDA SEGURA</h3>
                    <li>Tranquilidad Financiera: Protege tus ahorros y activos ante eventos imprevistos, evitando gastos inesperados.


                    </li>

                    <li>Protección Integral: Cubre diversos aspectos de tu vida, desde salud hasta propiedades, brindando una red de seguridad completa.


                    </li>
                    <li>Tendrás acceso a un proceso ágil de siniestros con inspecciones virtuales y ajustes 100% digitales, desde tu celular.
                    </li>
                </ul>

            </div>
            <div className='Contenedor-Cabezera'>

                <form>
                    <h2>Calculá el valor de tu propiedad
                    </h2>
                    <p>Completá los siguientes datos y conocé en segundos un valor estimado
                    </p>





                    <div className='ingresobasico'>
                        <label className='ingresobasicousuario' >
                            Nombre
                            <input type='texto' name='nombre' value={formData.nombre} onChange={manejarCambio}></input>
                        </label>
                        <label className='ingresobasicousuario'>
                            apellido
                            <input type='texto' name='apellido' value={formData.apellido} onChange={manejarCambio}></input>
                        </label >

                    </div>




                    <div className="segundocontendor">
                        <label className='Edadusuario' >
                            Edad
                            <input type='texto' name='edad' value={formData.edad} onChange={manejarCambio}></input>
                        </label>

                        <label className="SuperficieCubierta" >
                            <h3>Superfice Cubierta</h3>
                            <input type="number" name='metros' value={formData.metros} onChange={manejarCambio}></input>

                        </label>

                    </div>



                    <div className="Propiedades">
                        <h3>Propiedades</h3>

                        <select className='ValorUbicacionPropiedad' name='propiedad' value={formData.propiedad} onChange={manejarCambio}>

                            <option>...</option>
                            <option value={"1.09"}>Casa</option>
                            <option value={1.05}>Ph</option>
                            <option value={1.02}>Edificio</option>
                            <option value={1.19}>Barrio privado</option>
                            <option value={1.41}>Local Comercial</option>
                            <option value={2.39}>Oficina</option>
                            <option value={1.92}>Depocito Logistica</option>

                        </select>
                    </div>



                    <div className="UbicacionPropiedad">

                        <h3>Ubicacion DE Propiedad</h3>

                        <div className="Propiedades">
                            <select className='ValorUbicacionPropiedad' name='ubicacion' value={formData.ubicacion} onChange={manejarCambio} >
                                <option >...</option>
                                <option value={"1.13"}>Ciudad de buenos aires</option>
                                <option value={"1.04"}>Ph</option>
                                <option value={"1.29"}>costa atlantica</option>
                                <option value={"1.01"}>Patagonia Argentina</option>
                                <option value={"1.25"}>Gran Buenos Aires</option>

                            </select>
                        </div>

                    </div>




                    <div className="ConteinerMetros">


                        <div className="SuperficieCubierta">
                            <h3>Superfice Total</h3>
                            <input type="number"></input>

                        </div>
                    </div>






                    <a href="#" className="BotonCalculo" onClick={manejarSubmit} >COTIZAR</a>



                    <p className='PrecioTotal'> Precio estimado: ${formData.resultado} </p>



                </form>

            </div>


        </div>


    )

}

export default Inicio