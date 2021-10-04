import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Main = () => {
     // state declared
     const [courses, setCourses] = useState([])
     const history = useHistory()
     useEffect(() => {
          fetch("/HomePageData.json")
               .then(res => res.json())
               .then(data => setCourses(data))
     }, [])

     // handle click
     const handleDetails = () => {
          history.push("/courses")
     }

     return (
          <div >
               <Container>
                    <h3 className="text-primary text-center  ps-3">Popular Development Courses</h3>
                    <Row xs={1} md={2} className="g-4 p-3">

                         {
                              courses.map(course => (

                                   <Col>
                                        <Card className="p-3 shadow-lg h-100">
                                             <Card.Img variant="top" src={course.image} />
                                             <Card.Body>
                                                  <Card.Title>{course.courseName}</Card.Title>
                                                  <Card.Text>{course.courseDetails}</Card.Text>
                                                  <Card.Text>{course.coursepay}</Card.Text>
                                                  <Card.Text className="text-primary">Category : {course.category}</Card.Text>
                                                  <Card.Text className="text-primary"><i class="fas fa-dollar-sign"></i> {course.CoursePay}</Card.Text>
                                                  <Button onClick={handleDetails} variant="primary">More</Button>{' '}
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