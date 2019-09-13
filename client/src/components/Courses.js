import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import CourseItem from './Courselistitem';

const homeTitle = {
  fontSize:'40px',
  color:'#d62c79',
 }

const COURSES_QUERY = gql`
  query CoursesQuery {
    courses {
      partnerId
      id
      courseId
      courseType
      courseTitle
      coursePhotoUrl
      devicesSupported
      levelOfComplexity
    }
  }
`;

export class Courses extends Component {
    render(){
        return(
          <Fragment>
            <h1 style={homeTitle} className="display-4 my-3">Online Courses</h1>
            <div className="row">
            <Query query={COURSES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) console.log(error);
            console.log(data);
            return (<Fragment>
                  {data.courses.slice(0, 12).map(course => (
                  <CourseItem key={course.courseId} course={course} />
                ))}
            </Fragment>
            );
          }}
        </Query>
        </div>
            
        </Fragment>
        );

    }

}

export default Courses;