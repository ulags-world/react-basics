import React, { Component } from 'react'
import axios from 'axios';
class GithubInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgUrl : "",
            name : ""
        }
    }
    async componentDidMount(){
        const url = `https://api.github.com/users/${this.props.name}`
        let response = await axios.get(url);
        let data = response.data
        this.setState({
            imgUrl : data.avatar_url,
            name : data.name
        })
    }
    render(){
        return (
            <div>
                <h2>Name : {this.props.name} </h2>
                <img src ={this.state.imgUrl} alt='none'></img>
            </div>
        )
    }
    
}
export default GithubInfo