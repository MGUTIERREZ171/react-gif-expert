
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({category}) => {

  const { images,isLoading } = useFetchGifs( category );

// codigo para realizar un loading de las imagenes
  return (
    <>
        <h3>{category}</h3>
        {
          isLoading &&  (<h2>Cargando...</h2>)
        }
{/* mostrar las imagenes en pantalla dentro de un cuadro con formato */}
        <div className="card-grid">
            {
              images.map((image) => (
                <GifItem
                    key={image.id}
                    // se esparce image por el gifitem
                    {...image}
                />
              ))
            }
        </div>
    </>
  )
}
