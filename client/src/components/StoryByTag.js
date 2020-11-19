import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {useHttp} from '../hooks/http.hook'
import {ListGroup} from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'

export const StoryByTag = ({ link }) => {
  let linkId = useParams().id
  linkId = link._id
  const history = useHistory()
  const [chapters, setChapters] = useState([])
  const {request, loading} = useHttp()
  useEffect(() => {
        async function  fetchData() {
        const data = await request(`/api/chapter/get/${linkId}`, 'GET')
        setChapters(data.chapters)
        console.log(data)
        }  
        fetchData()
},[request, linkId])

  if (!link && !loading ) {
    return <p className="center">Ссылок пока нет</p>
  }

  return (
      <div>
    <h1>{link.name}</h1>
  <p>{link.description}</p>
  <br></br>

  <div>
     {chapters.map((e,key)=> {
         return (<div><p>{e.name}</p><ReactMarkdown source = {e.text}/></div>
                
                )
       
     })}
</div>
    </div>


  )
}
