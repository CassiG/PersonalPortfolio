const ProjectAPI = {
  projectItem: [
    {
      id: 1,
      img: '/project-img/devs4good-img.png',
      name: "Devs 4 Good",
      description: "A great project"
    },
  ],
  all: function() { return this.projectItem }
}

export default ProjectAPI;
