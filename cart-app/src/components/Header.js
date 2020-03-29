import React from 'react'

const heading = {
    width: '100%',
    paddingLeft: '1em',
    height: '50px',
    backgroundColor: 'royalblue',
    color: 'black',
    border: '1px solid grey'

}

const headingItems = {
    margin: '1em 1em 0.5em 1em',
    width: '1em',
    height: '1em'
}

function Header() {

    return (
        <React.Fragment>
            <header style={heading}>
                <span className="float-left"  style={headingItems}><i className="fas fa-star fa"></i></span>
                <span className="float-right"  style={headingItems}><i className="fas fa-search fa"></i></span>
                <span className="float-right"  style={headingItems}><i className="fas fa-shopping-cart fa"></i></span>
            </header>
        </React.Fragment>
    )
}

export default Header
