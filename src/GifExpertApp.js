import React ,{useState} from 'react'
import { AddCategory } from './Components/AddCategory'
import { GifGrid } from './Components/GifGrid'

const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(["Dragon Ball"])
    // const handleAdd = ()=>{
    //     //Mi solucion
    //     // setCategories(categories.concat("Pokemon"));
    //     //Solucion del profesor
    //     setCategories([...categories,"Pokemon"])
    // }
    // console.log(categories)
    
    return (
        <div>
            <h2 className="message">Made with ❤️ by Letreveux</h2>
            <h2 className="title1 animate__animated animate__fadeInDown">GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr></hr>
            {/* <button onClick={handleAdd} >Agregar</button> */}
            <ol>
                {
                    categories.map(category =>
                        <GifGrid 
                        key={category}
                        category ={category}
                        />                        
                    )
                }
            </ol>

        </div>
    )
}

export default GifExpertApp
