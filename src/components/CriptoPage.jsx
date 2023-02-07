import { useParams } from "react-router-dom"

const CriptoPage = () => {

    const params = useParams()

    return (
        <>
            <h1>Soy una Criptomoneda {params.id}</h1>
        </>
    )
}

export default CriptoPage

// The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>. Child routes inherit all params from their parent routes.