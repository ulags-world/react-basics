import React, { Component } from 'react'
import './FormOne.css'
class FormOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname : "",
            password : ''
        }
        this.handlechange = this.handlechange.bind(this)
        this.handlesubmit = this.handlesubmit.bind(this)
    }
    handlechange(e){
        e.preventDefault()
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handlesubmit(e){
        e.preventDefault()
        alert(`the name is ${this.state.fullname} and the password is ${"*".repeat(this.state.password.length)}`)
        this.setState({
            fullname : ""
        })
    }
    render(){
        return(
            <div className='form'>
                <h2>Enter the data</h2>
                <form className='inputform' onSubmit={this.handlesubmit}>
                    <label>
                        <input 
                        type = 'text'
                        name = 'fullname'
                        value = {this.state.fullname}
                        onChange = {this.handlechange}
                    />
                    </label>
                    <label>
                    <input 
                        type = 'password'
                        name = 'password'
                        value = {this.state.password}
                        onChange = {this.handlechange}
                    />
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default FormOne