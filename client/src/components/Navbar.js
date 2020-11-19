import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {Navbar, Nav, Button} from 'react-bootstrap'

export const NBar = () => {
  const history = useHistory()
  const auth = useContext(AuthContext)

  const logoutHandler = event => {
    event.preventDefault()
    auth.logout()
    history.push('/')
  }

  return (
    <div>
  <Navbar bg="primary" variant="dark" expanded="true">
    <Navbar.Brand href="\main">Mordor</Navbar.Brand>
    <Nav>
      <Nav.Link href="\story">Story</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="\createStory">Create Story</Nav.Link>
    </Nav>
    <Nav className="mr-auto">
      <Nav.Link href="\CreateChapter">Create Chapter</Nav.Link>
    </Nav>
      <Button variant="outline-light" onClick={logoutHandler}>Exit</Button>
  </Navbar>
  </div>
  )
}
