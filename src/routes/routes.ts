import { lazy, LazyExoticComponent } from "react";
// import { LazyLayout } from "../01-lazyload/layout/LazyLayout";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    // cuando le enviamos un lazy, este devuelve un lazyExo... que devuelve un element, el cual se puede
    // entender como tambien un element que devuelve un jsx, por ese motivo le podemos decir en un type,
    // para que se acoja de manera correcta por el objeto de la lista, como que lo que devuelva sea un jsx
    // element, asi funcionaría de la manera correcta
    // TODO: tambien debemos configurar el suspense, que es para devolver cualquier tipo de elemento 
    // mientras que se carga el componente de lazy, lo hacemos antes del mismisimo BrowserRouter
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
} 
// Para los lazy se debe de dejar una exportación por defecto en los componentes 
const LazyLayout = lazy( () => import(/* webpackChunkName: "LazyPage1" */'../01-lazyload/layout/LazyLayout') );
console.log(LazyLayout)
// const Lazy2 = lazy( () => import(/* webpackChunkName: "LazyPage2" */'../01-lazyload/pages/LazyPage2') );
// const Lazy3 = lazy( () => import(/* webpackChunkName: "LazyPage3" */'../01-lazyload/pages/LazyPage3') );

export const routes:Route[] =[
    {
        to: '/lazyload/',
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'lazyLoad'
    },
    {
        path: 'no-lazy',
        to: '/no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    }
]