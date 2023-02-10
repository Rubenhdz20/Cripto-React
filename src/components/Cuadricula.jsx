import { useEffect, useState } from 'react'
import axios from 'axios'
import '../components/Cuadricula.css'
import Cripto from './cripto/Cripto'

const Cuadricula = () => {
  const API_URL = import.meta.env.VITE_API_URL

  const [criptos, setCriptos] = useState()

  useEffect(() => {
    axios.get(`${API_URL}assets`)
      .then((data) => {
        setCriptos(data.data.data)
      })
      .catch(() => {
        console.error('La peticion fallo')
      })
  }, [])

  if(!criptos) return <span>Cargando...</span>

  return (
    <div className='app-container'>
        <h1>Lista de Criptomonedas</h1>
        <div className='cripto-container'>
          {
            criptos.map(({id, name, priceUsd, symbol, changePercent24Hr}) => (
              <Cripto 
                key={id} 
                name={name} 
                priceUSD={priceUsd} 
                symbol={symbol} 
                changePercent24Hr={changePercent24Hr}
                id={id}
              />
            ))
          }
        </div>
    </div>
  )
}

export default Cuadricula

// USE EFFECT 

// Ejecutar código cuando se renderiza el componente, cuando cambian las dependencias del efecto o cuando se desmonta el componente.

// Por eso puede ser útil para hacer llamadas a APIs, ya que sea nada más montar el componente o cuando cambian las dependencias.

// Realizar tracking de eventos, como Google Analytics, para saber qué páginas visitan los usuarios.

// Podemos validar un formulario para que cada vez que cambie el estado, podamos actualizar la UI y mostrar dónde están los errores.

// Podemos suscribirnos a eventos del navegador, como por ejemplo el evento resize para saber cuando el usuario cambia el tamaño de la ventana.


// USE STATE 

// El hook useState es utilizado para crear variables de estado, quiere decir que su valor es dinámico, que este puede cambiar en el tiempo y eso requiere una re-renderización del componente donde se utiliza

// Recibe un parámetro:

// El valor inicial de nuestra variable de estado.
// Devuelve un array con dos variables:

// En primer lugar tenemos la variable que contiene el valor

// La siguiente variable es una función set, requiere el nuevo valor del estado, y este modifica el valor de la variable que anteriormente mencionamos

// Cabe destacar que la función proporciona cómo parámetro el valor actual del propio estado. Ex: setIsOpen(isOpen => !isOpen)