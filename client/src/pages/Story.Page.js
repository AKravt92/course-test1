import React, {useState, useEffect} from 'react'
import {useHttp} from '../hooks/http.hook'
import {ListStoryByTag} from '../components/ListStoryByTag'

export const StoryPage = () => {

  const [listStory, setListStory] = useState([])
  const {request} = useHttp()
  useEffect(() => {
    async function fetchData(){
        const data = await request('/api/liststory/get/', 'GET' )
        setListStory(data.listStory)}
        fetchData()
},[request])

 return(
    <ListStoryByTag link = {listStory}/>
  )}
