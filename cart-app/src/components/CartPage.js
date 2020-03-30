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
                <ul className="container flex">
                    {responseData.map(item => {
                        return  <li className="flexItem" key={item.id}>
                                    <img src={item.img_url} width="100em" height="150em" alt='cart'/>
                                    <div className="flex">
                                        {item.name}
                                    </div>
                                    <div>
                                        <span className="float-left">${item.price}</span>
                                        <strike className="float-left" style={{ paddingLeft : '0.5em', color: 'gray' , opacity: '0.5'}}>900</strike>
                                        <div className="float-right" style={{ color : 'green'}}> {item.discount}% off</div>
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
