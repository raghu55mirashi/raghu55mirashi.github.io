import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faClock, faCogs } from '@fortawesome/free-solid-svg-icons'
import thumb from '../right/thumb.png'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import MyContext from '../../../store/MyContext'
// import Spinner from '../../UI/Spinner/Spinner'

export default class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggleModal: false,
            selectModal: null,
            loading: false
        }
    }
    // static contextType = MyContext

    onOpenModal = id => {
        this.setState({
            toggleModal: true,
            selectModal: id
        })
    }

    onCloseModal = () => {
        this.setState({
            toggleModal: false
        })
    }

    render() {
        // let portfolio = null;


        // if(this.state.loading){
        //     portfolio = <Spinner />
        // }
        return (
            <MyContext.Consumer>
                {context => (
                    <React.Fragment>
                        <div className="about" style={{ overflow: "auto", backgroundColor: 'transparent' }} >
                            <h1>
                                MY{' '}<span>PORTFOLIO</span>
                            </h1>
                            <hr style={{ width: "200px" }} />
                            {Object.keys(context.portfolio).map((item, id) => (
                                <div key={id} className="card" style={{ marginBottom: "15px", boxShadow: "0 5px 11px #ccc" }}>
                                    <div className="card-header" style={{ paddingBottom: 0, paddingTop: "5px" }}>
                                        <h5>{context.portfolio[item].project_name}</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="project-img">
                                                    <img src={!(context.portfolio[item].image) ? thumb : context.portfolio[item].image} alt="no pics" className="img-thumbnail" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <p>
                                                                    <FontAwesomeIcon icon={faUser} />&nbsp;<b>Client: {context.portfolio[item].client}</b>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <p>
                                                                    <FontAwesomeIcon icon={faClock} /><b> Duration: {context.portfolio[item].duration}</b>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <p>
                                                                    <FontAwesomeIcon icon={faCogs} /><b> Technologies: {context.portfolio[item].technology}</b>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="port-btn" style={{ textAlign: "right" }}>
                                                                    <Button className="btn btn1" onClick={() => this.onOpenModal(id)} style={{ backgroundColor: "#000", color: '#fff' }} >Preview</Button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    <Modal isOpen={this.state.selectModal === id && this.state.toggleModal} toggle={this.toggleModal} style={{ top: "30%", transform: "translate(0%, -5%)" }}>
                                        <ModalHeader className="justify-content-center" style={{ backgroundColor: '#dee2e6' }} toggle={this.toggleModal}>{context.portfolio[item].project_name}</ModalHeader>
                                        <ModalBody style={{ backgroundColor: '#dee2e6' }}>
                                            <h5>Project Description: </h5>
                                            {context.portfolio[item].description}
                                        </ModalBody>
                                        <ModalFooter style={{ backgroundColor: '#dee2e6' }}>
                                            <a className="btn btn1" href={context.portfolio[item].site_url}>Goto Site</a>{' '}
                                            <Button color="secondary" onClick={this.onCloseModal}>Cancel</Button>
                                        </ModalFooter>
                                    </Modal>

                                </div>
                            ))}
                        </div>
                    </React.Fragment>
                )}
            </MyContext.Consumer>
        )
    }
}


