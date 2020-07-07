import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import MyContext from '../../../store/MyContext'
import GetImageURL from '../getImageURL/getImageURL'

const Home = () => {
    const { Personal } = useContext(MyContext)
    return (
        <React.Fragment>
            {Personal ? Object.keys(Personal).map(item => (
                <div key={item} className="home">
                    <h2> Hi ! I'M {Personal[item].firstName.toUpperCase()}</h2>
                    <br />
                    <h4> I'M {Personal[item].designation}</h4>
                    <br />
                    <Link to="/about" className="btn btn1" style={{ border: "1px solid #fff" }}>
                        <FontAwesomeIcon icon={faUser} />{' '}About Me</Link>{' '}
                    <GetImageURL urlName={Personal[item].resume} />
                </div>
            )) : <div className="home">Record Not Available</div>}

        </React.Fragment>
    )
}

export default Home;
