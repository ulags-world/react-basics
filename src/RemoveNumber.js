import React, { Component } from 'react'
import NumberList from './NumberList'
class RemoveNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nums : [1,2,3,4,5]
        };
        render(){
            return(
                <div>
                    {
                        this.state.nums.map(n => <NumberList val = {n} />)
                    }
                </div>
            )
        }
    }
    
}