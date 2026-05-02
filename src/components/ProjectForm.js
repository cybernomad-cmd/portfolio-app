import React from "react";

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      error: ""
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value, error: "" });
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value, error: "" });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.title.trim() === "") {
      this.setState({ error: "Please enter a project title." });
      return;
    }

    var newProject = {
      id: Date.now(),
      title: this.state.title.trim(),
      description: this.state.description.trim()
    };

    this.props.onAddProject(newProject);
    this.setState({ title: "", description: "", error: "" });
  }

  render() {
    return (
      <div className="project-form">
        <h2 className="form-title">Add Project</h2>

        <div className="form-row">
          <label className="form-label" htmlFor="project-title">Title</label>
          <input
            id="project-title"
            className="form-input"
            type="text"
            placeholder="e.g. Brand Identity — Client Name"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
        </div>

        <div className="form-row">
          <label className="form-label" htmlFor="project-description">Description</label>
          <textarea
            id="project-description"
            className="form-textarea"
            placeholder="Briefly describe what the project involved..."
            value={this.state.description}
            onChange={this.handleDescriptionChange}
          />
        </div>

        {this.state.error && (
          <p className="form-error">{this.state.error}</p>
        )}

        <button className="form-btn" onClick={this.handleSubmit}>
          + Add Project
        </button>
      </div>
    );
  }
}

export default ProjectForm;