import React from 'react'
import {Spinner} from 'react-bootstrap'

export const Loader = () => (
  <div style={{display: 'flex', justifyContent: 'center', paddingTop: '2rem'}}>
    <h1>Loading...</h1>
   <Spinner animation="grow" variant="primary" />
   <Spinner animation="grow" variant="primary" />
   <Spinner animation="grow" variant="primary" />
  </div>
)
