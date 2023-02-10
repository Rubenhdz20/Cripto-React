import { Link } from 'react-router-dom'
import './Cripto.css'

const Cripto = ({id, name, priceUSD, symbol, changePercent24Hr}) => {
  return(
    <div className='cripto'>
      <h2>{name}</h2>
      <div className="info">
        <p><span className="label">Precio: </span>${parseFloat(priceUSD).toFixed(3)}</p>
        <p><span className="label">Codigo: </span>{symbol}</p>
        <p>
          <span className="label">Variacion 24hrs: </span>
          <span className={parseFloat(changePercent24Hr) > 0 ? 'positivo' : 'negativo'}>
            {parseFloat(changePercent24Hr).toFixed(3)}%
          </span>
        </p>
        <Link to={`/criptomonedas/${id}`}>Ver detalles</Link>
      </div>
    </div>
  )
}

export default Cripto

//PROPS

// Las props son las propiedades de un componente. Son datos que se pasan de un componente a otro. 

// Debe considerarse además que al usar cualquier expresión JavaScript dentro de JSX debe envolverlos con {}, en este caso el objeto props, de otra forma JSX lo considerará como texto plano.

// Las props son una forma de parametrizar nuestros componentes igual que hacemos con las funciones. Podemos pasarle cualquier tipo de dato a un componente, incluso otros componentes.

// Destructuring is a feature in JavaScript that allows you to extract values from arrays or objects and assign them to separate variables. It provides an easy way to extract data from arrays and objects and access their properties in a concise and efficient manner.

// STATE 

// El state es un valor que se define dentro de un componente. Su valor es inmutable (no se puede modificar directamente) pero se puede establecer un valor nuevo del estado para que React vuelva a renderizar el componente.