import { useState } from "react"

export const AddCategory = ( { onNewCategory } ) => {
    
    const [inputValue, setinputValue] = useState('One Puch')
    
    // (e) son los valores que manda onChange cuando hay un cambio en el input
    //con (e) accedemos a los valores que puso el usuario y lo escribimos en el input con setInputValue
    const onInputChange = ( event ) => {        
        setinputValue(event.target.value);
        // console.log(event.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        //Si el los valores del input son menores o iguales a 1 no hacer nada
        //trim() limpiar los espacios o tabulaciones escritas en el input
        if (inputValue.trim().length <= 1) return; 

        //Agregamos los valores del input con setCategories pasandole una funcion callback
        // setCategories(categories => [inputValue, ...categories])
        // console.log(inputValue);


        //Agregamos los valores del input 
        onNewCategory(inputValue.trim());
        
        //Limpiamos el input
        setinputValue('');
    }

    return (
    <form onSubmit={ onSubmit }>
        <input 
            type="text" 
            placeholder="Buscar gifts"
            // value= lo que valla escribiendo el usuario se guarda en inputValue
            value={ inputValue }
            //onChange= cuando halla un cambio se dispara esa funcion
            onChange={ onInputChange }
        />
    </form>
  )
}
