import { BrowserRouter, Route, Routes, NavLink, Navigate } from "react-router-dom"


import { 
  FormikAbstractation, 
  FormikBasicPage, 
  FormikComponents, 
  FormikYupPage, 
  RegisterPage 
} from "../03-forms/pages"


import logo from '../logo.svg'

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">

        <nav>
          <img src={logo} alt="React logo" />
          <ul>

            <li><NavLink to="/formik-basic" className={({isActive})=> isActive?  'nav-active':''}>Formik Basic Page</NavLink></li>
            <li><NavLink to="/formik-yup" className={({isActive})=> isActive?  'nav-active':''}>Formik Yup Page</NavLink></li>
            <li><NavLink to="/formik-components" className={({isActive})=> isActive?  'nav-active':''}>Formik Components</NavLink></li>
            <li><NavLink to="/formik-abs" className={({isActive})=> isActive?  'nav-active':''}>Formik Abstractation</NavLink></li>
            <li><NavLink to="/register" className={({isActive})=> isActive?  'nav-active':''}>Register Page</NavLink></li>
            <li><NavLink to="/home" className={({isActive})=> isActive?  'nav-active':''}>Home</NavLink></li>
            <li><NavLink to="/about" className={({isActive})=> isActive?  'nav-active':''} >About</NavLink></li>
            <li><NavLink to="users" className={({isActive})=> isActive?  'nav-active':''} >Users</NavLink></li>
          </ul>
        </nav>
        
        <Routes>

          <Route path="about" element={<h1>About Page</h1>} />
          <Route path="users" element={<h1>Users Page</h1>} />
          <Route path="/home" element={<h1>Home Page</h1>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/formik-basic" element={<FormikBasicPage/>} />
          <Route path="/formik-yup" element={<FormikYupPage />} />
          <Route path="/formik-components" element={<FormikComponents />} />
          <Route path="/formik-abs" element={<FormikAbstractation />} />



          <Route path="/*" element={<Navigate to="/home" replace />} />

        </Routes>
        

      </div>
        

    </BrowserRouter>
  )
}
