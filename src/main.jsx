import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Pagina404 from './components/404'
import Cuadricula from './components/Cuadricula'
import App from './components/App'
import Saludo from './components/Saludo'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}>
            <Route index element={<Cuadricula/>}/>
            <Route path='/saludo' element={<Saludo/>}/>
          </Route>
          <Route path='*' element={<Pagina404/>}/>
        </Routes>
      </BrowserRouter>
    </>
)

// React Router enables "client side routing".

// In traditional websites, the browser requests a document from a web server, downloads and evaluates CSS and JavaScript assets, and renders the HTML sent from the server. When the user clicks a link, it starts the process all over again for a new page.

// Client side routing allows your app to update the URL from a link click without making another request for another document from the server. Instead, your app can immediately render some new UI and make data requests with fetch to update the page with new information.

// This enables faster user experiences because the browser doesn't need to request an entirely new document or re-evaluate CSS and JavaScript assets for the next page. It also enables more dynamic user experiences with things like animation.