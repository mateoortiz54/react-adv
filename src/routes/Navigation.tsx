import { BrowserRouter, Route, Routes, NavLink, Navigate } from "react-router-dom"

import logo from '../logo.svg'
import { routes } from "./routes"
import { Suspense } from "react"
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages"

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Espere por favor estoy cargando el componente</span>} >
      <BrowserRouter>
        <div className="main-layout">

          <nav>
            <img src={logo} alt="React logo" />
            <ul>
              {
                // No se recomienda utilizar el i(index) para la key
                routes.map((route)=>
                  (<li key={route.to}>
                    <NavLink to={route.to} className={({isActive})=> isActive?  'nav-active':''}>{route.name}</NavLink>
                  </li>)    
                )
              }
            </ul>
          </nav>
          
          <Routes>

            {
              routes.map(route => 
                (<Route key={route.path} path={route.path} element={<route.Component/>} />)
              )
            }
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />

          </Routes>
          

        </div>
          

      </BrowserRouter>
    </Suspense>
  )
}
