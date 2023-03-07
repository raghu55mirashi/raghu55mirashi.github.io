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
                    <div className="card left-div">
                        <div className="card-header" style={{ padding: '35px', border: 'unset', backgroundColor: 'rgb(0 253 153)', borderBottom: 'unset', minHeight: '40vh' }}>
                            <div className="leftPane-div" style={{ width: "175px", margin: "0 auto" }}>
                                {Personal[item].image
                                    ? <GetImageURL urlName={Personal[item].image} className="rounded img-fluid"/>
                                    : <img src={thumb} alt="no pics" className="rounded img-fluid" />
                                }
                            </div>
                        </div>
                        <div className="card-header descr"><span>{Personal[item].latestTech}</span></div>

                    </div>
                </span>
            )) : <div className="card">Record Not Available</div>}
        </React.Fragment>
    )
}

export default LeftPane;