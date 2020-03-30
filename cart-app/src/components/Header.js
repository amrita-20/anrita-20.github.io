import React from 'react'

const heading = {
    width: '100%',
    paddingLeft: '1em',
    paddingRight: '1em',
    height: '50px',
    backgroundColor: 'royalblue',
    border: '1px solid grey'

}
const rightNavComp ={
    color: 'white',
    width: '1em',
    height: '1em',
    fontSize : '28px',
    marginRight: '.5em'
}
const leftNavComp = {
    color: 'goldenrod',
    width: '1em',
    height: '1em',
    flexGrow: 50,
    fontSize : '28px'
}


function Header() {

    return (
            <header style={heading}>
                <span className="float-left" style={leftNavComp}><i className="fal fa-star fa"></i></span>
                <span className="float-right"  style={rightNavComp}><i className="fal fa-shopping-cart fa"></i></span>
                <span className="float-right"  style={rightNavComp}><i className="fal fa-search fa"></i></span>
            </header>
    )
}

export default Header
