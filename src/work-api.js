const WorkAPI = {
  workItem: [
    { id: 1, name: "Project 1", description: "A great project" },
    { id: 2, name: "Project 2", description: "Another great project" },
  ],
  all: function() { return this.workItem }
}

export default WorkAPI;
