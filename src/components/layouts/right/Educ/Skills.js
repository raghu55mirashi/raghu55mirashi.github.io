import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Skills = props => {
    var items = props.skills
    return (
        <React.Fragment>
            <div className="skills" style={{ boxShadow: "0 5px 11px #ccc", maxHeight: '75vh', overflow: 'auto' }}>
                <div className="card" style={{ overflow: 'auto' }}>
                    <div className="card-header"><FontAwesomeIcon icon={faStar} />&nbsp;SKILLS</div>
                    <div className="card-body">
                        <table className="table">
                            <tbody className="row">
                                {items.map((item, id) => (
                                    <tr key={id} className="col-6 card" style={{ boxSizing: "border-box", boxShadow: "0px 1px 7px 2px #ccc" }}>
                                        <td align="center">
                                            <h6 >{item.subject}</h6>
                                            <p>{item.stars}</p>
                                        </td>
                                    </tr>
                                )
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Skills;

