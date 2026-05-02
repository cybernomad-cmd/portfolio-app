import React from "react";
import ProjectForm from "../components/ProjectForm";
import ProjectList from "../components/ProjectList";
import SearchBar from "../components/SearchBar";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: 1,
          title: "Brand Identity — Ankole Coffee",
          description: "Full visual identity system for a specialty coffee brand in Nairobi. Logo, packaging, and social assets."
        },
        {
          id: 2,
          title: "Mobile App UI — PaySend",
          description: "End-to-end UI design for a fintech app focused on cross-border payments across East Africa."
        },
        {
          id: 3,
          title: "Web Presence — Nia Studios",
          description: "Designed and built a portfolio website for a creative photography studio using Webflow."
        }
      ],
      searchQuery: ""
    };

    this.handleAddProject = this.handleAddProject.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleDeleteProject = this.handleDeleteProject.bind(this);
  }

  handleAddProject(newProject) {
    var updatedProjects = this.state.projects.concat(newProject);
    this.setState({ projects: updatedProjects });
  }

  handleSearch(query) {
    this.setState({ searchQuery: query });
  }

  handleDeleteProject(id) {
    var updatedProjects = this.state.projects.filter(function(project) {
      return project.id !== id;
    });
    this.setState({ projects: updatedProjects });
  }

  render() {
    var filteredProjects = this.state.projects.filter(function(project) {
      var query = this.state.searchQuery.toLowerCase();
      return (
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query)
      );
    }.bind(this));

    var currentYear = new Date().getFullYear();

    return (
      <div className="home">
        <header className="site-header">
          <p className="header-eyebrow">Leon Muigai &nbsp;|&nbsp; Personal Project &nbsp;|&nbsp; Moringa School &nbsp;|&nbsp; SDF-FTR17M3</p>
          <h1 className="site-title">Project Showcase</h1>
          <div className="site-meta">
            <span>Est. {currentYear}</span>
            <span>{this.state.projects.length} Projects</span>
          </div>
        </header>

        <main>
          <section className="form-section">
            <p className="section-label">New Entry</p>
            <ProjectForm onAddProject={this.handleAddProject} />
          </section>

          <section className="list-section">
            <div className="list-header">
              <p className="section-label">Index</p>
              <span className="project-count">
                {filteredProjects.length} result{filteredProjects.length !== 1 ? "s" : ""}
              </span>
            </div>
            <SearchBar onSearch={this.handleSearch} />
            <ProjectList
              projects={filteredProjects}
              onDeleteProject={this.handleDeleteProject}
            />
          </section>
        </main>
      </div>
    );
  }
}

export default Home;