import {useState} from 'react';
import { AddCategory,GifGrid } from './components';


// componente
export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch']);

    const onAddCategory = (newCategory) => {
        // console.log(newCategory)

        // si la categoria existe no hace nada
        if(categories.includes(newCategory) ) return;

        // En caso de que no exista se agrega a la lista
        setCategories([newCategory, ...categories ]);
        // setCategories(cat => [...cat, 'Valorant']);
    }

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
            // setCategories={ setCategories }
            onNewCategory={(value) => onAddCategory(value)}

        />
       
            {
                categories.map( category => (
                       <GifGrid 
                            key={category} 
                            category={category} />
                ))
            }
    
    </>
  )
}


