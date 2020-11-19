import React, {useState, useEffect} from 'react'
import {ListGroup} from 'react-bootstrap'
import {useHttp} from '../hooks/http.hook'
import {ListStoryByTag} from '../components/ListStoryByTag'

export const ListStory = () => {

  const [listStory, setListStory] = useState([])
  const {request} = useHttp()
  useEffect(() => {
    async function fetchData(){
        const data = await request('/api/liststory/get/last', 'GET' )
        setListStory(data.listStory)}
        fetchData()
},[request])

 return(
  <div>
    <ListStoryByTag link={listStory}/>
  </div>)}
