import React, {useCallback, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {useHttp} from '../hooks/http.hook'
import {Loader} from '../components/Loader'
import { ListStoryByTag } from '../components/ListStoryByTag'

export const DetailPage = () => {
  const {request, loading} = useHttp()
  const [link, setLink] = useState(null)
  const linkId = useParams().id

  const getLink = useCallback(async () => {
    try {
      const fetched = await request(`/api/story/${linkId}`, 'GET')
      setLink(fetched.link)
    } catch (e) {}
  }, [linkId, request])

  useEffect(() => {
    getLink()
  }, [getLink])

  if (loading) {
    return <Loader />
  }

  return (
    <>
      { !loading && link && <ListStoryByTag link={link} /> }
    </>
  )
}
