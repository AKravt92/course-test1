import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {TagCloud} from 'react-tagcloud'
import {Card} from 'react-bootstrap'
import {useHttp} from '../hooks/http.hook'

export const SimpleCloud = () => {
  const history = useHistory()
  const [tags, setTags] = useState([])
  const {request} = useHttp()
  useEffect(() => {
        async function  fetchData() {
        const data = await request('/api/tags/get', 'GET' )
        setTags(data.tags)
        }  
        fetchData()
},[request])

 return(
  <div>
    <Card
      bg={'secondary'}
      text={'white'}
      style={{ width: '100%' }}
      className="mb-2">
      <Card.Body>
        <TagCloud
          minSize={42}
          maxSize={75}
          tags = {tags}
          onClick={tag => history.push(`/detail/${tag.value}`)}/>
      </Card.Body>
    </Card>
  </div>)}
