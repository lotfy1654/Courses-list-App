import React from "react";
import "./App.css";
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";

class App extends React.Component {
  state = {
    courses: [{ name: "Html" }, { name: "Css" }, { name: "Javascript" }],
    current: "",
  };

  // Update Couerse
  updateCourse = (ele) => {
    this.setState({
      current: ele.target.value,
    });
  };

  // Add Course
  addCourse = (ele) => {
    ele.preventDefault();
    let current = this.state.current;
    let newCourses = this.state.courses;
    if (current.length > 0) {
      newCourses.push({ name: current });
      this.setState({
        courses: newCourses,
        current: "",
      });
    }
  };

  deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({
      courses: courses,
    });
  };

  editCourse = (index, newVal) => {
    let courses = this.state.courses;
    let course = courses[index];
    course.name = newVal;
    this.setState({
      courses: courses,
    });
  };

  render() {
    const courses = this.state.courses;
    const coursList = courses.map((ele, index) => {
      return (
        <CourseList
          dataCourse={ele}
          key={index}
          index={index}
          deleteCourse={this.deleteCourse}
          editCourse={this.editCourse}
          allCourses={this.state.courses}
        />
      );
    });
    return (
      <section className="App">
        <h2>Add Courses</h2>
        <CourseForm
          updateCourse={this.updateCourse}
          addCourse={this.addCourse}
          current={this.state.current}
        />
        {/* <ul>{coursList}</ul> */}
        <ul>
          {this.state.courses.length > 0 ? (
            coursList
          ) : (
            <p>No Courses To Show! Please Add New Course.</p>
          )}
        </ul>
      </section>
    );
  }
}

export default App;
