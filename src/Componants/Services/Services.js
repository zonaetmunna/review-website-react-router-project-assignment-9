import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
     const [courses, setCourses] = useState([])
     useEffect(() => {
          fetch('/Data.json')
               .then(res => res.json())
               .then(data => setCourses(data))
     }, [])

     return (
          <div>

               <Row xs={1} md={3} className="g-4 m-4 ">
                    {
                         courses.map(course => <Service
                              key={course.courseId}
                              course={course}
                         ></Service>)
                    }

               </Row>



          </div>
     );
};

export default Services;