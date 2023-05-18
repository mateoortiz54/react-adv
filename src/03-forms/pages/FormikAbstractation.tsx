import { Formik, Form } from 'formik'
import * as Yup from 'yup';

import { MyTextInput, MySelect, MyCheckbox } from '../components';

import '../styles/styles.css'


export const FormikAbstractation = () => {

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
                        <MyTextInput 
                            name='firstName' 
                            label='First Name'
                            placeholder='Mateo'
                         />

                        <MyTextInput 
                            name='lastName' 
                            label='Last Name'
                            placeholder='Ortiz'
                         />
                        <MyTextInput 
                            name='email' 
                            label='Email Address'
                            placeholder='mateo@gmail.com'
                            type='email'
                        />
                        <MySelect  name="typeJob" label='Job Type'>
                            <option value=''>Pick something</option>
                            <option value='developer'>Developer</option>
                            <option value='designer'>Designer</option>
                            <option value='it-sn'>It Senior</option>
                            <option value='it-jn'>It Junior</option>
                        </MySelect>


                        <MyCheckbox 
                            name="terms" 
                            label='Terms and condition'                          
                        />            


                        <button type='submit'>Submit</button>
            
            
            
                    </Form>
        )
            }

        </Formik>



        
    </div>
  )
}
