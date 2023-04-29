import axios from 'axios';
import React, { Component } from 'react'

class ComponentDidMount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote : ""
        };
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(res => {
            this.setState({
                quote : res.data.title
            })
        })
        .catch(err => {
            console.log(err.message)
        })
    }
    render(){
        return (
            <div>
                <h1>The Loaded Quote is :</h1>
                <h3>{this.state.quote}</h3>
            </div>
        )
    }
}
export default ComponentDidMount