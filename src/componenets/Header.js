import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({onAdd,showAdd}) => {

    return (
        <header className='header'>
            <h1>Task Manager</h1>
            <Button className='btn' color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close':'Add'} onClick={onAdd}/>
        </header>
    )
}


export default Header
