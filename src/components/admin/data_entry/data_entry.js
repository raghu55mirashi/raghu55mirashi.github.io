import React from 'react'
import Carousel from 'react-elastic-carousel'
import Swal from 'sweetalert2'
import Button from './button/button'
import FormInput from './form-input/form-input'
import DataList from './data_list/data_list'
import './data_entry.scss'
import FormFields from './form-fields/form-fields.json'
import { auth, storage } from '../../../firebase/firebase'

class DataEntry extends React.Component {
    state = {
        Personal: {},
        Portfolio: {},
        Education: {},
        Experience: {},
        Links: {},
        Skills: {},
        image: null,
        resume: null
    }
    handleChange(sectionName, e) {
        var { name, value } = e.target

        if ((name === 'image' || name === 'resume') && e.target.files[0]) {
            value = e.target.files[0]
            this.setState({
                [name]: value    //keeping state to use for submission of files
            })
            value = e.target.files[0].name
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

        const { image, resume } = this.state
        if (image) {
            storage.ref(`images/${image.name}`).put(image)
        }
        if (resume) {
            storage.ref(`resumes/${resume.name}`).put(resume)
        }

        let timerInterval
        Swal.fire({
            title: 'Data is Saving on Server...',
            html: 'Wait for moment',
            timer: 1000,
            timerProgressBar: true,
            onBeforeOpen: () => {
                Swal.showLoading()
            },
            onClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
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
                }
            })

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
                                            <DataList itemKey={item} />{'  '}
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
                                                <Button value="Submit" />
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