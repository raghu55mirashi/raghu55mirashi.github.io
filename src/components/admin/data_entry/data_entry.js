import React from 'react'
import Carousel from 'react-elastic-carousel'
import Button from './button/button'
import FormInput from './form-input/form-input'
import DataList from './data_list/data_list'
import './data_entry.scss'
import FormFields from './form-fields/form-fields.json'
import { auth } from '../../../firebase/firebase'

class DataEntry extends React.Component {
    state = {
        Personal: {},
        Portfolio: {},
        Education: {},
        Experience: {},
        Links: {},
        Skills: {},
    }
    handleChange(sectionName, e) {
        var { name, value } = e.target
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
        if (sectionName in this.state) {
            var ObjOfState = this.state[sectionName]

            fetch(`https://react-porfolio.firebaseio.com/${sectionName}.json`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                // body: JSON.stringify({ [sectionName]: ObjOfState })
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
    resect = (item, e) => {
        document.getElementById(item.toString()).reset()
    }
    resectAll = (items, e) => {
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
                                    <div className="data-form-inner" >
                                        <div className="left-btn">
                                            <Button value="<" onclick={() => this.carousel.slidePrev()} />
                                        </div>
                                        <div className="center-btn">
                                            <DataList />{'  '}
                                            <Button value="Reset" onclick={(e) => this.resect(item, e)} />{'  '}
                                            <Button value="Reset All" onclick={(e) => this.resectAll(Object.keys(FormFields), e)} />
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