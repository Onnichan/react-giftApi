import React, { Fragment } from 'react'
import { useFecthGifs } from '../hooks/useFetchGif';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  // const [images, setImages] = useState([]);

  const { data:images, loading } = useFecthGifs(category);

  //IGUAL QUE COMPONENTDIDMOUNT

  return (
    <Fragment>
      <h3>{ category }</h3>
        { loading && <div>'Cargando...'</div> } 
        <div className="card-grid">
          {images.map((image)=>{
            return <GifGridItem key={image.id} {...image}></GifGridItem>; 
          })}                
        </div> 
    </Fragment>
  )
}
