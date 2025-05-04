import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.png";
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
import wireframe10 from "../assets/wireframes/wireframe10.png";
import wireframe11 from "../assets/wireframes/wireframe11.png";
import wireframe12 from "../assets/wireframes/wireframe12.png";
import wireframe13 from "../assets/wireframes/wireframe13.png";
import wireframe14 from "../assets/wireframes/wireframe14.png";
import wireframe15 from "../assets/wireframes/wireframe15.png";
import wireframe16 from "../assets/wireframes/wireframe16.png";
import wireframe17 from "../assets/wireframes/wireframe17.png";
import wireframe18 from "../assets/wireframes/wireframe18.png";


import { time } from "framer-motion";
import { desc } from "framer-motion/client";


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
    title: "📌 Where It Started",
    desc1: "A challenge was set—build something from scratch using an existing API. Given only three weeks, my friend and I took it upon ourselves to push the limits of Spotify's functionalities. The core idea? Mood-based recommendations, letting users explore new music without committing to rigid playlists.",
    subtitle: "🤖 How AI Became Part of the Process",
    subtitle2: "🎶 What the App Actually Does",
    subtitle3: "🧐 Lessons Learned & What Could Have Been Improved",
    subtitle4: "⚡ Three Weeks, Tight Execution, Big Takeaways",
    desc2: "AI wasn’t just a tool—it was like having an extra brain in the room. We used it to interpret API structures, generate usable code, and troubleshoot inconsistencies when things weren’t lining up. It wasn’t perfect, but the process taught us just how effective AI can be in accelerating digital product creation when time is short.",
    desc3: "Users log in and start exploring. The system analyzes mood-based factors like time, weather, genre, song key, and pitch, then suggests tracks that match the moment. It doesn’t interfere with Spotify’s native playlist system—it works alongside it, serving as a test space for discovery that could, over time, refine a person’s listening habits.",
    desc5: "The app worked—but the mood detection? That’s where things could’ve been sharper. Given more time, deeper user research and AI assistance could’ve fine-tuned the recommendation engine, making it feel less like an algorithm and more like a true personal assistant for music discovery.",
    desc6: "With little time, limited assets, and no graphic design expertise, we kept the visuals simple but made sure the concept shined. The project showed that when time is short, you have to focus on core interactions and embrace iteration. Even as a rough prototype, the potential was there—a functional case study proving that the intersection of AI, music, and UX design is something worth exploring further.",
  },
];

export const JOBS4 = [
  {
    title: "The Process Over the Platform 🤖",
    desc1: "This wasn’t just about putting projects on display—it was about proving adaptability. Jumping into new frameworks, experimenting with AI-assisted workflows, and building something from scratch meant understanding how different tools complement each other. From refining React components to navigating npm dependencies, this portfolio reflects how learning isn’t just theoretical—it’s hands-on, iterative, and integrated into real execution.",
    subtitle: "UX Engineering: Marrying Functionality with Form 🎨🖥️",
    subtitle2: "Designing for the User, Not Just the Code 🎯",
    subtitle3: "Overcoming Challenges: Time, Optimization & Accessibility ⏳📱",
    subtitle4: "Not a Collection, But a Foundation 🚀🔗",
    desc2: "I wanted something that felt modern but wasn’t just design for design’s sake. The goal was fluidity, usability, and a structure that showcases how UX engineering ties together aesthetics with interactive logic. Minimal clutter, intentional interactions, and layouts that guide users through the experience—not just display information.",
    desc3: "Every project builds on the last, but the biggest takeaway wasn’t technical—it was how people actually interact with digital experiences. Understanding user engagement goes beyond just code; it’s about designing interactions that feel natural, intuitive, and genuinely enjoyable.",
    desc01: "Record Bingo reinforced the importance of gamification—how structured incentives keep users invested, making engagement feel intentional rather than forced. It showed how a well-designed flow can turn an app from a simple tool into an experience, something people actively want to use rather than something they tolerate.",
    desc02: "As an app user myself, I took time to reflect on what makes interfaces feel seamless versus frustrating. How do I navigate digital spaces? What makes me stay on a page versus click away? Those insights shaped this portfolio, emphasizing clear hierarchy, minimal clutter, and transitions that enhance rather than disrupt navigation.",
    desc03: "Ultimately, good UX isn’t just about functionality—it’s about behavior. This portfolio isn’t just a showcase; it’s a reflection of structured research combined with lived experience, balancing technical precision with the way people actually interact with technology.",
    desc5: "Starting from scratch with only two weeks left in a three-week timeframe meant moving fast—no room for delays, no time for second-guessing. Every decision had to be purposeful, efficient, and flexible enough to work under real constraints",
    desc04: "Optimization struggles hit early—balancing performance without overcomplicating dependencies meant refining components repeatedly, making sure everything ran smoothly without sacrificing complexity",
    desc05: "Mobile responsiveness became a must, forcing adjustments to layout scaling, touch-friendly interactions, and ensuring the design wasn’t just functional on desktops but accessible across devices.",
    desc06: "The time factor meant trade-offs—some polish had to wait, deeper iterations had to be saved for later, but the foundation of the portfolio remained solid, proving that adaptability and smart decision-making beat perfection when deadlines are tight.",
    desc07: "",
    desc08: "",
    desc6: "This isn’t just a set of projects—it’s a launchpad for future web applications. Everything picked up—React fundamentals, animations, scalable routing, AI-assisted troubleshooting—gets applied here. This portfolio represents what comes next—not just what’s already been built.",
  },
];

