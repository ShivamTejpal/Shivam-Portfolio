import React from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Web Application Testing",
      period: "Feb 2025",
      description: "Developed a mock e-commerce website with core functionality like user registration login product search at card and check out using HTML CSS JavaScript",
      details: "Automated 20+ end to end test cases using selenium web driver me and Java ensuring 95% test coverage across major user flow such as form validation, authentication product interaction, and cart operation",
      technologies: ["HTML", "CSS", "JavaScript", "Java", "Selenium", "Maven"],
      type: "Testing Project"
    },
    {
      title: "Automated Resume Updater",
      period: "Mar 2025",
      description: "Developed a personal automation script, using Java and Selenium to login and update upload the latest resume automatically",
      details: "Implemented secure, login automation, using environment variables for credential handling ensuring data privacy UI element interaction. Script incorporates implicit and explicit weights to handle synchronization issues with smooth UI element interaction.",
      technologies: ["Java", "Selenium"],
      type: "Automation Project"
    },
    {
      title: "TaskMaster - To-Do List Web App",
      period: "Jun 2025",
      description: "Developed a full stack, web based Todo list manager using Java .",
      details: "Integrated my MySQL to persist user tasks and maintain status. Utilized postman to test and validate stressful API throughout the development life cycle.",
      technologies: ["Java", "Maven", "MySQL", "Postman", "Authentication"],
      type: "Full-Stack Project"
    }
  ];

  return (
    <section className="w-full py-12 bg-white" id="projects">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="flex items-center gap-4">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">04</span>
              <span>Projects</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 sm:p-8 shadow-elegant hover:shadow-elegant-hover transition-all duration-300 border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">{project.title}</h3>
                    <span className="px-3 py-1 bg-pulse-100 text-pulse-700 rounded-full text-xs font-medium">
                      {project.type}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{project.period}</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <p className="text-gray-700 leading-relaxed">
                  {project.description}
                </p>
                <p className="text-gray-600 leading-relaxed text-sm bg-gray-50 p-4 rounded-lg">
                  <strong>Technical Implementation:</strong> {project.details}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-pulse-500 text-white rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  <Github className="w-4 h-4" />
                  <span>View Code</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-pulse-500 text-pulse-500 rounded-lg hover:bg-pulse-50 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Want to see more of my work or collaborate on a project?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-pulse-500 text-white rounded-lg hover:bg-pulse-600 transition-colors font-medium"
          >
            Let's Connect
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;