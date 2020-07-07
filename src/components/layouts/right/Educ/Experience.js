import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks, faCalendar, faCogs } from '@fortawesome/free-solid-svg-icons'
import MyContext from '../../../../store/MyContext'

const Experience = () => {
    const { Experience } = useContext(MyContext)
    return (
        <div className="experience" >
            <div className="card" style={{ boxShadow: "0 5px 11px #ccc", overflow: 'auto' }}>
                <div className="card-header">
                    <FontAwesomeIcon icon={faTasks} />{' '}EXPERIENCE</div>
                {(Experience) ? Object.keys(Experience).map((item, id) => (
                    <div key={id} className="card-body" style={{ paddingBottom: 0 }}>
                        <div className="header1">
                            <h6><span>{Experience[item].designation} </span>- {Experience[item].company}</h6>
                            <p><FontAwesomeIcon icon={faCalendar} />{'  '}{Experience[item].duration}</p>
                            <p><FontAwesomeIcon icon={faCogs} /> {'  '}{Experience[item].technology}</p>
                            <p>{Experience[item].summary}</p>
                        </div>
                        <hr />
                    </div>
                )) : <div className="card-body">Record Not Available</div>}
            </div>
        </div>
    )
}


export default Experience



