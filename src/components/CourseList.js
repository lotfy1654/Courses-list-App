import React from "react";

class CourseList extends React.Component {
  state = {
    isEdit: false,
  };

  renderCourse = () => {
    return (
      <li>
        <span>{this.props.dataCourse.name}</span>
        <button
          onClick={() => {
            this.togleState();
          }}
        >
          Edite Course
        </button>
        <button
          onClick={() => {
            this.props.deleteCourse(this.props.index);
          }}
        >
          Delete
        </button>
      </li>
    );
  };

  togleState = () => {
    const isEdit = this.state.isEdit;
    this.setState({
      isEdit: !isEdit,
    });
  };

  handleUpdateForm = () => {
    return (
      <form onSubmit={this.handleUpdateCourse}>
        <input
          type="text"
          ref={(v) => {
            this.input = v;
          }}
          defaultValue={this.props.dataCourse.name}
        />
        <button>Update Course</button>
      </form>
    );
  };

  handleUpdateCourse = (e) => {
    e.preventDefault();
    this.props.editCourse(this.props.index, this.input.value);
    this.togleState();
  };

  render() {
    let isEdit = this.state.isEdit;
    return (
      <React.Fragment>
        {isEdit ? this.handleUpdateForm() : this.renderCourse()}
      </React.Fragment>
    );
  }
}

export default CourseList;
