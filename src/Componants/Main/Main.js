import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Button, Container } from 'react-bootstrap';
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
               <Container>
                    <h3 className="text-primary ps-3">Popular Development Courses</h3>
                    <Row xs={1} md={2} className="g-4 p-3">

                         {
                              courses.map(course => (

                                   <Col>
                                        <Card className="p-3 shadow-lg">
                                             <Card.Img variant="top" src={course.image} />
                                             <Card.Body>
                                                  <Card.Title>{course.courseName}</Card.Title>
                                                  <Card.Text>{course.courseDetails}</Card.Text>
                                                  <Card.Text>{course.coursepay}</Card.Text>
                                                  <Card.Text className="text-primary">Category : {course.category}</Card.Text>

                                                  <Button onClick={handleDetails} variant="primary">Courses</Button>{' '}
                                             </Card.Body>
                                        </Card>
                                   </Col>
                              ))}
                    </Row>
               </Container>





          </div>
     );
};

export default Main;