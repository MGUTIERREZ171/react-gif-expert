import { useState } from 'react';

// se sgrega el prop de setCategories
export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');
    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault(); //evita que se haga un refresh del navegador web
        if(inputValue.trim().length <= 1) return;

        // se hace un callback  a categories
        //se inserta un valor que escribimos por medio de input a a la lista
        // setCategories(categories => [inputValue, ...categories]) 

        
        // se borra el valor que se escribe en el input
        setInputValue('');
        onNewCategory(inputValue.trim()) 
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={ onInputChange }
            />
        </form>
    )
}
