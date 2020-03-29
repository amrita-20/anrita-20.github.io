import React from 'react'

const heading = {
    width: '100%',
    height: '50px',
    backgroundColor: 'blue',
    color: 'black',
    border: '1px solid grey'

}

function Header() {

    return (
        <React.Fragment>
            <header style={heading}>
                <span><i className="fas fa-star fa"></i></span>
                <span><i className="fas fa-search fa"></i></span>
                <span><i className="fas fa-shopping-cart fa"></i></span>
            </header>
        </React.Fragment>
    )
}

export default Header
