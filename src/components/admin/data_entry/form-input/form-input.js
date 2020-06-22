import React from 'react'

import './form-input.scss'

const FormInput = ({ name, placeholder, handleChange, value }) => {
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
        ? (<div className="input-group-prepend">
            <span className="input-group-text">{modifiedStr}</span>
        </div>) : ''

    if (name === 'image' || name === 'resume') {
        input = <div className="input-group mb-3">
            {label}
            <div className="custom-file">
                <input type="file" className="custom-file-input"
                    name={name} id="inputGroupFile01"
                    onChange={handleChange} title={`Select Your ${name}`} />
                <label className="custom-file-label" htmlFor="inputGroupFile01"></label>
            </div>
        </div>
    }
    if (name === 'birthDate' || name === 'createdOn' || name === 'joined') {
        input = <div className="input-group mb-3">
            {label}
            <div className="custom-file">
                <input type="date" className="custom-file-input"
                    name={name} id="inputGroupFile2"
                    onChange={handleChange}
                    title={`Select Your ${name}`} />
                <label className="custom-file-label" htmlFor="inputGroupFile2"></label>
            </div>
        </div>
    }
    return (
        <React.Fragment>
            {input}
        </React.Fragment>
    )
}
export default FormInput;