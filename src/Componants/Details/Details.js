import React from 'react';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
const Details = () => {
     const { idCourse } = useParams();
     const [details, setDetails] = useState({})
     useEffect(() => {
          fetch('/Data.json')
               .then(res => res.json())
               .then(data => setDetails(data[0]))
     }, [])
     console.log(details)
     return (
          <div>

               <h1>this is detas {idCourse}</h1>
               <h3>{details?.courseName}</h3>

          </div>
     );
};

export default Details;