import project1 from '../assets/images/projects/brewhound.png';
import project2 from '../assets/images/projects/prisonbreak.gif';
import project3 from "../assets/images/projects/helloword.png";
import project4 from "../assets/images/projects/notion.png";

export const HERO_CONTENT = ``;

export const ABOUT_TEXT = ``;

export const EXPERIENCES = [
    {
        year: "August 2023 - Present",
        title: "Computer Science Teacher Assistant",
        company: "NMSU",
        desc: [
            'Worked as the Teaching Assistant, providing valuable assistance to students with their queries.',
            'Demonstrated strong communication skills, effective time management, and a solid grasp of foundational course concepts',
            ],
    },
    {
        year: "2022 - 2023",
        title: "'Computer Science Teacher Proctor",
        company: "NMSU",
        desc: [
            'Led CS tutoring sessions in the lab for students. Helped students with their courses like Introduction to Computer Science, Data Structures, Object Oriented Programming, etc.',
            'Ensured all students fully comprehended the weekly curriculum and provided additional support to students who required extra tutoring. Diagnosed computer and software problems using Linux troubleshooting techniques.',
        ],
    },
    {
        year: "2021 - 2022",
        title: "Undergraduate Researcher",
        company: "NMSU",
        desc: [
            'Led CS tutoring sessions in the lab for students. Helped students with their courses like Introduction to Computer Science, Data Structures, Object Oriented Programming, etc.',
            'Ensured all students fully comprehended the weekly curriculum and provided additional support to students who required extra tutoring. Diagnosed computer and software problems using Linux troubleshooting techniques.',
        ],
    },
];

export const PROJECTS = [
    {
        title: "Brew Hound",
        image: project1,
        description:
        "A website for getting concise and clear information regarding beer. Describing different combinations of food and beer for the best taste experience",
        technologies: ["HTML", "CSS", "React"],
        link: "https://github.com/tiennhann/brew-hound"
    },
    {
        title: "Prison Break",
        image: project2,
        description:
        "Prison Break is a top down dungeon crawler puzzle game where you are a prisoner trying to escape from the prison in Alcatraz Island.",
        technologies: ["Lua"],
    },
    {
        title: "Hello World - Recommendation app",
        image: project3,
        description:
        "An app for traveling. Adding all places in the same city and get notifications when you get closer. Plan your trip ahead.",
        technologies: ["HTML", "CSS", "React Native", "Firebase"],
        link: "https://github.com/tiennhann/HW_Recommendations"
    },
    {
        title: "Note Taking",
        image: project4,
        description:
        "A platform for note taking, with features like rich text editing, commenting, and user profiles.",
        technologies: ["Next.js", "React", "Convex", "Tailwind"],
        link: "https://github.com/tiennhann/note-taking"
    },
];