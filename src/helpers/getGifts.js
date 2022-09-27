//FUNCION PARA OBTENER LAS IMAGENES DEL API
export const getGifts = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=nNuK4aAoNyz9Ngj3QZPuWiUArvBEyXgs&q=${category}&limit=10`;
    const resp = await fetch(url);    
  
    //desestructuramos la data que regreso la peticion anterior 
    const { data } = await resp.json();
  
    //Mapeamos los datos de la respuesta
    const gifts = data.map( img=> ({ 
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
     }))
  
    console.log(gifts);
    return gifts;
  }