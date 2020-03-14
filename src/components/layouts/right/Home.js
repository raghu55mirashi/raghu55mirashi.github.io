import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faDownload } from '@fortawesome/free-solid-svg-icons'
import MyContext from '../../../store/MyContext'

const Home = () => (
        <MyContext.Consumer>
        {context =>(
            
            <React.Fragment>
            {Object.keys(context.personaldata).map(item =>(
                <div key={item} className="home">
                <h1> Hi ! I'M {context.personaldata[item].firstname.toUpperCase()}</h1>
                <br />
                <h4> I'M {context.personaldata[item].designation.toUpperCase()}</h4>
                <br />
                <Link to="/about" className="btn btn1" style={{ border: "1px solid #fff" }}>
                    <FontAwesomeIcon icon={faUser} />{' '}About Me</Link>{' '}
                    <a className="btn btn1" id="res" style={{ border: "1px solid #fff" }}
                        href={context.url + context.personaldata[item].resume} target="_blank" rel="noopener noreferrer" download>
                        <FontAwesomeIcon icon={faDownload} />{' '}My Resume</a>
            </div>
            ))}
            
            </React.Fragment>
        )}
       
        </MyContext.Consumer>
    );

export default Home;
