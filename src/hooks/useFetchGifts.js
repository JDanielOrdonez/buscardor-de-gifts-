//este es un Custom Hook para regresar las imagenes
//un CUstom Hook es un Hook personalizado para regresar las propiedades y metodos que querramos
//Hook es una funcion que regresa algo

import { useEffect } from "react";
import { useState } from "react";
import { getGifts } from "../helpers/getGifts"; 


export const useFetchGifts = ( category ) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);    

    const getImages = async() => {
      const newImages = await getGifts(category);
      setImages(newImages);
      setIsLoading(false);
    }

    //UseEfect permite ejecutar un codigo sin afectar lo demas que este dentro del mismo componente
    useEffect(() => {
      getImages();
    }, [])


  return {
      images: images,
      isLoading: isLoading
  }
}
