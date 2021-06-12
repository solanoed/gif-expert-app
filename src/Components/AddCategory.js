import React ,{useState}from 'react'
import PropTypes from 'prop-types'
export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState("")

    const handleInputChange = (e) =>{
        setinputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(cats =>[inputValue,...cats]);
            setinputValue("")
        }
        console.log(inputValue)
    }


    return (
        <form  onSubmit={handleSubmit}>
            <h2 className="animate__animated animate__fadeInLeft" >Add Category</h2>
            <input
                className ="animate__animated animate__fadeIn"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="   🔍️Type something to look for"
            />
        </form>
    )
    
}
AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}
