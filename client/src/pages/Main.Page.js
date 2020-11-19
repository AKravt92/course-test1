import React from 'react'
import {SimpleCloud} from '../components/TCloud'
import {ListStory} from '../components/ListStory'

export const MainPage = () => {



  return (
<div>
    
  <div className="row">
    <div className="col bg-danger text-light">
    <center><h2>LAST CREATED</h2></center>
    </div>
    <div className="col bg-warning text-light">
    <center><h2>BEST OF THE BEST</h2></center>
    </div>
  </div>
  <div className="row">
    <div className="col bg-danger">
    <ListStory/>
    </div>
    <div className="col bg-warning">
    <ListStory/>
    </div>
  </div>
  <div className="row">
  <SimpleCloud  />
  </div>
</div>
)}