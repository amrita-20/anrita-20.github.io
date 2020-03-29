import React, { Component } from 'react'
import axios from 'axios'

class CartPage extends Component{
    constructor(props) {
        super(props)
        this.state = {
            responseData : []
        }
    }
    componentDidMount(){
        axios.get('https://api.myjson.com/bins/qzuzi')
        .then(response => {
            console.log('resp');
            console.log(response)
            // let newMap = response.map(getResponse)
            this.setState({
                responseData: response
            })
        })
        .catch(error =>{
            console.log(error)
        })
    }
    render(){
        const {responseData} = this.state
        return(
            <React.Fragment>
                <div>
                <ul>
                    {responseData.map(item => {
                        return <li>{item[0]}</li>;
                    })}
                 </ul>
                </div>
            </React.Fragment>

        )
    }
}

export default CartPage
