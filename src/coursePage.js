import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import * as courseAction from './actions/courseAction'

class coursePage extends Component {
    constructor(){
        super();
        this.state={
            course:{title:''}
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSave=this.handleSave.bind(this)
    }

    handleChange(event){
        let course=this.state.course;
        course.title=event.target.value;
        this.setState({
            course:course
        })
    }
    handleSave(event){
        this.props.createCourse(this.state.course)
        this.setState({course:{title:''}})
    }
    courseRow(course,index){
        return <div key={index}>{course.title}</div>
    }
  render() {
    return (
      <div>
          <h2>Redux Example</h2>
          <h4>Add course</h4>
          <input type="text" onChange={this.handleChange} value={this.state.course.title}/>
          <input type="submit" value="save" onClick={this.handleSave} />
          {this.props.courses.map(this.courseRow)}
      </div>
    );
  }
}


function mapStateToProps(state){
    return {courses:state.courses}
}

function mapDispatchToProps(dispatch){
    return{
        createCourse:course=>dispatch(courseAction.createCourse(course))
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (coursePage);

