//import React from 'react';
import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Courses from "./components/Courses";
import Course from './components/Course';
import Home from './components/Home';


import logo from './logo.svg';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

class App extends Component{
  render() {
  return (
    <ApolloProvider client={client}>
    <Router>
    <div className="container">
      
      <img
              src={logo}
              alt="Fair & lovely"
              style={{ width: 250, display: 'block', margin: '10px auto' }}
            />
            <Route exact path="/" component={Courses} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/course/:courseId" component={Course} />


    </div>
    </Router>
    </ApolloProvider>
  );
}
}

export default App;
