// import { FormEvent} from 'react'

import { ErrorMessage, Field, Form, Formik } from 'formik'
// import { useForm } from '../hooks/useForm'


import * as Yup from 'yup';

import '../styles/styles.css'

export const RegisterFormikPage = () => {

    // const {
    //     email, name, password, password2, 
    //     formData, onChange, isValidEmail, reset} = useForm({

    //         'name': '',
    //         'email': '',
    //         'password': '',
    //         'password2': ''
    // })



    // const onSubmit = (event:FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     console.log(formData)
    // }



  return (
    <div>
        <h1>RegisterFormikPage</h1>
        
        <Formik
            initialValues={{
                'name': '',
                'email': '',
                'password': '',
                'rePassword': '',

            }}
            onSubmit={(env)=>{
                console.log('Este es el onSubmit',env)            
            }}
            validationSchema={Yup.object({
                'name': Yup.string()
                            .min(2, 'Debe de tener por lo menos 2 caracteres')
                            .max(15, 'Debe de contener por lo menos 15 caracteres')
                            .required('Este es un campo requerido'),
                'email': Yup.string()
                            .email()
                            .required('Este es un campo requerido'),
                'password': Yup.string()
                                .min(6, 'Debe de ser por lo menos de 6 caracteres')
                                .required('Este es un campo requerido'),
                'rePassword': Yup.string()
                                .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden')
                                .required('Este es un campo requerido')
                                // .test({
                                //     test(value, ctx){
                                        
                                //         console.log('este es el valor', Yup.ref('password').getter)
                                //         return 
                                //     }
                                // })
                                ,
            
            })}
        
        >
            { formik =>(
                    <Form>
                        <label htmlFor="name">Ingrese Su nombre</label>
                        <Field name='name' type='text' />
                        <ErrorMessage name='name' component='span' />



                        <label htmlFor="email">Ingrese Email</label>
                        <Field name='email' type='email' />
                        <ErrorMessage name='email' component='span' />



                        <label htmlFor="password">Ingrese Su constraseña</label>
                        <Field name='password' type='password' />
                        <ErrorMessage name='password' component='span' />



                        <label htmlFor="rePassword">Confirmar Contraseña</label>
                        <Field name='rePassword' type='text' />
                        <ErrorMessage name='rePassword' component='span' />


                        <button type='submit'>Subir</button>
                        <button onClick={formik.handleReset}>Reset</button>

                    </Form>
                )
            
            }



        </Formik>


{/* 
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

        </form> */}
    </div>
  )
}
