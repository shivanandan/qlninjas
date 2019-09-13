const axios = require('axios');
const { buildSchema } = require('graphql');
var config = {
  headers: {'Authorization': "bearer " + "58a857c1465f07e60178fc19f94453f1e9a1fe19"}
};

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema
} = require('graphql');

// Home page Online courses
const OnlineCourseType = new GraphQLObjectType({
    name: 'OnlineCourses',
    fields: () => ({
      id: { type: GraphQLString },
      courseId: { type: GraphQLString },
      partnerId: { type: GraphQLString },
      courseType: { type: GraphQLString },
      courseTitle: { type: GraphQLString },
      courseOverview:{ type: GraphQLString },
      coursePhotoUrl:{ type: GraphQLString },
      devicesSupported: { type: GraphQLString },
      singleLineDescription: { type: GraphQLString },
      levelOfComplexity: { type: GraphQLString }     
    })
  });

  


  // Industry Type
/*const IndustrytagType = new GraphQLObjectType({
  name: 'industries',
  fields: () => ({
    industryCode: { type: GraphQLString },
    industry: {type:GraphQLString}
  })
});*/


  // Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      courses: {
        type: new GraphQLList(OnlineCourseType),
        resolve(parent, args) {
          return axios
            .get('http://falcatalogenvstg-env.ap-south-1.elasticbeanstalk.com/catalogbd/api/courses/getAllCourses')
            .then(res => res.data);
        }
      },

      featuredcourses: {
        type: new GraphQLList(OnlineCourseType),
        resolve(parent, args) {
          return axios
            .get('https://e1r2jmya07.execute-api.ap-southeast-1.amazonaws.com/catalog/courses/homepage/')
            .then(res => res.data);
        }
      },
      
      course: {
        type: OnlineCourseType,
        args: {
          courseId: { type: GraphQLString }
        },
        resolve(parent, args) {
          return axios
            .get(`https://e1r2jmya07.execute-api.ap-southeast-1.amazonaws.com/catalog/courses/${args.courseId}`)
            .then(res => res.data);
        }
      }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
  });