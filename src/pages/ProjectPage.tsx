import LearnifyXCodeIMG from "../assets/LearnifyxCode-Screenshot.png";
import TaskListIMG from "../assets/TaskList Screenshot.png";
import PortfolioIMG from "../assets/funny-ph.png";
const projects = [
  {
    id: 1,
    name: "LearnifyXCode",
    description: (
      <>
        An app to help structure your code projects, maybe also learn how to
        code (it's not finished...).
        <br />
        <br />
        - Tools: Visual Studio Code, Node.js, React, NextUI
        <br />
        - Programming Language: Typescript, HTML, CSS
        <br />
        <br />
        Intension: I had the struggle myself, that I was always weirdly
        organizing my Projects and Brainstorming, so I forgot many things. Then
        I had the Idea to build a Webapp that helps me with that problem
        afterwards and I get more of routine while building this webapp.
      </>
    ),
    image: LearnifyXCodeIMG,
    githubLink: "https://github.com/LeonNilsSch/LearnifyXCode",
  },
  {
    id: 2,
    name: "Tasklist App",
    description: (
      <>
        description: Just a simple tasklist that you can edit and delete tasks
        from lmao, but it looks cool though...
        <br />
        <br />
        - Tools: Visual Studio Code, Node.js, React, StyledComponents
        <br />
        - Programming Language: JavaScript, HTML, CSS
        <br />
        <br />
        Intension: this was my very first project that I created, it had the
        goal to get more into JavaScript, HTML and CSS. Ive learned that its
        normal to encounter "evil" errors sometimes that will try to break you,
        and to be patient with my own learningcurve.
      </>
    ),
    image: TaskListIMG,
    githubLink: "https://github.com/LeonNilsSch/tasklist-webapp",
  },
  {
    id: 3,
    name: "This Portfolio",
    description: (
      <>
        This portfolio that you are on right now just to showcase my goofy
        lookin ass :D
        <br />
        <br />
        - Tools: Visual Studio Code / Zed, Vite, Node.js., NextUI, TailwindCSS
        <br />
        - Programming Language: JavaScript, HTML, CSS
        <br />
        <br />
        Intension: I wanted to elevate my Web Engineering by using new and cool
        UI Libraries. Ive tried to create a Portfolio website many times but
        wasnt really happy with what I build with my beginner knowledge so I did
        my research and then go for a Website that looks good and is well
        developed.
      </>
    ),
    image: PortfolioIMG,
    githubLink: "https://github.com/LeonNilsSch/portfolio-website",
  },
];

const ProjectPage = () => {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-3">My Projects</h1>
      <h2 className="text-1xl mb-12">
        these are some more details to my own Projects
      </h2>
      <div className="space-y-8">
        {projects.map((project) => (
          <div key={project.id} className="max-w-lg mx-auto">
            <img
              className="w-full h-64 object-cover rounded-lg"
              src={project.image}
              alt={project.name}
            />
            <div className="bg-white p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.githubLink}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
