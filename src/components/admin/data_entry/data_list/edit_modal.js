import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FormInput from '../form-input/form-input'
import Button from '../button/button'
import { database, storage } from '../../../../firebase/firebase'
import Swal from 'sweetalert2'

class EditModal extends Component {
    state = {
        record: {},
        modal: true,
        image: null,
        resume: null,
        imageName: '',  //this variable used to create dynamic image name
        resumeName: ''  //this variable used to create dynamic image name
    }

    componentDidMount() {
        this.setState({
            record: this.props.singleData
        })
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }
    handleChange = e => {
        var { name, value } = e.target
        if ((name === 'image' || name === 'resume') && e.target.files[0]) {
            value = e.target.files[0]
            const d = new Date()
            const dynamicDate = d.getTime()
            var imageName = '';
            var resumeName = '';
            if (name === 'image') {
                imageName = dynamicDate + e.target.files[0].name
                this.setState({ imageName })
            }
            if (name === 'resume') {
                resumeName = dynamicDate + e.target.files[0].name
                this.setState({ resumeName })
            }
            this.setState({
                [name]: value    //keeping state to use for submission of files
            })
            value = dynamicDate + e.target.files[0].name
        }

        this.setState({
            record: { ...this.state.record, [name]: value }
        })
    }
    handleSubmit = (category, editKey, imgKey, e) => {
        e.preventDefault()
        const inputs = document.querySelectorAll(`#${category}2 input`)
        var valid = false
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value === '') {
                valid = false
                break;
            } else {
                valid = true
            }
        }
        const { record } = this.state
        if (record && valid) {
            const { image, resume, imageName, resumeName } = this.state

            if (image) {
                storage
                    .ref(`images/${imageName}`)
                    .put(image)
                    .then(res => {
                        storage.ref(`images/${imgKey['image']}`).delete()
                    })
            }
            if (resume) {
                storage
                    .ref(`resumes/${resumeName}`)
                    .put(resume)
                    .then(res => {
                        storage.ref(`resumes/${imgKey['resume']}`).delete()
                    })
            }
            let timerInterval
            Swal.fire({
                title: 'Your Data is Updating on Server...',
                html: 'Wait for moment',
                timer: 2000,
                timerProgressBar: true,
                onBeforeOpen: () => {
                    Swal.showLoading()
                }
            }).then((result) => {
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer')
                }
            })
            database
                .ref(category + '/' + editKey)
                .update(record)
                .then((res) => {
                    this.setState({ record: {}, modal: !this.state.modal })
                    clearInterval(timerInterval)
                })
        } else {
            Swal.fire('Please fill all fields')
        }
    }
    render() {
        var { editItem, editKey, imgKey } = this.props
        editItem = editItem.toString()
        if (!editItem) {
            editItem = 'Personal'
        }
        return (
            <div>
                <Modal isOpen={this.state.modal} >
                    <ModalHeader toggle={this.toggle}>
                        {editItem}
                    </ModalHeader>
                    <form onSubmit={(e) => this.handleSubmit(editItem, editKey, imgKey, e)}
                        id={`${editItem}2`} >
                        <ModalBody style={{ maxHeight: "77vh", overflow: 'auto' }}>
                            <div className={`data-form-inner ${editItem}`} >
                                {Object.entries(this.state.record).map(([key, value]) => (
                                    (key !== 'image' || key !== 'resume')
                                        ? (<FormInput key={`${editItem}_${key}`}
                                            name={key}
                                            value={value}
                                            placeholder={key}
                                            handleChange={(e) => this.handleChange(e)} />)
                                        : (<FormInput key={`${editItem}_${key}`}
                                            name={key}
                                            placeholder={key}
                                            handleChange={(e) => this.handleChange(e)} />)
                                ))
                                }
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button value="Submit" type="submit" />{' '}
                            <Button value="Cancel" onclick={this.toggle} />
                        </ModalFooter>
                    </form>
                </Modal>
            </div >
        )
    }
}
export default EditModal;

