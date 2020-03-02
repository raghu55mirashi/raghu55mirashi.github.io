import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faClock, faCogs } from '@fortawesome/free-solid-svg-icons'
import thumb from '../right/thumb.png'

export default class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            records: []
        }
        this.fetchdata = this.fetchdata.bind(this)
    }
    componentDidMount() {
        this.fetchdata()
    }
    fetchdata() {
        fetch("https://djreact-portfolio.herokuapp.com/api/projects")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    records: data
                })
            })
    }
    render() {
        var items = this.state.records
        return (
            <React.Fragment>
                <div className="about" style={{ overflow: "auto", backgroundColor: 'transparent' }} >
                    <h1>
                        MY&nbsp;<span>PORTFOLIO</span>
                    </h1>
                    <hr style={{ width: "200px" }} />
                    {items.map((item, id) => (
                        <div key={id} className="card" style={{ marginBottom: "15px", boxShadow: "0 5px 11px #ccc" }}>
                            <div className="card-header" style={{ paddingBottom: 0, paddingTop: "5px" }}>

                                <h5>{item.project_name}</h5>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="project-img">
                                            <img src={!(item.image) ? thumb : item.image} alt="no pics" className="img-thumbnail" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p>
                                                            <FontAwesomeIcon icon={faUser} />&nbsp;<b>Client: {item.client}</b>
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p>
                                                            <FontAwesomeIcon icon={faClock} /><b> Duration: {item.duration}</b>
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p>
                                                            <FontAwesomeIcon icon={faCogs} /><b> Technologies: {item.technology}</b>
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="port-btn">
                                                            <a className="btn  btn1" style={{ backgroundColor: "#000", color: '#fff' }} href="#myModal">Preview</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}


// function Modalpop() {
//     return (
//         <div className="modal myModal" id="myModal">
//             <div className="modal-dialog">
//                 <div className="modal-content">
//                     <div className="modal-header">
//                         <h4 className="modal-title">Modal</h4>
//                         <button className="close" data-dismiss="modal">&times;</button>
//                     </div>
//                     <div className="modal-body">

//                     </div>
//                     <div className="modal-footer">
//                         <button className="btn btn-danger" data-dismiss="modal">close</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

