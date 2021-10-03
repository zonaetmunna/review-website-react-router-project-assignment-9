import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Main = () => {
     const [courses, setCourses] = useState([])
     const history = useHistory()
     useEffect(() => {
          fetch("/HomePageData.json")
               .then(res => res.json())
               .then(data => setCourses(data))
     }, [])
     const handleDetails = () => {
          history.push("/services")
     }
     console.log(courses)
     return (
          <div >
               <Row xs={1} md={2} className="g-4 p-5 m-3">
                    {
                         courses.map(course => (

                              <Col>
                                   <Card>
                                        <Card.Img variant="top" src={course.image} />
                                        <Card.Body>
                                             <Card.Title>{course.courseName}</Card.Title>
                                             <Card.Text>{course.courseDetails}</Card.Text>
                                             <Card.Text>{course.coursepay}</Card.Text>
                                             <Button onClick={handleDetails} variant="primary">Primary</Button>{' '}
                                        </Card.Body>
                                   </Card>
                              </Col>
                         ))}
               </Row>





          </div>
     );
};

export default Main;