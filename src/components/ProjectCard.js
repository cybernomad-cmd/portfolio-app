import React from "react";

function ProjectCard(props) {
  var project = props.project;
  var onDelete = props.onDelete;
  var index = props.index;

  var displayIndex = index < 9 ? "0" + (index + 1) : "" + (index + 1);

  return (
    <div className="project-card">
      <span className="card-index">{displayIndex}</span>
      <div className="card-body">
        <h3 className="card-title">{project.title}</h3>
        {project.description && (
          <p className="card-description">{project.description}</p>
        )}
      </div>
      <button
        className="card-delete-btn"
        onClick={function() { onDelete(project.id); }}
        title="Remove project"
      >
        Remove
      </button>
    </div>
  );
}

export default ProjectCard;