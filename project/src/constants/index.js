import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    logo1,
    logo2,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    
    {
      title: "Front-end : React",
      icon: mobile,
    },
    {
      title: "Backend : Django",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];


  const experiences = [
    {
      title: "Problem Faces",
      icon: logo1,
      iconBg: "#383E56",
      points: [
        "Everyone are taught about physical health and well-being, but not the mental stateof our body. Every day, numerous women are stalked or publicly harassed in thisworld.",
        "And, they are still bound to go through this as a part of their day to day life. More orless becoming a part of their life.",
        "As the fear of being stereotyped, most of these women even fear to lodge a policecomplaint and just carry on as if nothing had happened. Though women haveexcelled in various fields, they still go through these and there is no still a standalonesolution to solve the mental harassment.",
      ],
    },
    {
      title: "Sudden Spark",
      icon: logo2,
      iconBg: "#E6DEDD",
      points: [
        "A solution of visiting psychiatrist is present, but not a lot of women are opting on it,due to the instilled fear of being stereotyped and targeted.",
        "Thus, here women’s complaints would remain anonymous and no one would have the knowledge of her trauma being shared, only if she exists her doctors and medicos who would be assisting her in getting cured.",
      ],
    },
    
  ];
  
  export { services, technologies, experiences, };