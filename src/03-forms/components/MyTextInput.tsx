import { useField, ErrorMessage } from 'formik';

interface Props {
    name: string,
    label: string,
    placeholder?:string,
    type?: 'text' | 'email' | 'password',
    [x: string]: any,

}


export const MyTextInput = ({label, ...props}: Props) => {
    
    // [field, meta]
    const [field] = useField(props);


    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className='text-input' {...field}{...props} />
            <ErrorMessage name={props.name} component="span" />

            {/* {
                meta.touched && meta.error && (
                        <span className='error'>{meta.error}</span>
                    )
            } */}
        
        </>
    )





}
