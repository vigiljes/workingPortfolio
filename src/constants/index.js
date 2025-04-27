import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import userFlowBingo from "../assets/projects/userFlowBingo.jpg";
import recCollect from "../assets/projects/recCollect.jpg";
import moodboard1 from "../assets/projects/moodboard1.png";
import { time } from "framer-motion";


export const HERO_CONTENT = "What up doe! I'm an Experience Architect and Designer, passionate about blending creativity with functionality to solve problems people didn't even know existed. My work spans beyond the screen—it's about connecting the dots between design and engineering to create seamless, impactful experiences. I bring a hands-on approach to the table, using tools like Figma to wireframe intuitive layouts and conducting comprehensive user research to understand needs and behaviors. I'm also fascinated by full stack development, leveraging web frameworks like React, Node.js, TailwindCSS, and Next.js to craft online experiences from the ground up, combining technical innovation with creative storytelling.";

export const ABOUT_TEXT = "Outside of design, I run a barebones independent record label, creating and promoting music entertainment. I believe in the power of innovation, teamwork, and building connections that inspire purpose—both in myself and others. When I'm not brainstorming UX ideas, curating playlists, or exploring the synergy between tech and music, you can find me shooting hoops with friends or diving into collaborative projects. For me, it’s all about bringing people and ideas together to create things that don’t just work, but work beautifully";

export const ABOUT2_TEXT = "Music Collection Bingo was designed to help collectors find the most commonly-collected records, CD’s and other media. Players have randomized boards with the top 200 (across different boards) and they go hunting at swap meets, thrift stores, estate sales. Makes collecting more engaging and is almost humorous (overrated or overplayed songs sold millions, now they are being traded) winners get the “jackpot” (a discount on their purchase)";

export const EXPERIENCES = [
  {
    task: "User Need",
    image: recCollect,
    description: "A collector wants to make their next trade show more engaging. They want to gauge what kinds of media are collected in different areas. This can allow them to easily recognize patterns when collecting and help find that rare item (i.e. if all they have is Herb Alpert and Kenny G, it’s a wrap) There is an incentive to win (winner takes “jackpot”)",
  },
  {
    task: "User Flows",
    image: userFlowBingo,
    description: "User flows were determined using purchasing trend data on Discogs.com where users trade and keep track of their collections. Ideation stage idea: users will pick from a community collection of boards or generate them randomly based on their taste preferences or taste-level based on current collection.",
  },  {
    task: "Moodboard",
    image: moodboard1,
    description: "Created a moodboard to guide art direction and color selection. I decided to take time to create my own icons for my first time!",
  },
];

export const EXPERIENCES2 = [
  {
    time: "4 Weeks",
    role: "Lead UX Designer",
    description: "User Research, UX/UI Design, Branding, User Flows, Prototyping and Testing",
    technologies: ["Figma", "Adobe Creative Cloud", "Discogs"],
  },

];

export const PROJECTS = [
  {
    title: "Record Collector's Bingo App",
    image: project1,
    description:
      "Designed a working prototype for a competitive collect-a-thon for the record collecting community using Figma, Adobe Creative Cloud and Public Figma assets.",
    technologies: ["Figma", "Adobe Illustrator", "Discogs", "React", "Paint"],
  },
  {
    title: "Spotify Mood Creator",
    image: project2,
    description: "An application designed for personalized music management and mood selection, featuring functionalities such as playlist creation, mood-based song suggestions, and real-time customization to enhance listening experiences using Spotify's public web API.",    
    technologies: ["HTML", "CSS", "Javascript", "React"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Node.js", "React", "Tailwind CSS", "MotionDEV"],
  },
  {
    title: "Personal Blogging Platform",
    image: project4,
    description:
      "A personal blogging platform crafted to chronicle the fusion of user experience design and the vibrant world of hip-hop and music. The platform serves as a creative space to log insights, share stories, and explore the intersection of UX and musical artistry.",
    technologies: ["HTML", "CSS", "Javascript", "Youtube", "Ubuntu WSL"],
  },
];

export const CONTACT = {
  address: "220 Trowbridge Rd",
  phoneNo: "+1 678 999 8212",
  email: "vigiljes@msu.edu",
};
