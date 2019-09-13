import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
const courseImage = {
  height:'300px',
  width: '500px',
  marginBottom: '20px'
}
const courseBox = {
  border: '2px solid',
  marginTop: '20px',
  marginBottom: '20px'
}


const COURSE_QUERY = gql`
  query CourseQuery($courseId: String!) {
    course(courseId: $courseId) {
      partnerId
      id
      courseId
      courseType
      courseTitle
      singleLineDescription
      coursePhotoUrl
      levelOfComplexity
      devicesSupported
    }
  }
`;

export class Course extends Component{
  render(){
    let { courseId } = this.props.match.params;
    return(
      <Fragment>
                  <Query query={COURSE_QUERY} variables={{ courseId }}>
                      {({ loading, error, data }) => {
                            if (loading) return <h4>Loading...</h4>;
                            if (error) console.log(error);
                            const{
                              courseTitle,
                              singleLineDescription,
                              coursePhotoUrl,
                              levelOfComplexity,
                              courseType,
                              devicesSupported
                            }=data.course;

                            console.log(data);

                            return (
                              <div>
                              <h1 className="display-4 my-3">
                              <span className="text-dark"></span> {courseTitle}
                              </h1>
                              <img style={courseImage} alt={courseTitle} src={coursePhotoUrl}/>
                              <p><span className="text-dark">Overview:</span> {singleLineDescription}</p>
                              
                              <hr />
                              <div style={courseBox} className="course-details col-md-4">
                              <p > Device Suported: {devicesSupported}</p>
                              <p > Level of Complexity: {levelOfComplexity}</p>
                              <p > Course Type: {courseType}</p>

      
                              </div>

                              <div className="display-4 my-3">
                                <a href ="https://ulfeelingsapp.herokuapp.com/" target="_blank" className="btn btn-secondary">What do you think?</a>
                              </div>
                              <div>
                              <Link to="/" className="btn btn-secondary">
                        Back
                      </Link>

                              </div>
                      
                      
                                  </div>
                                );
                
                      }
                      }
                      </Query> 
    </Fragment>
  
    );
  }

}
export default Course