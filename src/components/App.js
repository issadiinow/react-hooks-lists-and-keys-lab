import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import ProjectList from "./ProjectList";

function App() {
  const user = {
    name: "Liza",
    city: "New York",
    color: "firebrick",
    bio: "A passionate Web Developer.",
    links: {
      github: "https://github.com/Liza",
      linkedin: "https://linkedin.com/in/Liza",
    },
  };

  const projects = [
    {
      id: 1,
      name: "Project One",
      description: "This is the first project.",
      technologies: ["React", "JavaScript", "CSS"],
    },
    {
      id: 2,
      name: "Project Two",
      description: "This is the second project.",
      technologies: ["HTML", "CSS", "Ruby"],
    },
    {
      id: 3,
      name: "Project Three",
      description: "This is the third project.",
      technologies: ["Python", "Django", "PostgreSQL"],
    },
  ];

  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} github={user.links.github} linkedin={user.links.linkedin} />
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
