import React from 'react'

import './form-input.scss'

const FormInput = ({ name, placeholder, handleChange }) => {
    let str = placeholder.split(/(?=[A-Z])/).join(' ')
    let modifiedStr = placeholder.charAt(0).toUpperCase() + str.slice(1)

    var types = 'text'
    if (name === 'email') {
        types = 'email'
    }
    if (name === 'image' || name === 'resume') {
        types = 'file'
    }
    var input = <input type={types}
        placeholder={modifiedStr}
        name={name}
        id={name}
        className="form-control formcontrol"
        onChange={handleChange}
    />
    if (name === 'address' || name === 'summary') {
        input = <textarea placeholder={modifiedStr}
            className="form-control textarea" onChange={handleChange}
            id={name} name={name} rows="4" cols="50" />
    }
    // if (name === 'image') {
    //     input = <input type={types}
    //         placeholder={modifiedStr}
    //         name={name}
    //         id={name}
    //         className="form-control formcontrol"
    //         onChange={handleChange} />
    // }
    return (
        <React.Fragment>
            {input}
        </React.Fragment>
    )
}
export default FormInput;