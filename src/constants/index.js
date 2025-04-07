import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

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
