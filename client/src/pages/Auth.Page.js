import React, {useContext, useEffect, useState} from 'react'
import {Form, Button, Card} from 'react-bootstrap'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import {AuthContext} from '../context/AuthContext'
export const AuthPage = () => {

    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
      })

      useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
      }
    
    const registerHandler = async () => {
        try {
          const data = await request('/api/auth/register', 'POST', {...form})
          message(data.message)
        } catch (e) {}
    }
    
    const loginHandler = async () => {
        try {
          const data = await request('/api/auth/login', 'POST', {...form})
          auth.login(data.token, data.userId)
        } catch (e) {}
    }
    
    return (
        <div>
          <Card
          border="secondary"
          bg={'primary'}
          text={'white'}
          style={{ width: '20rem'}}
          className="mb-2 mx-auto align-middle"
          >
    
    <Card.Header><h1>Mordor</h1></Card.Header>
    
    <Card.Body>
            <Form>
  <Form.Group controlId="email">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" 
                  placeholder="Enter email"
                  name="email"
                  value={form.email}
                  onChange={changeHandler}/>
  </Form.Group>

  <Form.Group controlId="password">
    <Form.Label>Password</Form.Label>
    <Form.Control placeholder="Password"
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={changeHandler}/>
  </Form.Group>
  <Button variant="secondary" onClick={registerHandler} style={{marginRight: 10}} disabled={loading}>
    Registration
  </Button>
  <Button variant="secondary" onClick={loginHandler} disabled={loading}>
    Login
  </Button>
</Form>
</Card.Body>
  </Card>
        </div>
    )
}