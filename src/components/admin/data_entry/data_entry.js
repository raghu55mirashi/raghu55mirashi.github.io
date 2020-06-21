import React from 'react'
import Carousel from 'react-elastic-carousel'
import Swal from 'sweetalert2'
import Button from './button/button'
import FormInput from './form-input/form-input'
import DataList from './data_list/data_list'
import './data_entry.scss'
import FormFields from './form-fields/form-fields.json'
import { auth, storage } from '../../../firebase/firebase'
import { database } from '../../../firebase/firebase'

class DataEntry extends React.Component {
    state = {
        Personal: {},
        Portfolio: {},
        Education: {},
        Experience: {},
        Links: {},
        Skills: {},
        image: null,    //this object used to upload image
        resume: null,   //this object used to upload file
        imageName: '',  //this variable used to create dynamic image name
        resumeName: ''  //this variable used to create dynamic image name

    }
    handleChange(sectionName, e) {
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
                [name]: value   //keeping state to use for submission of files
            })
            value = dynamicDate + e.target.files[0].name
        }
        if (sectionName in this.state) {
            const ObjOfState = this.state[sectionName]
            ObjOfState[name] = value

            this.setState({
                [sectionName]: ObjOfState
            })
        }
    }
    handleSubmit(sectionName, e) {
        e.preventDefault()
        const inputs = document.querySelectorAll(`#${sectionName} input`)
        var valid = false
        for (let i = 0; i < inputs.length; i++) {

            if (inputs[i].value === '') {
                valid = false
                break;
            } else {
                valid = true
            }

        }
        if (!valid) {
            Swal.fire('Please fill all fields')
        } else {
            //for Personal data to check whether it exists
            var PersonalData_exits;
            if (sectionName === 'Personal') {
                database.ref(`Personal`).limitToFirst(1).once("value", snapshot => {
                    if (snapshot.exists()) {
                        PersonalData_exits = true;
                        Swal.fire('Data Exists! Only one record is allowed, please update data')
                        this.setState({
                            [sectionName]: {}
                        })
                        document.getElementById(sectionName.toString()).reset()
                        return true;
                    }
                });
            }

            if ((sectionName === 'Personal' && PersonalData_exits) || sectionName !== 'Personal') {
                const { image, resume, imageName, resumeName } = this.state
                if (image) {
                    storage.ref(`images/${imageName}`).put(image)
                }
                if (resume) {
                    storage.ref(`resumes/${resumeName}`).put(resume)
                }

                Swal.fire({
                    title: 'Data is Saving on Server...',
                    html: 'Wait for moment',
                    timerProgressBar: true,
                    onBeforeOpen: () => {
                        Swal.showLoading()
                    }
                })


                if (sectionName in this.state) {
                    var ObjOfState = this.state[sectionName]

                    fetch(`https://react-porfolio.firebaseio.com/${sectionName}.json`, {
                        method: 'POST',
                        mode: 'cors',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(ObjOfState)
                    }).then(res => {
                        if (res.status === 200) {
                            this.setState({
                                [sectionName]: {}
                            })
                            document.getElementById(sectionName.toString()).reset()
                            Swal.close()
                        }
                    })
                }
            }
        }
    }

    reset = (item, e) => {
        document.getElementById(item.toString()).reset()
    }
    resetAll = (items, e) => {
        items.map(item => document.getElementById(item.toString()).reset())
    }

    render() {
        return (
            <div className="container-fluid data-container">
                <div className="data-form">
                    <div className="form-scroll">
                        <div className="signOut-div">
                            <Button value={`${this.props.currentUser.email}(Sign Out)`}
                                onclick={() => auth.signOut()} />
                        </div>
                        <Carousel ref={ref => (this.carousel = ref)} >
                            {Object.keys(FormFields).map((item, id) => (
                                <div className="scroller" key={id}>
                                    <div className="data-form-inner data-form-inner-top" >
                                        <div className="left-btn">
                                            <Button value="<" onclick={() => this.carousel.slidePrev()} />
                                        </div>
                                        <div className="center-btn">
                                            <DataList itemKey={item} handleEdit={this.handleEdit} />{'  '}
                                            <Button value="Reset" onclick={(e) => this.reset(item, e)} />{'  '}
                                            <Button value="Reset All" onclick={(e) => this.resetAll(Object.keys(FormFields), e)} />
                                        </div>
                                        <div className="right-btn">
                                            <Button value=">" onclick={() => this.carousel.slideNext()} />
                                        </div>
                                    </div>
                                    <div className={`data-form-inner ${item}`} >
                                        <form onSubmit={(e) => this.handleSubmit(item, e)}
                                            id={item} ref='myform'>
                                            <h1 className="header">{item}</h1>
                                            {FormFields[item].map((formfield) => (
                                                <FormInput
                                                    key={formfield}
                                                    name={formfield}
                                                    placeholder={formfield}
                                                    handleChange={(e) => this.handleChange(item, e)} />

                                            ))}
                                            <div className="form-btn">
                                                <Button value="Submit" type="submit" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        )
    }
}

export default DataEntry