import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'


const Links = (props) => {
    var items = props.links

    return (
        <React.Fragment>
            <div className="mylinks" >
                <div className="card" style={{ boxShadow: "0 5px 11px #ccc" }}>
                    <div className="card-header mylink-header">
                        <FontAwesomeIcon icon={faLink} />{' '}LINKS</div>
                    <div className="card-body" style={{ textAlign: 'center', paddingTop: '50px' }}>
                        {items.map((item, id) => (
                            <span key={id}>
                                <SocialIcon url={item.site_url} />{' '}
                            </span>
                        )
                        )}
                        <br /><br />
                        <hr style={{ width: '150px' }}></hr>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Links;
