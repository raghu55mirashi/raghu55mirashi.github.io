import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faDownload } from '@fortawesome/free-solid-svg-icons'
import MyContext from '../../../store/MyContext'
import getImageURL from '../getImageURL/getImageURL'

const Home = () => (
    <MyContext.Consumer>
        {context => (
            <React.Fragment>
                {Object.keys(context.Personal).map(item => (
                    <div key={item} className="home">
                        <h2> Hi ! I'M {context.Personal[item].firstName ? context.Personal[item].firstName.toUpperCase() : ''}</h2>
                        <br />
                        <h4> I'M {context.Personal[item].designation}</h4>
                        <br />
                        <Link to="/about" className="btn btn1" style={{ border: "1px solid #fff" }}>
                            <FontAwesomeIcon icon={faUser} />{' '}About Me</Link>{' '}
                        <a className="btn btn1" id={context.Personal[item].resume} style={{ border: "1px solid #fff" }}
                            href={!(context.Personal[item].resume) ? '' : getImageURL(context.Personal[item].resume)} target="_blank" rel="noopener noreferrer" download>
                            <FontAwesomeIcon icon={faDownload} />{' '}My Resume</a>
                    </div>
                ))}

            </React.Fragment>
        )}

    </MyContext.Consumer>
);

export default Home;
