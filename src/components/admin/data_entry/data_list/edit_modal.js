import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FormInput from '../form-input/form-input'
import Button from '../button/button'
import { database, storage } from '../../../../firebase/firebase'
import { update } from "firebase/database";
import { ref } from "firebase/database";
import { set  } from "firebase/database";
import Swal from 'sweetalert2'

class EditModal extends Component {
    state = {
        record: {},
        modal: true,
        image: null,
        resume: null,
        imageName: '',  //this variable used to create dynamic image name
        resumeName: '',  //this variable used to create dynamic image name
        error: null
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
            const imgTypes = ['image/png', 'image/jpeg']
            if (name === 'image') {
                if (imgTypes.includes(e.target.files[0].type)) {
                    imageName = dynamicDate + e.target.files[0].name
                    this.setState({ imageName, [name]: value, error: null })
                } else {
                    this.setState({
                        imageName: '',
                        [name]: '',
                        error: 'Please select an image file (jpeg or png)'
                    }, () => { alert(this.state.error) })
                }
            }
            const fileTypes = ['application/pdf']
            if (name === 'resume') {
                if (fileTypes.includes(e.target.files[0].type)) {
                    resumeName = dynamicDate + e.target.files[0].name
                    this.setState({ resumeName, [name]: value, error: null })
                } else {
                    this.setState({
                        resumeName: '',
                        [name]: '',
                        error: 'Please select an pdf file'
                    }, () => { alert(this.state.error) })
                }
            }
            value = dynamicDate + e.target.files[0].name
        }

        this.setState({
            record: { ...this.state.record, [name]: value }
        })
    }
    handleSubmit = (category, editKey, imgKey, e) => {
        e.preventDefault()
        const inputs = document.querySelectorAll(`#${category}2 input`);
        console.log(inputs);
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
            const { image, resume, imageName, resumeName } = this.state;
            console.log(image, resume, imageName, resumeName);

            if (image) {
                ref(storage, `images/${imageName}`)
                // storage
                //     .ref(`images/${imageName}`)
                //     .put(image)
                //     .then(res => {
                //         storage.ref(`images/${imgKey['image']}`).delete()
                //     })
            }
            if (resume) {
                ref(storage, `resumes/${resumeName}`)
                // storage
                //     .ref(`resumes/${resumeName}`)
                //     .put(resume)
                //     .then(res => {
                //         storage.ref(`resumes/${imgKey['resume']}`).delete()
                //     })
            }

            Swal.fire({
                title: 'Your Data is Updating on Server...',
                html: 'Wait for moment',
                timerProgressBar: true,
                onBeforeOpen: () => {
                    Swal.showLoading()
                }
            })
            // const updates = {};
            // updates[category + '/' + editKey] = record;
            update(ref(database, category + '/' + editKey),record);
            // database.ref(category + '/' + editKey)
            //     .update(record)
            //     .then((res) => {
            //         this.setState({ record: {}, modal: !this.state.modal })
            //         Swal.close()
            //     })
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
                    <ModalHeader toggle={this.toggle} style={{ color: '#fff', padding: '10px 10px 10px 18px', borderBottomColor: '#283054' }}>
                        {editItem}
                    </ModalHeader>
                    <form onSubmit={(e) => this.handleSubmit(editItem, editKey, imgKey, e)}
                        id={`${editItem}2`} >
                        <ModalBody style={{ maxHeight: "77vh", overflow: 'auto' }}>
                            <div className={`data-form-inner 111 ${editItem}`} >
                                {Object.entries(this.state.record).map(([key, value]) => (
                                    (key !== 'image' || key !== 'resume' || key !== 'birthDate' || key !== 'createdOn' || key !== 'joined')
                                        ? (<React.Fragment key={`${editItem}_${key}`}>
                                            <label style={{ display: "block" }}>{key.charAt(0).toUpperCase() + key.split(/(?=[A-Z])/).join(' ').slice(1)}</label>
                                            {((key == 'image' && value) || (key == 'resume' && value)) ? 
                                            <div className='position-relative'>
                                                <FormInput
                                                    name={key}
                                                    classname="hide"
                                                    value={value}
                                                    placeholder={key}
                                                    handleChange={(e) => this.handleChange(e)} />
                                                <div className='file-hidden'>
                                                    {value ? value : 'Select file/image'}
                                                </div>
                                            </div>
                                            :
                                            <FormInput
                                                name={key}
                                                value={value}
                                                placeholder={key}
                                                handleChange={(e) => this.handleChange(e)} />}
                                        </React.Fragment>)
                                        : (<React.Fragment>
                                            <label style={{ display: "block" }}>{key}</label>
                                             <FormInput key={`${editItem}_${key}`}
                                                name={key}
                                                value={value}
                                                placeholder={key}
                                                handleChange={(e) => this.handleChange(e)} />
                                        </React.Fragment>)

                                ))
                                }
                            </div>
                        </ModalBody>
                        <ModalFooter style={{ borderTopColor: '#283054' }}>
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

