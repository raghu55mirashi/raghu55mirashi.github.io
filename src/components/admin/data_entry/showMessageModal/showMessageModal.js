import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import Swal from 'sweetalert2'
import { database } from '../../../../firebase/firebase'
import Button from '../button/button'

class ShowMessageModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: {},
            url: 'https://react-porfolio.firebaseio.com'
        }
    }

    componentDidMount() {
        this.setState({
            messages: this.props.messages
        })
    }
    componentDidUpdate() {
        this.showMessages()
    }

    showMessages() {
        fetch(`${this.state.url}/contactus.json`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    messages: data
                })
            })
    }

    handleDelete = (key) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                database
                    .ref('contactus/' + key)
                    .remove()
                    .then(() => {
                        Swal.fire(
                            'Deleted!',
                            'Message has been deleted.',
                            'success'
                        )
                    })
            }
        })
    }

    render() {
        const { messages } = this.state
        const { showMessageModal, hideMessageModal } = this.props
        return (
            <React.Fragment>
                <Modal isOpen={showMessageModal} className="field-modal">
                    <ModalHeader className="justify-content-center field-modal-header">
                        Contacts
                        <div className="close">
                            <button type="button" className="btn close-btn" onClick={hideMessageModal}>x</button>
                        </div>
                    </ModalHeader>
                    <ModalBody className="field-modal-body">
                        <div className="table-responsive field-modal-body-div" >
                            <table className="table table-striped" >
                                <thead>
                                    <tr>
                                        <td><b>Email</b></td>
                                        <td><b>Message</b></td>
                                        <td><b>Subject</b></td>
                                        <td><b>User</b></td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(messages).map((item, id) => (
                                        <tr key={item}>
                                            {Object.keys(messages[item]).map(it =>
                                                <td key={it}>{messages[item][it]}</td>
                                            )}
                                            <td>
                                                <button className="btn btn-danger" onClick={() => this.handleDelete(item)}>delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </ModalBody>
                    <ModalFooter style={{ backgroundColor: '#dee2e6', padding: 'unset' }}>
                        <Button value="Close" onclick={hideMessageModal} />
                    </ModalFooter>
                </Modal>

            </React.Fragment>
        )
    }
}

export default ShowMessageModal;
