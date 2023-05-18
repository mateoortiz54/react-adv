import { Formik, Form, Field, ErrorMessage } from 'formik'

import * as Yup from 'yup';

import '../styles/styles.css'

// interface FormValues {
//     firstName: string;
//     lastName: string;
//     email: string;
// }


export const FormikComponents = () => {

  return (
    <div>
        <h1>FormikComponents</h1>

        <Formik
            initialValues={{
                'firstName':'Mateo',
                'lastName': '',
                'email': '',
                'terms':false,
                'typeJob': '', 
            }}
            onSubmit={(values)=>{
                console.log(values, 'desde yup')
            }}
            validationSchema={Yup.object({
                'firstName': Yup.string()
                                .max(15, 'Debe de tener 15 caracteres o menos')
                                .required('Requerido'),
                'lastName': Yup.string()
                                .max(10, 'Debe de tener 10 caracteres o menos')
                                .required('Requerido'),
                'email': Yup.string()
                                .email('El correo no tiene un formato valido')
                                .required('Requerido'),
                'terms': Yup.boolean()
                                .oneOf([true], 'Debe de aceptar los terminos y condiciones'),
                'typeJob': Yup.string()
                                .notOneOf(['it-jn'], 'Esta opción no es permitida.' )
                                .required(),
                                
            })}
        
        >
            {
                formik => (
                    <Form>
                        <label htmlFor="firstName">Fisrt Name</label>
                        <Field  name="firstName" type='text'/>
                        <ErrorMessage name='firstName' component='span' />

                        <label htmlFor="lastName">Last Name</label>
                        <Field  name="lastName" type='text'/>
                        <ErrorMessage name='lastName' component='span' />
            
                        <label htmlFor="email">email Address</label>
                        <Field  name="email" type='email'/>
                        <ErrorMessage name='email' component='span' />
            
                        <label htmlFor="typeJob">email Address</label>
                        <Field  name="typeJob" as='select'>
                            <option value=''>Pick something</option>
                            <option value='developer'>Developer</option>
                            <option value='designer'>Designer</option>
                            <option value='it-sn'>It Senior</option>
                            <option value='it-jn'>It Junior</option>
                        </Field>
                        <ErrorMessage name='typeJob' component='span' />


                        <label>
                            <Field  name="terms" type='checkbox'/>
                            Terms and condition
                        </label>
                        <ErrorMessage name='terms' component='span' />
            


                        <button type='submit'>Submit</button>
            
            
            
                    </Form>
        )
            }

        </Formik>



        
    </div>
  )
}
