import { Outlet } from 'react-router-dom'
import Menu from './menu/Menu'

const App = () => {
    return (
        <>
            <Menu/>
            <Outlet/>
        </>
    )
}

// Un Outlet en React es un componente que actúa como un marcador de posición para contenido renderizado dinámicamente. Proporciona una manera para que los componentes especifiquen dónde debe ser mostrado su contenido generado dinámicamente dentro de la plantilla del componente padre. El componente padre puede usar el componente Outlet para determinar dónde deben ser insertados los contenidos de sus componentes hijos, y luego los componentes hijos pueden renderizar dinámicamente su contenido en el Outlet designado. Esto permite mayor flexibilidad y modularidad en la construcción de componentes de UI dinámicos y reutilizables.

export default App