import React from 'react'

import './button.scss'

const Button = ({ type = 'button', value, onclick }) => (
    <input type={type}
        className="button"
        value={value}
        onClick={onclick} />
)

export default Button;