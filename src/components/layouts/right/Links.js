import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import MyContext from '../../../store/MyContext'

const Links = () => (
    <MyContext.Consumer>
        {context => (
            <React.Fragment>
                <div className="mylinks" >
                    <div className="card" style={{ boxShadow: "0 5px 11px #ccc" }}>
                        <div className="card-header mylink-header">
                            <FontAwesomeIcon icon={faLink} />{' '}LINKS</div>
                        <div className="card-body" style={{ textAlign: 'center', paddingTop: '50px' }}>
                            {(context.Links) ? Object.keys(context.Links).map(item => (
                                <span key={item}>
                                    <SocialIcon url={context.Links[item].siteUrl} />{' '}
                                </span>
                            )
                            ) : <div>Record Not Available</div>}
                            <br /><br />
                            <hr style={{ width: '150px' }}></hr>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )}
    </MyContext.Consumer>

)

export default Links;
