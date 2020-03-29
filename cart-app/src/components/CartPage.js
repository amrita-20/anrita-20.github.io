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
            console.log(response.data);
            // let newMap = response.map(getResponse)
            this.setState({
                responseData: response.data
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
                <ul class=" container flex">
                    {responseData.map(item => {
                        return  <li class="flexItem" key={item.id}>
                                    <img src={item.img_url} width="200" height="200" />
                                    <div class="flex">
                                        {item.name}
                                    </div>
                                    <div>
                                        <span class="float-left">${item.price}</span>
                                        <div class="float-right" style={{ color : 'green'}}> {item.discount}% off</div>
                                    </div>
                                    <div style={{paddingTop: '2em'}}>
                                        <button type="button" style={{ borderRadius : '1em', padding : '0 15px', border : 'none', backgroundColor : 'goldenrod'}}>Add to Cart</button>
                                    </div>
                                </li>;
                            
                    })}
                 </ul>
                </div>
            </React.Fragment>

        )
    }
}

export default CartPage
