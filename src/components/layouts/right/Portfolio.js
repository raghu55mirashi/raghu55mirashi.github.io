import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faClock, faCogs } from '@fortawesome/free-solid-svg-icons'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import MyContext from '../../../store/MyContext'
import GetImageURL from '../getImageURL/getImageURL'

export default class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggleModal: false,
            selectModal: null,
            loading: true
        }
    }

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

        return (
            <MyContext.Consumer>
                {context => {
                    return (
                        <React.Fragment>
                            <div className="about" style={{ overflow: "auto", backgroundColor: 'transparent', height: '81vh' }} >
                                <h1>
                                    MY{' '}<span>PORTFOLIO</span>
                                </h1>
                                <hr style={{ width: "200px" }} />
                                {(context.Portfolio) ? Object.keys(context.Portfolio).map((item, id) => (
                                    <div key={id} className="card" style={{ marginBottom: "15px", boxShadow: "0 5px 11px #ccc" }}>
                                        <div className="card-header" style={{ paddingBottom: 0, paddingTop: "5px" }}>
                                            <h5>{context.Portfolio[item].projectName}</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="project-img">
                                                        <GetImageURL urlName={context.Portfolio[item].image} />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <p>
                                                                        <FontAwesomeIcon icon={faUser} />&nbsp;<b>Client: {context.Portfolio[item].client}</b>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <p>
                                                                        <FontAwesomeIcon icon={faClock} /><b> Duration: {context.Portfolio[item].duration}</b>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <p>
                                                                        <FontAwesomeIcon icon={faCogs} /><b> Technologies: {context.Portfolio[item].technology}</b>
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

                                        <Modal isOpen={this.state.selectModal === id && this.state.toggleModal}
                                            toggle={this.toggleModal} style={{ top: "30%", transform: "translate(0%, -5%)" }}>
                                            <ModalHeader className="justify-content-center"
                                                style={{ backgroundColor: '#dee2e6' }}
                                                toggle={this.toggleModal}>{context.Portfolio[item].projectName}
                                            </ModalHeader>
                                            <ModalBody style={{ backgroundColor: '#dee2e6' }}>
                                                <h5>Project Description: </h5>
                                                {context.Portfolio[item].description}
                                            </ModalBody>
                                            <ModalFooter style={{ backgroundColor: '#dee2e6' }}>
                                                <a className="btn btn1" href={context.Portfolio[item].siteUrl}>Goto Site</a>{' '}
                                                <Button color="secondary" onClick={this.onCloseModal}>Cancel</Button>
                                            </ModalFooter>
                                        </Modal>

                                    </div>
                                )) : <div className="card">Record Not Available</div>}
                            </div>
                        </React.Fragment>
                    )
                }
                }
            </MyContext.Consumer>
        )
    }
}
