const ProjectAPI = {
  projectItem: [
    {
      id: 1,
      img: '/project-img/devs4good-img.png',
      name: "Devs 4 Good",
      website: 'http://devs4good.herokuapp.com/',
      github: 'https://github.com/gracenoh153/Devs4Good',
      shortDescription: "Web Development | Project Managment",
      longDescription: "Devs4Good is a platform for web developers can give back to the community by bringing non-profit visions to life. The project was designed in a week working with a team of 3 other Dev Bootcamp Students for our final project.",
      role: "My role on the team was web developer and scrum (project) manager. Working in vertical slices, my team and myself worked on various parts of the back-end and front-end build. In addition to that I made sure that our daily tasks were organized and we knew where the project was going or what needed to be done on a daily basis.",
      frontEnd: "Javascript, jQuery, Bourbon (CSS framework), Trello (Project Managment)",
      backEnd: "Ruby on Rails, PostgreSQL, ActiveRecord, ProPublica Non-Profit API, CKEditor (rich text entry), Sorcery (user login), Travis CI (continuous integration/testing), SimpleCov (test coverage), Heroku (deployment)"
    },
    {
      id: 2,
      img: '/project-img/cassigallagher-portfolio.png',
      name: "Personal Portfolio",
      website: 'http://cassigallagher.com/',
      github: 'https://github.com/CassiG/PersonalPortfolio',
      shortDescription: "Web Development | Web Design",
      longDescription: "This is a personal website created as a way to showcase projects I have worked on or been a part of",
      frontEnd: "HTML5, CSS3, Shoelace-css (CSS framework), Javascript, React"
    },
  ],
  all: function() { return this.projectItem },
  get: function(id) {
    const isProject = project => project.id === id
    return this.projectItem.find(isProject)
  }
}

export default ProjectAPI;
