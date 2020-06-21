import React from 'react'

import './form-input.scss'

const FormInput = ({ name, placeholder, handleChange, value, editFormControl }) => {
    let str = placeholder.split(/(?=[A-Z])/).join(' ').slice(1)
    let modifiedStr = placeholder.charAt(0).toUpperCase() + str

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
        title={`Select Your ${name}`}
    />
    if (name === 'address' || name === 'summary') {
        input = <textarea placeholder={modifiedStr} value={value}
            className="form-control textarea" onChange={handleChange}
            name={name} rows="4" cols="50" title={`Select Your ${name}`} />
    }
    var label = !value
        ? (<label id="custom-label">{modifiedStr}</label>) : ''
    if (name === 'image' || name === 'resume') {
        input = <span>
            {label}
            <input type="file"
                name={name}
                className={`${editFormControl ? 'editFormContrl' : ''} formcontrol`}
                onChange={handleChange} title={`Select Your ${name}`} />
        </span>
    }
    if (name === 'birthDate' || name === 'createdOn' || name === 'joined') {
        input = <span>
            {label}
            <input type="date"
                name={name}
                className={`${editFormControl ? 'editFormContrl' : ''} formcontrol`}
                onChange={handleChange}
                title={`Select Your ${name}`} />
        </span>
    }
    return (
        <React.Fragment>
            {input}
        </React.Fragment>
    )
}
export default FormInput;