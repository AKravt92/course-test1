import React from 'react'
import {Link} from 'react-router-dom'
import {Card, CardColumns} from 'react-bootstrap'
import {Loader} from '../components/Loader'

export const ListStoryByTag = ({ link }) => {
  if (!link.length) {
    return <Loader/>
  }

  return (
      <div>
    <CardColumns>{link.map((e, key)=> {return (<Link key={key} to={`/story/${e._id}`}>
        <Card className="text-center"  id={e._id} name={e._id}>
          <Card.Img variant="top" src="https://img2.freepng.ru/20180617/wip/kisspng-sauron-the-lord-of-the-rings-eye-the-silmarillion-5b26e559c89f72.0202275115292757378218.jpg" />
          <Card.Body>
              <Card.Title>{e.name}</Card.Title>
          <Card.Text>
          {e.description}
          </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{e.updatedAt}</small>
          </Card.Footer>
      </Card></Link>)})}
    </CardColumns>
    </div>
  )
}
