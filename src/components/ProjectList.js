import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectList(props) {
  var projects = props.projects;
  var onDeleteProject = props.onDeleteProject;

  if (projects.length === 0) {
    return (
      <div className="empty-state">
        <p className="empty-text">Nothing here yet.</p>
        <p className="empty-sub">Add a project above, or try a different search term.</p>
      </div>
    );
  }

  return (
    <div className="project-list">
      {projects.map(function(project, index) {
        return (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onDelete={onDeleteProject}
          />
        );
      })}
    </div>
  );
}

export default ProjectList;