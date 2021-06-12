import React from 'react'
import {  useFetchGifs } from '../hooks/useFetchGifs'
//  
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({category}) => {
    
    // const [images, setImages] = useState([])

    // useEffect(()=>{
    //     getGifs(category).then(setImages);
    // } ,[category])
    const {data:images,loading} = useFetchGifs(category);
    
    // getGifs();
    return (
        <>
            <h3 className="title animate__animated animate__fadeInDown" >{category}</h3>
            {loading && <p className="animate__animated animate__pulse" >Loading</p>}
            <div className="card-grid">
                
                {
                    images.map( img => (
                        <GifGridItem 
                        key={img.id}
                        {...img}
                        
                        />
                    ) )
                }
                
            </div>
        </>
    )
}
