import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = "What up doe! I'm an Experience Architect and Designer, passionate about blending creativity with functionality to solve problems people didn't even know existed. My work spans beyond the screen—it's about connecting the dots between design and engineering to create seamless, impactful experiences. I bring a hands-on approach to the table, using tools like Figma to wireframe intuitive layouts and conducting comprehensive user research to understand needs and behaviors. I'm also fascinated by full stack development, leveraging web frameworks like React, Node.js, TailwindCSS, and Next.js to craft online experiences from the ground up, combining technical innovation with creative storytelling.";

export const ABOUT_TEXT = "Outside of design, I run a barebones independent record label, creating and promoting music entertainment. I believe in the power of innovation, teamwork, and building connections that inspire purpose—both in myself and others. When I'm not brainstorming UX ideas, curating playlists, or exploring the synergy between tech and music, you can find me shooting hoops with friends or diving into collaborative projects. For me, it’s all about bringing people and ideas together to create things that don’t just work, but work beautifully";

export const EXPERIENCES = [
  {
    year: "2021 - Present",
    role: "Management Assistant",
    company: "MSU Union",
    description: "Develop effective strategies for efficient event set-ups by organizing and distributing diagrams and documents to a team of two supervisors emphasizing customer satisfaction and consistency",
    technologies: ["Word/Docs", "Excel/Sheets", "Spotify"],
  },
  {
    year: "2020 - 2021",
    role: "Front-End Developer",
    company: "Independent",
    description: `**Developed and maintained web applications using Figma, Python, Javascript and basic HTML/CSS. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Figma", "Javascript", "HTML/CSS"],
  },
  {
    year: "2019 - 2020",
    role: "Receiving Team Lead",
    company: "Christensen's Plant Center",
    description: `Demonstrated proficiency in operating its advanced hydraulic systems and zero-turn maneuverability, optimizing overall team performance in confined workspaces.`,
    technologies: ["ADP", "Transceiver", "Excel/Sheets", "mySQL"],
  },
  {
    year: "2016 - 2018",
    role: "Free-Lance Audio/Video Editing/Graphic Design",
    company: "Independent",
    description: `Developed expertise in graphic design and visual engagement through dedicated practice and study, including the creation of independent projects to refine and enhance skills over time.`,
    technologies: ["Sony Vegas", "Photoshop/GIMP", "Splice", "FL Studio"],
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
    description: "An application designed for personalized music management and mood selection, featuring functionalities such as playlist creation, mood-based song suggestions, and real-time customization to enhance listening experiences.",    
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
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
    technologies: ["HTML", "CSS", "Javascript", "Youtube", "Netlify"],
  },
];

export const CONTACT = {
  address: "220 Trowbridge Rd",
  phoneNo: "+1 678 999 8212",
  email: "vigiljes@msu.edu",
};
