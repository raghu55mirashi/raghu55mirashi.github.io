import React, { useContext } from 'react'
import { SocialIcon } from 'react-social-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import MyContext from '../../../store/MyContext'

const Links = () => {
    const { Links } = useContext(MyContext)

    return (
        <React.Fragment>
            <div className="mylinks" >
                <div className="card" style={{ boxShadow: "0 5px 11px #ccc" }}>
                    <div className="card-header mylink-header">
                        <FontAwesomeIcon icon={faLink} />{' '}LINKS</div>
                    <div className="card-body" style={{ textAlign: 'center', paddingTop: '50px' }}>
                        {Links ? Object.keys(Links).map(item => (
                            <span key={item}>
                                <SocialIcon url={Links[item].siteUrl} target="_blank"/>{' '}
                            </span>
                        )
                        ) : <div>Record Not Available</div>}
                        <br /><br />
                        <div>
                            <hr style={{ width: '150px', display: 'inline-block' }}></hr>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Links;
