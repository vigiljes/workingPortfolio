import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import userFlowBingo from "../assets/projects/userFlowBingo.jpg";
import recCollect from "../assets/projects/recCollect.jpg";
import moodboard1 from "../assets/projects/moodboard1.png";
import wireframe1 from "../assets/wireframes/wireframe1.png";
import wireframe2 from "../assets/wireframes/wireframe2.png";
import wireframe3 from "../assets/wireframes/wireframe3.png";
import wireframe4 from "../assets/wireframes/wireframe4.png";
import wireframe5 from "../assets/wireframes/wireframe5.png";
import wireframe6 from "../assets/wireframes/wireframe6.png";
import wireframe7 from "../assets/wireframes/wireframe7.png";
import wireframe8 from "../assets/wireframes/wireframe8.png";
import wireframe9 from "../assets/wireframes/wireframe9.png";

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

export const JOBS1 = [
  {
    title: "Inspiration",
    desc1: "Record collecting is more than a hobby—it’s a hunt, a culture, and a deeply personal experience. This project takes that passion and turns it into an interactive, gamified experience, inspired by vintage advertising aesthetics, bold typography from old comics, and the grainy, nostalgic feel of retro brands.",
    subtitle: "Moodboard, Wireframes, and The UX Approach",
    desc2: "The visual identity draws heavily from old-school Americana, pulling references from Joe Camel ads, cigarette packaging, album sleeves, and vintage store signage. Colors lean towards muted, opaque tones to mimic aged prints, while textures add depth that complements the theme of digging through crates and finding hidden gems.",
    desc3: "Collectors thrive on discoverability, rarity, and competition. The bingo-style game enhances this by creating a structured but unpredictable journey, letting users document their finds while chasing rare or themed sets. The UX is fluid, ensuring intuitive interactions that don’t disrupt the thrill of the search."
  },

];

export const JOBS2 = [
  {
    title: "Hi-Fi Frames",
    desc1: "Collectors aren’t just buyers—they’re hunters, storytellers, and curators. This app builds on that by introducing gamified interaction, making every search feel like part of a greater quest. The randomized bingo boards keep the search spontaneous, while community-generated themes allow users to curate the experience based on their personal taste and style. Rather than simply being a digital checklist, the app is designed to reinforce the emotional thrill of finding something unexpected, much like stumbling across a rare vinyl in a dusty bin under a cluttered counter.",
    subtitle: "UX Approach",
    desc2: "This app isn’t just about collecting—it’s about the act of discovery itself. Inspired by the low-tech beauty of record stores, Polaroids, and imperfect analog media, the interface leans into nostalgia by using mixed typography, grainy textures, and lo-fi camera elements that feel personal rather than algorithmic.",
    desc3: "Users don’t just log their finds—they capture moments, as if tacking Polaroids onto the walls of a shop that’s been around for decades. The goal was to mimic that sensory experience—the dim lighting, the quiet hum of a turntable, the faded album covers, and the thrill of flipping through endless stacks in search of the one record that makes everything worth it."
  },

];

export const JOBS3 = [
  {
    title: "skeleton code",
    desc1: "is really",
    subtitle: "the key to",
    desc2: "scalability my slime, ya smell me?",
    desc3: "this should speed things up"
  },

];

export const WIREFRAMES = [
  {
    image: wireframe1,
  },
  {
    image: wireframe2,
  },
  {
    image: wireframe3,
  },
  {
    image: wireframe4,
  },
  {
    image: wireframe5,
  },
  {
    image: wireframe6,
  },
  {
    image: wireframe7,
  },
  {
    image: wireframe8,
  },
  {
    image: wireframe9,
  },
]

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
