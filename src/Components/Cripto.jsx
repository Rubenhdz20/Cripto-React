import { useEffect, useState } from 'react'
import axios from 'axios'
import '../App.css'

const Cripto = () => {
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
    <>
      <div className='container'>
        <h1 className='title'>Lista de Criptomonedas</h1>
        <table className='cripto-box'>
          {
            criptos.map(({id, name, priceUsd}) => (
              <>
                <td key={id} className='cripto-list'>{name}</td>
                <td className='cripto-list'> ${priceUsd}</td>
              </>
            ))
          }
        </table>
      </div>
    </>
  )
}

export default Cripto
