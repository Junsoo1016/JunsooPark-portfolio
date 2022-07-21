import React from "react";

const logotext = "Junsoo Park";
const meta = {
    title: "Jun Park",
    description: "Hello, my name is Jun, I am a full stack devloper,currently working in New York",
};

const introdata = {
    animated: {
        first: "I am Jun Soo Park",
        second: "I am a software engineer",
        third: "I develop websites & mobile apps",
    },
    description: "Hi, my name is Junsoo Park and I am a New York-based software engineer and self-motivated learner with experience developing full stack applications. I love to solve problems using programmatic thinking and analytical skills. Transferable skills include project management, adaptability, teamwork, and effective communication. If you have any questions, please feel free to contact me.",
};

const dataabout = {
    title: "More about me - I'm from",
    aboutme: "Seoul, San Francisco, and New York",
};
const worktimeline = [{
        jobtitle: "Software Engineer",
        where: "General Assembly",
        date: "Apr 2022 - Present",
    },
    {
        jobtitle: "Architectural Lighting Designer",
        where: "L'Observatoire International",
        date: "Aug 2018 - Mar 2022",
    }
];

const skills = [{
        name: "Python"
    },
    {
        name: "Django"
    },
    {
        name: "Javascript"
    },
    {
        name: "React"
    },
    {
        name: "Node.js"
    },
    {
        name: "Express.js"
    },
    {
        name: "MongoDB"
    },
    {
        name: "Java"
    }
];

const dataportfolio = [
    {
        img: "/images/Captain.png",
        desctiption: "Captain Citizen America",
        link: "https://captain-citizen-america.netlify.app/",
        tools: " 'React.js', 'Python', 'Django' " 
    },
    {
        img: "/images/Petstagram.png",
        desctiption: "Petstagram",
        link: "https://petstagram-sei.surge.sh/",
        tools: "'React.js', 'Node.js', 'Express.js', 'MongoDB'" 
    },
    {
        img: "/images/Gather.png",
        desctiption: "Gather",
        link: "https://junspark-gather-app.netlify.app/",
        tools: "'React.js', 'Node.js', 'Express.js', 'MongoDB'"
    },
    {
        img: "/images/Maru.png",
        desctiption: "The Journey Of Maru",
        link: "https://the-journey-of-maru.netlify.app/",
        tools: "'HTML / CSS', 'JavaScript'"
    },
];

const contactConfig = {
    YOUR_EMAIL: "junsoopark92@gmail.com",
    YOUR_FONE: "(555)123-4567",
    description: "Feel free to say hello.",
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/Junsoo1016",
    linkedin: "https://www.linkedin.com/in/junsoopark92"
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};