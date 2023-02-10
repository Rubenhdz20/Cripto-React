import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
<script src="
https://cdn.jsdelivr.net/npm/dayjs@1.11.7/dayjs.min.js
"></script>

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
    }, [])

    useEffect(() => {
        axios.get(`${API_URL}assets/${params.id}/history?interval=d1`)
        .then(data => {
            setHistory(data.data.data)
        })
        .catch(e => console.error(error))
    }, [])

    return (
        <>
            <h1>{params.id}</h1>
            <div className="info">
                <ul>
                    <li><span className="label">Nombre:</span>{cripto.name}</li>
                    <li><span className="label">Simbolo:</span>{cripto.symbol}</li>
                </ul>
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
                                <td>{date}</td>
                                <td>${parseFloat(priceUsd).toFixed(2)}</td>
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