export const JOBS5 = [
  {
    title: "📌 Where It Started",
    desc1: "I knew exactly what I wanted—a personal hub for everything I do creatively. A place where I could showcase my music, my merch, my inspirations, and make it feel alive, not just another static webpage.But the execution? Yeah, it wasn’t there. I threw together basic HTML and CSS, no JavaScript, no real structure—just whatever I could piece together at the time. It worked, technically, but it was primitive. Navigating it felt rigid, slow, and frustrating, because I didn’t yet have the knowledge or tools to bring it to life the way I imagined.",
    
    subtitle: "💡 What I Got Right, Even With Limited Skills",
    desc2: "Even though the project wasn’t exactly what I wanted, there were still elements worth keeping. The embedded video and music links were a step in the right direction—at the very least, they put my content front and center, even if the presentation lacked refinement. The execution might not have been polished, but the intent was always clear: make my work easily accessible and create a space where everything I produce has a proper place.",
    desc99: "Navigation, though far from intuitive, did what it needed to do. It wasn’t elegant, it wasn’t fluid, but it worked. People could move around, find things, and explore different sections of the site, even if the experience felt clunky. Looking back, I can see where it needed serious restructuring, but at the time, simply having functional pathways to my content felt like an achievement.",
    desc98: "One of the stronger aspects was the card-based UI. I instinctively built elements in a way that could be expanded later, even though I didn’t yet have the means or knowledge to push it further. The idea of modularity was there, just waiting for the right tools and approach to unlock its full potential. Now that I know how to properly structure layouts and create interactive, scalable designs, I can take that concept and execute it the way I originally envisioned.",
    desc97: "I also made an effort to incorporate hover effects and GIFs to add interactivity and engagement. It was a small touch, but an important one—I wanted the experience to feel dynamic, to have movement, even if the underlying framework wasn’t strong enough to support the level of immersion I was aiming for. The ideas were solid, just held back by the limitations of my technical skills at the time.",
    desc96: "Now that I know how to build properly, the foundation I laid back then can actually evolve into something functional, immersive, and intentional. The vision was always there; I just didn’t have the tools to make it happen the way I wanted. But that’s changed now, and the next iteration is going to be exactly what it should have been from the start.",
    
    subtitle2: "🚀 What Held Me Back",
    desc3: "I knew exactly where this project could go, but I just didn’t have the expertise at the time to make it happen the way I envisioned. The biggest limitation was the lack of JavaScript or dynamic logic—without React, Next.js, or even basic JS, everything was completely static. There were no smooth interactions, no real-time content updates, and none of the polished UI functionality that would’ve made the experience truly immersive. It was a page that displayed content, nothing more, and that wasn’t nearly enough to capture the creative energy I wanted it to reflect.",
    desc01: "On top of that, the entire development process was painfully inefficient. I spent far too much time stuck in trial-and-error, manually tweaking things just to make simple adjustments work. Every broken layout, every misplaced element, every weird styling issue had to be fixed one by one, without any streamlined workflow to guide me. It was slow, frustrating, and made even minor changes feel like a massive undertaking—something that modern tools would’ve solved instantly.",
    desc02: "The navigation and layout scaling were another huge weakness. The site wasn’t built with responsiveness in mind, so it didn’t adjust well across different devices. Elements felt clunky, rigid, and anything but intuitive. It wasn’t engaging, it wasn’t fluid—it was just frustrating. Instead of guiding users through my work in a way that felt natural, it created unnecessary roadblocks, making it harder to explore rather than inviting curiosity.",
    desc03: "The biggest structural flaw, though, was the lack of any backend. Everything was hardcoded—every music link, every merch listing, every detail manually placed without any dynamic functionality. That meant no custom music player, no organized merch system, and absolutely no scalability. If I wanted to add something new or modify an existing section, I had to go in and manually update everything, which made the whole project feel impractical to maintain.",
    desc95: "All of this held the portfolio back from being what I knew it could be. The ideas were there—the vision was solid—but I didn’t yet have the technical foundation to execute them properly. Now, with everything I’ve learned, I can take those core concepts and actually build them the way they were meant to be, without running into the same frustrating limitations.",

    subtitle3: "🧐🔥 What I Can Make Now",
    desc5: "I’m not that person anymore. Now, I have the technical skillset to build this properly—to take the raw vision I had back then and fully execute it with the best tools available. The scattered ideas and half-baked execution from before can finally evolve into something structured, functional, and immersive, exactly as I imagined it.",
    desc04: "A fully immersive dashboard is the foundation. Inspired by the Xbox 360 interface, it will feature hover effects, animated transitions, and depth-layered UI, making navigation feel fluid and engaging rather than static and rigid. No more basic layouts—this will be an interactive space where movement and responsiveness drive the user experience.",
    desc05: "A personal streaming hub replaces outdated embeds. Instead of throwing in external links, I’ll build a custom media player—waveform visualization, track history, and real-time updates that let people actually interact with my work rather than just passively scrolling past it. This turns my portfolio into a living platform, where music and videos feel central rather than secondary.",
    desc06: "A modern merch store completes the experience. No more simple images and links—this time, it’s interactive product displays, Stripe integration, and real-time inventory updates, ensuring everything functions like an actual professional storefront rather than a placeholder idea. Visitors won’t just see what I create—they’ll have the ability to support it directly through a seamless shopping experience.",
    desc07: "A modular UI makes expansion effortless. Instead of rigid layouts, each section will be built to evolve, meaning I can expand and refine the site over time instead of feeling locked into a static version. Whether it’s adding new projects, shifting design elements, or incorporating emerging ideas, scalability will finally be on my side.",
    desc08: "Optimized performance and modern functionality tie everything together. No more slow, painstaking trial-and-error—Next.js, TailwindCSS, Framer Motion, and server-side rendering will ensure smooth animations, instant load speeds, and intelligent caching so the experience feels polished and effortless. It’ll be fast, responsive, and immersive, with every element built intentionally rather than hastily patched together.",
    
    subtitle4: "🏆 The Final Goal: Bringing My Vision to Life",
    desc6: "This isn’t just a portfolio anymore—it’s a space that truly represents me and everything I create. It’s no longer just a collection of projects; it’s a living, evolving hub, built with intentional design, interactivity, and modern development practices to fully showcase my work.",
    desc09: "This site will adapt and grow with me, expanding as my creative journey evolves rather than staying static. Instead of feeling like a set-in-stone project, it will become a dynamic space, allowing me to refine, enhance, and add new ideas over time without limitations.",
    desc10: "It will also serve as a hub where fans and supporters can truly engage with my music, merch, and projects. Instead of being just another portfolio, it will invite participation, offering a personal marketplace, streaming hub, and creative showcase, giving people a direct way to experience and support my work.",
    desc11: "At the core of it all will be a fully immersive dashboard, where every element is built for interaction, not just display. The experience will feel fluid, engaging, and intuitive, designed to reflect the artistry behind my work rather than just a place to click through projects.",
    desc12: "🔥 This time, it’s exactly what I envisioned—not just a portfolio, but a fully realized creative universe. Next step? Execution! And this time, I have everything I need to make it happen. Let’s build. 🏗️",
  },
];

