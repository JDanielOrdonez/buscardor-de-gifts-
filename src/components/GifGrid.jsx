// import { useEffect } from "react";
// import { useState } from "react";

import { GifItem } from "./GifItem";

// import { getGifts } from "../helpers/getGifts";
import { useFetchGifts } from "../hooks/useFetchGifts";

export const GifGrid = ( { category } ) => {

    //CON CUSTOM HOOK
    //Mandamos a llamar al Hook o funcion, le pasamos la categoria y al mismo tiempo desestructuramos lo que devuelva
    const { images, isLoading } = useFetchGifts(category);
    console.log({images, isLoading});



    //SIN CUSTOM HOOK
    // const [images, setImages] = useState([]);

    // const getImages = async() => {
    //   const newImages = await getGifts(category);
    //   setImages(newImages);
    // }

    //UseEfect permite ejecutar un codigo sin afectar lo demas que este dentro del mismo componente
    // useEffect(() => {
    //   getImages();
    //}, [])si eso entre llaves esta vacio significa que solo se disparara una vez cuando se construya el componente
    

    return (
    <>
        <h3>{ category }</h3>

        {/* Si isLoading es true mostrar Cargando sino(:) poner nada o null */}
        {
          isLoading
            ? ( <h2 h2>Cargando...</h2> )
            : null

            // si is loading es true regresa cargando, si no solo regresa false
          // isLoading && ( <h2 h2>Cargando...</h2> )
        }  
        <div className="card-grid">          
          {
            // mostramos el titulo de las imagenes
            // imagenes.map( {title, id} => () ) == usando desestructuracion

            // images.map( img => (
            //   <li key={ img.id }> { img.title } </li>
            // ))
          
            //Enviamos la el titulo de la imagen y su url al nuevo componente
            images.map( (img) => (
              <GifItem key={ img.id }
                title={ img.title }
                url={ img.url }

                // {...img} = con esto podemos enviar todo(title, url, id) al componente GifItem de una, se envia como una prop(property)
              />
            ))
          }          
        </div>
    </>
  )
}