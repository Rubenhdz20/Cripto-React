import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./CriptoPage.css"

const CriptoPage = () => {

    const API_URL = import.meta.env.VITE_API_URL
    
    const params = useParams()

    const [cripto, setCripto] = useState({})

    const [history, setHistory] = useState([])

    useEffect(() => {
        axios.get(`${API_URL}assets/${params.id}`)
        .then(data => {
            setCripto(data.data.data)
        })
        .catch(e => console.error(error))

        axios.get(`${API_URL}assets/${params.id}/history?interval=d1`)
        .then(data => {
            setHistory(data.data.data)
        })
        .catch(e => console.error(error))
    }, [])


    return (
        <>
            <div className="cripto-page-container">
                <div className="info">
                    <div className="main-info">
                        <span>Ranking: {cripto.rank}</span>
                        <h1>{cripto.name}</h1>
                        <span className="symbol">{cripto.symbol}</span>
                    </div>

                    <div className="details">
                        <ul className="detail">
                            <span className="label">Precio:</span>
                            <span>{parseFloat(cripto.priceUsd).toFixed(3)}</span>
                        </ul>
                        <ul className="detail">
                            <span className="label">Maxsupply:</span>
                            <span>{parseFloat(cripto.maxSupply).toFixed(3)}</span>
                        </ul>
                        <ul className="detail">
                            <span className="label">Market Cap(USD):</span>
                            <span>{parseFloat(cripto.marketCapUsd).toFixed(3)}</span>
                        </ul>
                        <ul className="detail">
                            <span className="label">Volumen (USD - 24hrs):</span>
                            <span>{parseFloat(cripto.volumeUsd24Hr).toFixed(3)}</span>
                        </ul>
                        <ul className="detail">
                            <span className="label">Variacion (24hrs):</span>
                            <span>{parseFloat(cripto.changePercent24Hr).toFixed(3)}</span>
                        </ul>
                        <ul className="detail">
                            <span className="label">Vwap 24Hrs:</span>
                            <span>{parseFloat(cripto.vwap24Hr).toFixed(3)}</span>
                        </ul>
                    </div>
                </div>
            </div>

            <h2>Historial</h2>
            
            <table>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        history.map(({date, priceUsd, time}) => (
                            <tr key={time}>
                                <td className="label">{new Date(date).toDateString()}</td>
                                <td className="price">${parseFloat(priceUsd).toFixed(2)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default CriptoPage

// The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>. Child routes inherit all params from their parent routes.