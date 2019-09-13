import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import CourseItem from './Courselistitem';

const bannerImage = {
  width:'100%'
}
const homeTitle = {
 fontSize:'40px',
 color:'#d62c79',
}
const homeList ={
  marginTop: '80px',
  marginBottom: '80px'
}

const HOME_COURSES_QUERY = gql`
  query HomeCoursesQuery {
    featuredcourses{
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

export class Home extends Component {
    render(){
        return(
          <Fragment>
            <div  className="col-md-12">
          <img style={bannerImage} src="https://mobile.englishedge.in/api/1/images/CRS-751.png" alt="header"></img>
           </div>
            <h1 style={homeTitle} className="display-4 my-3">Featured Courses</h1>
            <div style={homeList}  className="row">
            <Query query={HOME_COURSES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) console.log(error);
            console.log(data);
            return (<Fragment>
                  {data.featuredcourses.map(course => (
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

export default Home;