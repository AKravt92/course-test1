import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {Navbar, Nav, Button} from 'react-bootstrap'

export const NBarNA = () => {
  const history = useHistory()
  const auth = useContext(AuthContext)

  const logoutHandler = event => {
    history.push('/auth')
  }

  return (
    <div>
  <Navbar bg="primary" variant="dark" expanded="true">
    <Navbar.Brand href="\main">Mordor</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="\story">Story</Nav.Link>
    </Nav>
      <Button variant="outline-light" onClick={logoutHandler}>Login/Registration</Button>
  </Navbar>
  </div>
  )
}
