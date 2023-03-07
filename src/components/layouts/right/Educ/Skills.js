import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import MyContext from '../../../../store/MyContext'

const Skills = () => {
    const { Skills } = useContext(MyContext)
    return (
        <div className="skills" style={{ boxShadow: "0 5px 11px #ccc", maxHeight: '75vh', overflow: 'auto' }}>
            <div className="card" style={{ overflow: 'auto' }}>
                <div className="card-header"><FontAwesomeIcon icon={faStar} />{' '}SKILLS</div>
                <div className="card-body">
                    <table className="table">
                        <tbody className="row">
                            {(Skills) ? Object.keys(Skills).map((item, id) => (
                                <tr key={id} className="col-6 card1">
                                    <td align="center" className='skill-card'>
                                        <h6 >{Skills[item].subject}</h6>
                                        <p>{Skills[item].stars}</p>
                                    </td>
                                </tr>
                            )) : <div className="col-6 card">Record Not Available</div>}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}


export default Skills;

