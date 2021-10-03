import React from 'react';
import { useState, useEffect } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom'
const Details = () => {
     const { idCourse } = useParams();
     const history = useHistory()
     const [details, setDetails] = useState({})
     useEffect(() => {
          fetch('/Data.json')
               .then(res => res.json())
               .then(data => setDetails(data[0]))
     }, [])

     const handleOnBack = () => {
          history.push('/services')
     }
     console.log(details)
     return (
          <div>

               <Container className="m-5 shadow p-5">
                    <Row>
                         <Col sm={8}>
                              <div>
                                   <img src={details.image} className="mb-3" alt="" />

                                   <h1>{details?.courseName}</h1>
                                   <h5>{details.courseDetails}</h5>
                                   <h5 className="text-secondary">Instractor :{details.instrctor}</h5>
                                   <h5><i class="fas fa-dollar-sign"></i>{details?.CoursePay}</h5>
                                   <h5>duration :{details?.time}</h5>
                                   <Button onClick={handleOnBack} >Back to Courses</Button>
                              </div>
                         </Col>
                         <Col sm={4}></Col>
                    </Row>
               </Container>



          </div>
     );
};

export default Details;