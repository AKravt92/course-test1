import React, {useState} from 'react'
import {Button, Form, Card} from 'react-bootstrap'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import "react-markdown-editor-lite/lib/index.css";

export const CreateStoryPage = () => {
  const {request} = useHttp()
  const message = useMessage()
  const [form, setForm] = useState({
    name: '', genre: '', tags: ''
  })

  const handleClick = async () => {
      try {
          const id = JSON.parse(localStorage.getItem('userData'))
          const data = await request('/api/story/save', 'POST', 
          {name: form.name, genre : form.genre, tags: form.tags.split(' '), owner: id.userId});
          console.log(data)
          message(data.message)
        } catch (e) {}
    
  };

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  return (
    <div>
      <Card
          border="secondary"
          bg={'primary'}
          text={'white'}
          style={{ width: '18rem'}}
          className="mb-2 mx-auto align-middle"
          >
    
    <Card.Header><h1>My new story</h1></Card.Header>
        <Card.Body>
 <Form>
  <Form.Group controlId="name">
    <Form.Label>Story Name</Form.Label>
    <Form.Control type="text" 
                  placeholder="My Story" 
                  name="name"
                  value={form.name}
                  onChange={changeHandler} />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Genre your story</Form.Label>
    <Form.Control as="select"
                  type="text" 
                  name="genre"
                  value={form.genre}
                  onChange={changeHandler}>
      <option>Comedy</option>
      <option>Tragedy</option>
      <option>Drama</option>
      <option>Horror</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Your tags</Form.Label>
    <Form.Control as="textarea" rows={2} 
                  type="text" 
                  placeholder="My Tags" 
                  name="tags"
                  value={form.tags}
                  onChange={changeHandler} />
  </Form.Group>
</Form>
<Button variant="secondary" onClick={handleClick}>Create Story</Button>
</Card.Body>
</Card>
   </div>
    )
}