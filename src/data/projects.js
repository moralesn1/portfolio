import rubyTerminalProjectImg from "../assets/portfolio_images/project_pictures/rubyterminal.png";
import zenGardenProjectImg from "./../assets/portfolio_images/project_pictures/zengardencss.png";
import portfolioImg from "./../assets/portfolio_images/project_pictures/portfolio.png";
import mysteryBoxMarketImg from "./../assets/portfolio_images/project_pictures/mysteryboxmarket.png";
import dogTrainingProjectImg from "./../assets/portfolio_images/project_pictures/dogtraining.png";
import animalCrossingProjectImg from "./../assets/portfolio_images/project_pictures/animalcrossing.png";

const projects = [
  {
    title: "Ruby Terminal Choices",
    techStack: "Ruby, HTML & CSS",
    image: rubyTerminalProjectImg,
    description:
      "This terminal application was built using Ruby to be run inside the terminal. It's a choice based game with further applications for education or job training.",
    repo: "https://github.com/moralesn1/terminalchoicesgame",
  },
  {
    title: "CSS Zen Garden",
    techStack: "HTML & CSS",
    image: zenGardenProjectImg,
    description:
      "This project was aimed at developing my css skills as well as demonstrating my minimalist approach when it comes to designs.",
    repo: "https://github.com/moralesn1/CSS-Zen-Garden",
  },
  {
    title: "Portfolio",
    techStack: "Javascript, React, Netlify, HTML & CSS",
    image: portfolioImg,
    description:
      "A portfolio to showcase my current abilities, my past projects and my minimalist design approach.",
    repo: "https://github.com/moralesn1/portfolio",
  },
  {
    title: "Mystery Box Markets",
    techStack: "Rails, HTML, CSS, AWS and Heroku",
    image: mysteryBoxMarketImg,
    description:
      "A two sided market place where users buy and sell 'Mystery Boxes'.",
    repo: "https://github.com/Joshua-Tu/rails_team_project",
    link: "https://mystery-box-market.herokuapp.com/",
  },
  {
    title: "Sydney Dog Training",
    techStack: "MERN, HTML, CSS, AWS, Heroku",
    image: dogTrainingProjectImg,
    description:
      "A website providing information on dog training services and information utilising direct contact from potential client to customer.",
    repo: "https://github.com/keshibat/dogtrain_react",
    link: "http://react-keep-static.s3-website-ap-southeast-2.amazonaws.com/",
  },
  {
    title: "AC Inventory Manager",
    techStack: "Javascript, React, Netlify, HTML & CSS",
    image: animalCrossingProjectImg,
    description:
      "An app designed to maximise profit when traveling to different Islands in Animal Crossing. Utilising an API to fetch all the data, utilising the new React Hooks and ES6.",
    repo: "https://github.com/moralesn1/AnimalCrossingTracker",
    link: "https://animalcrossingtracker.netlify.app/",
  },
];

export default projects;
