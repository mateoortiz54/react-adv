import { FormEvent} from 'react'
import { useForm } from '../hooks/useForm'

import '../styles/styles.css'

export const RegisterPage = () => {

    const {
        email, name, password, password2, 
        formData, onChange, isValidEmail, reset} = useForm({

            'name': '',
            'email': '',
            'password': '',
            'password2': ''
    })



    const onSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData)
    }



  return (
    <div>
        <h1>RegisterPage</h1>


        <form noValidate onSubmit={onSubmit}>  
            <input 
                type="text"
                placeholder="Name"
                name='name'
                value={name}
                onChange={(ev) => onChange(ev)}
                className={`${name.trim().length <= 0 && 'has-error'}`}
            />
            { name.trim().length <= 0 && <span>Este campo no puede estar vacío</span> }

            <input 
                type="email"
                placeholder="Correo"
                name='email'
                value={email}
                onChange={onChange}
                className={`${!isValidEmail(email) && 'has-error'}`}
            />
            { !isValidEmail(email) && <span>Debe de ingresar una dirección correcta</span> }

            <input 
                type="password"
                placeholder="Contraseña"
                name='password'
                value={password}
                onChange={onChange}
                className={`${ password.trim().length >= 0 && password !== password2 && 'has-error' } && 'has-error'}`}
            />
            { password.trim().length <= 0 && <span>Este campo no puede quedar vacío</span> }
            { password.trim().length >= 0 && password !== password2 && <span>Las contraseñas no coinciden</span> }

            
            <input 
                type="password"
                placeholder="Confirmar contraseña"
                name='password2'
                value={password2}
                onChange={onChange}
                className={`${ password.trim().length >= 0 && password !== password2 && 'has-error' } && 'has-error'}`}
            />
            { password2.trim().length <= 0 && <span>Este campo no puede quedar vacío</span> }
            { password2.trim().length >= 0 && password !== password2 && <span>Las contraseñas no coinciden</span> }

            <button type='submit'>Crear</button>
            <button onClick={reset}>Reset</button>

        </form>
    </div>
  )
}
