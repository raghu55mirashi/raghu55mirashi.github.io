import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import Swal from 'sweetalert2'
import './show_modal.scss'
import SortedFields from '../form-fields/sorted-fields.json'
import { database } from '../../../../firebase/firebase'

class ShowModel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    handleDelete = (key, section) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                database.ref(section + '/' + key).remove()
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

    render() {
        var { itemKey, onOpenModal } = this.props
        var itemk = itemKey.toString()
        if (!itemKey) {
            itemk = 'Personal'
        }
        return (
            <React.Fragment>
                <Modal isOpen={onOpenModal} id="field-modal">
                    <ModalHeader className="justify-content-center" id="field-modal-header">
                        {itemk.toUpperCase()}
                        <div id="close">
                            <button type="button" id="close-btn" className="btn" onClick={this.props.onCloseModal}>x</button>
                        </div>
                    </ModalHeader>
                    <ModalBody id="field-modal-body">
                        <div className="table-responsive" id="field-modal-body-div">
                            <table className="table table-striped" >
                                <thead>
                                    <tr>
                                        {SortedFields[itemk].map(item =>
                                            <td key={item}><b>{item.toUpperCase()}</b></td>)}
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(this.props.data[itemk]).map((item, id) => (
                                        <tr key={item}>
                                            {Object.keys(this.props.data[itemk][item]).map(it =>

                                                <td key={it}><p>{this.props.data[itemk][item][it]}</p></td>
                                            )}
                                            <td>
                                                <button className="btn btn-danger" onClick={() => this.handleDelete(item, itemk)}>delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </ModalBody>
                    <ModalFooter style={{ backgroundColor: '#dee2e6' }}>
                        <Button color="primary" onClick={this.props.onCloseModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>

            </React.Fragment>
        )
    }
}

export default ShowModel;
