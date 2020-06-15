import React from 'react'

import './button.scss'

const Button = ({ value, onclick }) => (
    <input type="submit"
        className="button"
        name="" value={value}
        onClick={onclick} />
)

export default Button;