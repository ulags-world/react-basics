import React, { Component } from 'react'
import './List.css'
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render(){
        let list = [
            {
                name:"abc",
                id:1
            },
            {
                name:"xyz",
                id:2
            }
        ]
        list.push({
            name : "ulags",
            id : 184
        })
        list.unshift({
            name : "kitty",
            id : 21
        })
        let e = list.map((element , index)=>{
            return <li className='listspace' key={index}>{index}{element.name}</li>
         })
        return(
            <div>
                <h1>Working</h1>
                <ul>{e}</ul>
            </div>
        )
    }
}
export default List