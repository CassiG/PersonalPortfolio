const ProjectAPI = {
  projectItem: [
    {
      id: 1,
      img: '/project-img/devs4good-img.png',
      name: "Devs 4 Good",
      website: 'http://devs4good.herokuapp.com/',
      shortDescription: "Web Development | Project Managment",
      longDescription: "Devs4Good is a platform for web developers can give back to the community by bringing non-profit visions to life. The project was designed in a week working with a team of 3 other Dev Bootcamp Students for our final project.",
      role: "My role on the team was web developer and scrum (project) manager. Working in vertical slices, my team and myself worked on various parts of the back-end and front-end build. In addition to that I made sure that our daily tasks were organized and we knew where the project was going or what needed to be done on a daily basis.",
      technology: "Ruby on Rails, PostgreSQL, ActiveRecord, JQuery, ProPublica Non-Profit API, CKEditor (rich text entry), Sorcery (user login), Bourbon (CSS framework), Travis CI (continuous integration/testing), SimpleCov (test coverage), Heroku (deployment), Trello (Project Managment)"
    },
  ],
  all: function() { return this.projectItem },
  get: function(id) {
    const isProject = project => project.id === id
    return this.projectItem.find(isProject)
  }
}

export default ProjectAPI;
