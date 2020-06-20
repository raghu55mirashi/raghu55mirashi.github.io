import React from 'react'

import './form-input.scss'

const FormInput = ({ name, placeholder, handleChange, value }) => {
    let str = placeholder.split(/(?=[A-Z])/).join(' ')
    let modifiedStr = placeholder.charAt(0).toUpperCase() + str.slice(1)

    var types = 'text'
    if (name === 'email') {
        types = 'email'
    }

    var input = <input type={types}
        placeholder={modifiedStr}
        name={name}
        value={value}
        className="form-control formcontrol"
        onChange={handleChange}
    />
    if (name === 'address' || name === 'summary') {
        input = <textarea placeholder={modifiedStr} value={value}
            className="form-control textarea" onChange={handleChange}
            name={name} rows="4" cols="50" />
    }
    if (name === 'image' || name === 'resume') {
        input = <span>
            <label style={{ padding: "4px 20px", backgroundColor: "#283054", color: '#6c757d' }}>Select {modifiedStr}</label>
            <input type="file"
                name={name}
                className="formcontrol"
                // value={value}
                onChange={handleChange} title="Select Your Image" />
        </span>
    }
    return (
        <React.Fragment>
            {input}
        </React.Fragment>
    )
}
export default FormInput;