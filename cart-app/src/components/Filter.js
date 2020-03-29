import React, { Component } from 'react'
import axios from 'axios'

class Filter extends Component{
    constructor(props) {
        super(props)
        this.state = {
            responseData : []
        }
    }
    componentDidMount(){
    }
    render(){
        return(
            <React.Fragment>
                <div>
                    <div class="container" style={{marginTop : '2em'}}>
                        Filters
                    </div>
                </div>
            </React.Fragment>

        )
    }
}

export default Filter
