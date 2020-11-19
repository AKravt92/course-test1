import React, { useState, useRef } from 'react'
import Editor, {Plugins} from "react-markdown-editor-lite";
import ReactMarkdown from 'react-markdown';
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import "react-markdown-editor-lite/lib/index.css";
import { Button, Form } from 'react-bootstrap';

export const CreateChapterPage = ({id}) => {
  Editor.unuse(Plugins.FontStrikethrough)
  Editor.unuse(Plugins.Header)
  Editor.unuse(Plugins.FontStrikethrough)
  Editor.unuse(Plugins.Link)
  Editor.unuse(Plugins.Table)
  Editor.unuse(Plugins.Image)

  const [form, setForm] = useState({
    name: ''})
    const {request} = useHttp()
    const message = useMessage()
    const mdEditor = useRef(null);
    const [value, setValue] = useState("xxx");
    const handleClick = async () => {
      try {
          const data = await request('/api/chapter/save', 'POST', 
          {name: form.name, text : value});
          console.log(data)
          message(data.message)
        } catch (e) {}
    
  };

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }
   
    const handleEditorChange = ({ html, text }) => {
      const newValue = text.replace(/\d/g, "");
      console.log(newValue);
      setValue(newValue);
    };
  
    return (
      <div>
        <Form>
  <Form.Group controlId="name">
    <Form.Label>Chapter Name</Form.Label>
    <Form.Control type="text" 
                  placeholder="My Chapter" 
                  name="name"
                  value={form.name}
                  onChange={changeHandler} />
  </Form.Group>
  <Form.Group>
    <Form.File id="exampleFormControlFile1" label="Example file input" />
  </Form.Group>
</Form>
        <Editor
          ref={mdEditor}
          value={value}
          style={{
            height: "250px"
          }}
          onChange={handleEditorChange}
          renderHTML={(text) => <ReactMarkdown source={text} />}
        />
        <Button onClick={handleClick}>Create Chapter</Button>
      </div>
    )
}