import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = () => {
    const onClick = () =>{
        console.log("hello")
    }
    return (
        <header className='header'>
            <h1>Task Manager</h1>
            <Button className='btn' color='green' text='ADD' onClick={onClick}/>
        </header>
    )
}


export default Header
