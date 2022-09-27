import { useState } from "react";

import { AddCategory, GifGrid } from "./components"; //aqui importamos todo lo que contenga ./components/index.js

export const GiftExpertApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball Super']);

  const onAddCategory = ( newCategory ) => {

    //con este if evaluamos si la nueva categoria ya existe en el arreglo, lo pasamos a minuscula
    if (categories.find(category => category.toLowerCase() === newCategory.toLowerCase())) return;
    
    // [...categories, 'valorant']= agregamos nuevo elemento al array 
    //si pones primero lo que se va a agregar, eso se pone primero en la pagina :V
    setCategories( [ newCategory, ...categories ] );
    
  }

  return (
    <>
        {/* titulo */}
        <h1>GiftExpertApp</h1> 
         
        {/* input */}
        {/* El input esta en otro componente */}
        {/* Enviamos una funcion de tipo state */}
        {/* <AddCategory setCategories={ setCategories }/> */}

        <AddCategory 
        // cuando lleva on al principio significa que esta emitiendo algo(un evento)
          onNewCategory={ (value) => onAddCategory(value) }
        />


        {/* Listado de gif */}
        {/* <ol> */}
          {/* con el map recorremos cada elemento y podemos hacer algo con cada uno de los elementos del arreglo */}
          {/* el key es algo unico por cada elemento devuelto de un mapa */}
          {/* { categories.map( category => {
            return <li key={ category }> { category } </li>;
          })} */}
        
        {
          categories.map((category) => (
              // <div key={ category }>
              //   <h3>{ category }</h3>
              //   <li>{ category }</li>
              // </div>

              <GifGrid key={ category } category={ category } />
            
            ))
        }
        {/* </ol> */}


            {/* Gif item */}
    </>
  )

}
// export default GiftExpertApp
