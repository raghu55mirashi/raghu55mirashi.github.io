import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import Swal from 'sweetalert2'
import './show_modal.scss'
import SortedFields from '../form-fields/sorted-fields.json'
import { database, storage } from '../../../../firebase/firebase'
import EditModal from './edit_modal'
import Button from '../button/button'

class ShowModel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editKey: '',
            editItem: '',
            imgKey: '',  //passed this img obj to edit modal to delete existing img
            toggleEdit: false
        }
    }
    handleDelete = (category, item, imgData) => {
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
                if (imgData['image']) {
                    storage
                        .ref(`images/${imgData['image']}`)
                        .delete()
                        .then((error) => {
                            console.log(error)
                        })
                }
                if (imgData['resume']) {
                    storage
                        .ref(`resumes/${imgData['resume']}`)
                        .delete()
                        .then((error) => {
                            console.log(error)
                        })
                }
                const res = database.ref(category + '/' + item).remove()
                if (res) {
                    Swal.fire(
                        'Deleted!',
                        'Your record has been deleted.',
                        'success'
                    )
                }
            }
        })
    }
    handleEdit = (category, editKey, DataImage) => {
        this.setState({
            editItem: category,
            editKey: editKey,
            imgKey: DataImage,
            toggleEdit: !this.state.toggleEdit
        })

    }
    render() {
        const { editItem, editKey } = this.state
        var { itemKey, onOpenModal, data } = this.props
        var category = itemKey.toString()
        if (!itemKey) {
            category = 'Personal'
        }

        let alert = (category === 'Personal') ? (<tr><td colSpan={5} style={{ color: 'red' }}>Please keep only one record for Personal info</td></tr>) : null
        return (
            <React.Fragment>
                <Modal isOpen={onOpenModal} className="field-modal">
                    <ModalHeader className="justify-content-center field-modal-header" id="">
                        {category.toUpperCase()}
                        <div className="close">
                            <button type="button" id="" className="btn close-btn" onClick={this.props.onCloseModal}>x</button>
                        </div>
                    </ModalHeader>
                    <ModalBody className="field-modal-body">
                        <div className="table-responsive field-modal-body-div" id="">
                            <table className="table table-striped" >
                                <thead>
                                    <tr>
                                        {SortedFields[category].map(item =>
                                            <td key={item}><b>{item.toUpperCase()}</b></td>)}
                                    </tr>
                                </thead>
                                <tbody>
                                    {(data[category]) ? Object.keys(data[category]).map((item, id) => (
                                        <tr key={item}>
                                            {Object.keys(data[category][item]).map(it =>
                                                <td key={it}>{data[category][item][it]}</td>
                                            )}
                                            <td>
                                                <button className="btn btn-success" onClick={() => this.handleEdit(category, item, data[category][item])}>Edit</button>
                                            </td>
                                            <td>
                                                <button className="btn btn-danger" onClick={() => this.handleDelete(category, item, data[category][item])}>delete</button>
                                            </td>
                                        </tr>
                                    )) : <tr><th colSpan={2}>Record Not available!</th></tr>}
                                    {alert}
                                </tbody>
                            </table>
                        </div>

                        {(this.state.toggleEdit)
                            ? <EditModal
                                singleData={data[editItem][editKey]}
                                editKey={editKey}
                                imgKey={this.state.imgKey}
                                editItem={editItem} /> : null}
                    </ModalBody>
                    <ModalFooter style={{ backgroundColor: '#dee2e6', padding: 'unset' }}>
                        <Button value="Close" onclick={this.props.onCloseModal} />
                    </ModalFooter>
                </Modal>

            </React.Fragment>
        )
    }
}

export default ShowModel;
