import React from 'react';
import { Link } from 'react-router-dom';
const courseImage = {
   height:'150px',
   marginBottom: '20px'
}
const coursePstyle = {
   borderTop: '1px solid',
   color: '#000000'
}
const courseHstyle = {
   minHeight: '80px',
   fontSize: '20px',
   fontWeight:'bold',
   color:'#d62c79'
}

const buttonStyle = {
   backgroundColor:'#d62c79',
}

export default function CourseItem({

course:{CourseItem, id, partnerId, courseType, courseTitle, courseId, coursePhotoUrl, devicesSupported, levelOfComplexity}
}){
    //console.log(props.course);
    return (
        
      <div className="col-md-4">
      <div className="card card-body mb-3">
         <img style={courseImage} alt ={courseTitle} src={coursePhotoUrl}/>
         <h4 style={courseHstyle}> Course Title : {courseTitle}</h4>
         <p style={coursePstyle}> Course Type: {courseType}</p>
         <p style={coursePstyle}> Partner ID: {partnerId}</p>
         <p style={coursePstyle}> Device Suported: {devicesSupported}</p>
         <p style={coursePstyle}> Level of Complexity: {levelOfComplexity}</p>
      <Link to={`/course/${courseId}`} style={buttonStyle} className="btn btn-secondary">
         Course Details
       </Link>
    </div>
    </div>

    );
  }