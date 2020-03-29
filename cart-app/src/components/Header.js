import React from 'react'

const heading = {
    width: '100%',
    paddingLeft: '1em',
    paddingRight: '1em',
    height: '50px',
    backgroundColor: 'royalblue',
    border: '1px solid grey'

}


function Header() {

    return (
        <React.Fragment>
            <header style={heading}>
                <span className="float-left" style={{color: 'goldenrod',margin: '0.5em 1em 0.5em',width: '1em',height: '1em', flexGrow: 50}}><i className="fal fa-star fa" style={{ fontSize : '28px'}}></i></span>
                <span className="float-right"  style={{color: 'white',margin: '0.5em 1em 0.5em',width: '1em',height: '1em'}}><i className="fal fa-shopping-cart fa" style={{ fontSize : '28px'}}></i></span>
                <span className="float-right"  style={{color: 'white',margin: '0.5em 1em 1em',width: '1em',height: '1em'}}><i className="fal fa-search fa" style={{ fontSize : '28px'}}></i></span>
            </header>
        </React.Fragment>
    )
}

export default Header
