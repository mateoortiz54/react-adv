import { Form, Formik } from "formik"
import { MySelect, MyTextInput } from "../components"

import * as Yup from 'yup'

import dataForm from '../data/custom-form.json'

const initialValues: { [x:string]:any } = {};
const requiredFields: { [x:string]:any } = {};

for (const input of dataForm) {
    initialValues[input.name] = input.value;

    if(!input.validations) continue;

    let schema = Yup.string();

    for (const rule of input.validations) {
        
        if (rule.type === 'required') {
            
            schema = schema.required('Este campo es requerido')
        }
        if (rule.type === 'minLength') {
            schema = schema.min((rule as any).value || 2, `El valor debe de ser minimo de ${(rule as any).value || 2} caracteres`)
        }
        if (rule.type === 'email') {
            
            schema = schema.email('La dirección de correo electronico es invalida')
        }

    }

    requiredFields[input.name] = schema;

    console.log(input.validations)

};



export const DynamicForm = () => {
  return (
    <Formik 
        initialValues={initialValues}
        onSubmit={(values)=>{
            console.log(values)
        }}
        validationSchema={Yup.object({...requiredFields})}
    >
        {formik=>(
                <Form noValidate>
                    {
                        dataForm.map(({name, label, type, placeholder, option})=> {

                            if (type === 'input' || type === 'email' || type === 'password'){
                                return <MyTextInput 
                                        key={name}
                                        label={label}
                                        name={name}
                                        type={(type as any)}
                                        placeholder={placeholder}
                                    />
                            
                            }else if (type==='select'){
                                return (
                                    <MySelect key={name} name={name} label={label}>
                                        <option value="">Select some option</option>
                                        {option?.map(({id, label})=><option key={id} value={id}>{label}</option>)}

                                    </MySelect>
                                
                            )}

                            throw new Error (`el type ${type} aún no es aceptado`)
                        })                   
                    }   
                    <button type="submit">Submit</button>

                </Form>

            )}
    </Formik>
  )
}

