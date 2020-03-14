import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import MyContext from '../../../../store/MyContext'

const Skills = () =>(
    <MyContext.Consumer>
    {context =>(
        <React.Fragment>
            <div className="skills" style={{ boxShadow: "0 5px 11px #ccc", maxHeight: '75vh', overflow: 'auto' }}>
                <div className="card" style={{ overflow: 'auto' }}>
                    <div className="card-header"><FontAwesomeIcon icon={faStar} />{' '}SKILLS</div>
                    <div className="card-body">
                        <table className="table">
                            <tbody className="row">
                                {Object.keys(context.skills).map((item, id) => (
                                    <tr key={id} className="col-6 card" style={{ boxSizing: "border-box", boxShadow: "0px 1px 7px 2px #ccc" }}>
                                        <td align="center">
                                            <h6 >{context.skills[item].subject}</h6>
                                            <p>{context.skills[item].stars}</p>
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
        )}
    </MyContext.Consumer>
)

export default Skills;