export const JOBS6 = [
  {
    title: "Concept Statement 🗒️",

    subtitle: "Project Overview 🔎",
    desc1: "An elementary school teacher is in search of immersive experiences for her music students (class band). They are looking for something thats fun for both students and teachers/parents and reinforces multiple types of learning. (with tactile, visual and auditory feedback for user input).",
    desc2: "This project spanned five weeks, developed with a team of designers focused on interactive learning environments. The primary goal was to craft an exhibit that engaged elementary music students through multi-sensory interaction—something that reinforced tactile, visual, and auditory learning while keeping the experience fun for students, teachers, and parents.",
    desc99: "We took inspiration from existing interactive museum exhibits and analyzed how kids respond to immersive educational settings. Through research and brainstorming, we shaped an exhibit that balanced structured learning with playful experimentation.",
    desc98: "To create the most engaging experience possible, we decided on a format that combined guided demonstrations and freeform interaction. This way, different types of learners—those who need structured explanations and those who learn best through exploration—could all benefit.",
    desc97: "",
    desc96: "",
    images1: [wireframe10, wireframe13, wireframe14], // 👈 Images for this section

    subtitle2: "Project Process 📝",
    desc3: "Our team began with brainstorming and research, listing interaction possibilities and studying museum exhibits that successfully integrated multi-sensory learning. The goal was to understand how kids naturally engage with hands-on learning.",
    desc01: "One of our first steps was choosing a location where the exhibit could be tested effectively. This influenced decisions on accessibility, space, and potential modifications to enhance the experience.",
    desc02: "We developed an individual learning plan outlining user needs, motivations, behaviors, and pain points. This was based on comparative analysis, focus groups, and surveys, giving us a clearer picture of how students and teachers might engage with the system.",
    desc03: "The learning plan revealed key challenges, like ensuring engagement despite shortened attention spans and making terminology accessible for younger students. Addressing these concerns meant simplifying complex ideas while keeping interactions dynamic.",
    desc95: "To further refine engagement strategies, we created a Proto Persona of a curious 5th-grade student. This persona helped guide decisions on interaction flow, user feedback, and adaptability within the exhibit’s design.",
    images2: [wireframe12, wireframe11, wireframe15], // 👈 More images here

    subtitle3: "Sketching and Wireframing 🖌️",
    desc5: "After defining the user experience, we moved into task flows and initial wireframing. Sketching out wireframes helped visualize how different elements would interact, ensuring a smooth transition from conceptual ideas to functional designs. Wireframing focused primarily on mid-fidelity designs. Given the project’s emphasis on sound rather than visuals, this approach kept the interaction clean without unnecessary complexity.",
    desc04: "Visual design played a supporting role rather than a leading one. The aesthetic elements—color choices, animations, and layout—reinforced the user experience without distracting from the core concept. Moodboarding and wireframing happened simultaneously, not in a strict sequence. Though unconventional, this method allowed flexibility when designing interactions based on user needs.",
    desc05: "Interaction Design Methods 📐",
    desc06: "Users entered the exhibit greeted by subtle motifs, sheet music visuals, and ambient sound cues. These initial elements created an immersive environment before direct interaction even began. The platform was designed to lock for safety while users explored its tactile components. With a dance-floor-style interface, users could step on various elements to experiment with sound-triggered engagement. User flow focused on active interaction. Stepping onto pressure-sensitive panels triggered real-time changes in color and sound. The goal was to let users physically engage with musical elements through movement.",
    desc07: "Jumping on different panels played corresponding musical notes, allowing multiple users to collaborate in real time to create their own songs. This dynamic encouraged both individual creativity and group participation. Task flow followed a structured approach. Users first chose between Watch & Learn Mode, which offered guided demonstrations, or Fun Mode, which allowed freeform interaction. This ensured accessibility for different learning styles.",
    desc08: "Watch & Learn Mode broke music into segments, using animations to reinforce note progression. Users selected an instrument, watched a demonstration, and followed along visually. Fun Mode operated as a Simon Says-style rhythm game, where users engaged with musical patterns in an intuitive, movement-based format. The design aimed to make learning feel like play rather than rigid instruction. Throughout the experience, wall projections displayed complementary visuals. Some walls showed sheet music for reference, while others projected interactive sequences that responded to user movements.",
    images3: [wireframe16, wireframe17], // 👈 Images for this section

    subtitle4: "The Prototype! ⚙️",
    desc6: "The project resulted in a mid-fidelity prototype recording, setting up the foundation for an immersive 3D VR experience currently in development through Unity3D.",
    desc09: "Because the exhibit prioritized sound over excessive visual complexity, the mid-fi prototype was a necessary stepping stone rather than a limitation. The goal was always interaction through auditory and tactile elements, rather than overwhelming users with visuals.",
    desc10: "This prototype demonstrated interactive sound-learning at its core, with movement-driven engagement setting the groundwork for future iterations. Though time constraints prevented full execution, the ambitious scope of the project highlighted how interactive learning could evolve beyond simple exhibits.",
    desc11: "The core takeaway from this project was proving that play-based education can be both structured and freeform, allowing different types of learners to engage in ways that suit their strengths. There’s still a lot of potential to expand on the initial prototype, especially as development moves toward a fully immersive VR experience.",
    desc12: "While the project didn’t reach its final vision yet, it created a solid foundation for multi-sensory education using interactive sound technology. At its core, Circle of Sound bridges structured learning with exploration, offering students and teachers an engaging platform for discovering music in a new way.",
    images4: [wireframe18], // 👈 Images for this section
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
    id: "record-bingo",
    title: "Record Collector's Bingo App",
    image: project1,
    description:
      "Designed a working prototype for a competitive collect-a-thon for the record collecting community using Figma, Adobe Creative Cloud and Public Figma assets.",
    technologies: ["Figma", "Adobe Illustrator", "Discogs", "React", "Paint"],
  },
  {
    id: "interactive-learning",
    title: "Circle of Fifths - Interactive Learning",
    image: project5,
    description:
      "Designed a prototype for an interactive learning museum exhibit using Figma, Adobe Creative Cloud and Public Figma assets.",
    technologies: ["Figma", "Adobe Illustrator", "Unity"],
  },
  {
    id: "spotify-mood-creator",
    website: "https://spotlifiedmood.netlify.app/",
    title: "Spotify Mood Creator",
    image: project2,
    description:
      "An application designed for personalized music management and mood selection, featuring functionalities such as playlist creation, mood-based song suggestions, and real-time customization to enhance listening experiences using Spotify's public web API.",
    technologies: ["HTML", "CSS", "Javascript", "React"],
  },
  {
    id: "portfolio-website",
    website: "https://chuyvii.com",
    title: "Portfolio Website",
    image: project3,
    description: "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Node.js", "React", "Tailwind CSS", "MotionDEV"],
  },
  {
    id: "personal-blog",
    title: "Personal Blogging Platform",
    website: "https://spiffy-phoenix-bb98f5.netlify.app/",
    image: project4,
    description:
      "A personal blogging platform crafted to chronicle the fusion of user experience design and the vibrant world of hip-hop and music. The platform serves as a creative space to log insights, share stories, and explore the intersection of UX and musical artistry.",
    technologies: ["HTML", "CSS", "Javascript", "Youtube", "Ubuntu WSL"],
  },
];

export const CONTACT = {
  address: "Jesus Vigil",
  phoneNo: "© Copyright 2025",
  email: "vigiljes@msu.edu",
};
