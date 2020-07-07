import React, { useContext } from 'react'
import MyContext from '../../../store/MyContext'
import GetImageURL from '../getImageURL/getImageURL'
import thumb from '../right/thumb.png'

const LeftPane = () => {
    const { Personal } = useContext(MyContext)
    return (
        <React.Fragment>
            {(Personal) ? Object.keys(Personal).map((item, id) => (
                <span key={id}>
                    <div className="card" style={{ border: 'unset' }}>
                        <div className="card-header" style={{ padding: 'unset', border: 'unset', backgroundColor: '#e9ecef' }}>
                            <div className="leftPane-div">
                                {Personal[item].image
                                    ? <GetImageURL urlName={Personal[item].image} />
                                    : <img src={thumb} alt="no pics" className="rounded img-fluid" />
                                }
                            </div>
                        </div>
                    </div>
                    <div className="card current">
                        <div className="card-header">{Personal[item].latestTech}</div>
                    </div>
                </span>
            )) : <div className="card">Record Not Available</div>}
        </React.Fragment>
    )
}

export default LeftPane;