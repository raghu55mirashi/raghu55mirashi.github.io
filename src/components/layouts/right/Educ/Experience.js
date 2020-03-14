import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks, faCalendar, faCogs } from '@fortawesome/free-solid-svg-icons'
import MyContext from '../../../../store/MyContext'

const Experience = () => (
    <MyContext.Consumer>
    {context =>(
        <React.Fragment>
                <div className="experience" >
                    <div className="card" style={{ boxShadow: "0 5px 11px #ccc", overflow: 'auto' }}>
                        <div className="card-header">
                            <FontAwesomeIcon icon={faTasks} />{' '}EXPERIENCE</div>
                        {Object.keys(context.experience).map((item, id) => (
                            <div key={id} className="card-body" style={{ paddingBottom: 0 }}>
                                <div className="header1">
                                    <h6><span>{context.experience[item].designation} </span>- {context.experience[item].company}</h6>
                                    <p><FontAwesomeIcon icon={faCalendar} />{'  '}{context.experience[item].duration}</p>
                                    <p><FontAwesomeIcon icon={faCogs} /> {'  '}{context.experience[item].technology}</p>
                                    <p>{context.experience[item].summary}</p>
                                </div>
                                <hr />
                            </div>
                        ))
                        }
                    </div>
                </div>
            </React.Fragment>
    )}
    </MyContext.Consumer>
);
  

export default Experience



