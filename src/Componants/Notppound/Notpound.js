import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Notpound = () => {
     return (
          <div className="text-center m-3 p-3">

               <Card style={{ width: '20rem' }} >
                    <Card.Body>
                         <Card.Title><h4>404  page not pound</h4></Card.Title>
                         <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                         <Card.Text>
                              please go back and try again,,page not pound
                         </Card.Text>
                         <Card.Link>
                              <Link to="/home">Go Back</Link>
                         </Card.Link>

                    </Card.Body>
               </Card>


          </div>
     );
};

export default Notpound;