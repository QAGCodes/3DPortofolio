import {
  mobile,
  backend,
  web,
  reactjs,
  tailwind,
  figma,
  woven,
  purdue,
  kaust,
  nextjs,
  postgresql,
  sqlite,
  github_black,
  c,
  ataatech,
  mzeeij,
  meetup,
  mzeeijProject,
  mozn,
  threatMonitor,
  pwc,
  golang
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineering Explorer",
    icon: web,
  },
  {
    title: "Tech Enthusiast with Diverse Interests",
    icon: mobile,
  },
  {
    title: "Backend & Automation Learner",
    icon: backend,
  },
];

const technologies = [
  {
    name: "C",
    icon: c,
  },
  {
    name: "ReactJS",
    icon: reactjs,
  },
  {
    name: "NextJS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "postgreSQL",
    icon: postgresql,
  },
  {
    name: "sqlite",
    icon: sqlite,
  },
  {
    name: "github",
    icon: github_black,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "golang",
    icon: golang,
  },

];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Mozn",
    icon: mozn, //TODO: Add icon for Mozn
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Present",
    points: [
      "Authored design documents fostering technical discussions and precise implementation strategies.",
      "Optimized queries, achieving a 99.9% performance enhancement.",
      "Implemented features tailored to client-requested functionalities, enhancing user experience.",
    ],
  },
  {
    title: "Junior Developer",
    company_name: "ThreatMonitor",
    icon: threatMonitor, //TODO: Add icon for ThreatMonitor
    iconBg: "#E6DEDD",
    date: "May 2024 - Aug 2024",
    points: [
      "Developed a web scraping tool to monitor the Russian Market website for customer domain leaks.",
      "Implemented brand impersonation detection by scraping Twitter and LinkedIn for customer-specified keywords.",
      "Created executive impersonation detection features by identifying accounts with usernames or display names similar to company executives.",
    ],
  },
  {
    title: "Deals Tech Intern",
    company_name: "PricewaterhouseCoopers (PwC)",
    icon: pwc, //TODO: Add icon for PwC
    iconBg: "#E6DEDD",
    date: "Jun 2024 - Aug 2024",
    points: [
      "Automated the creation of client teasers for the Corporate Finance team which reduced manual effort to a single click.",
      "Developed a GPT-powered tool to extract data from broker reports into Google Sheets.",
      "Created a tool to automate data transfer between Word document templates as part of a Claims Management project.",
    ],
  },
  {
    title: "Graduate Researcher",
    company_name: "KAUST",
    icon: kaust, //TODO: Add icon for KAUST
    iconBg: "#E6DEDD",
    date: "Jan 2024 - May 2024",
    points: [
      "Developed a tool utilizing communicative LLM agents to automate system testing of microservices.",
      "Published a paper titled 'Towards LLM-Assisted System Testing for Microservices' at the IEEE AI-DCS workshop.",
    ],
  },
  {
    title: "Front-End Engineer",
    company_name: "Mzeeij",
    icon: mzeeij, //TODO: Add icon for Mzeeij
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Present",
    points: [
      "Responsible for developing the front-end of Mzeeij's IMS system using NextJS.",
      "Leading technical documentation efforts including sprint planning and requirements' collection.",
    ],
  },
  {
    title: "Teaching Assistant",
    company_name: "Purdue University",
    icon: purdue, //TODO: Add icon for Purdue
    iconBg: "#E6DEDD",
    date: "Jan 2022 - May 2023",
    points: [
      "Assisted in teaching Java Programming, Computer Architecture, and Operating Systems courses over 3 semesters.",
      "Instructed two weekly 2-hour lab sessions of over 30 students to provide students with hands-on experience.",
      "Held 4 weekly office hours to help students with lecture materials and assignments.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Woven",
    icon: woven, //TODO: Add icon for Woven
    iconBg: "#E6DEDD",
    date: "May 2022 - Aug 2022",
    points: [
      "Worked with Ruby on Rails to create an efficient internal tool for filtering candidates.",
      "Automated over 50% of the candidate selection process.",
      "Provided solutions during weekly meetings that were implemented.",
    ],
  },
  {
    title: "Research Intern",
    company_name: "KAUST",
    icon: kaust, //TODO: Add icon for KAUST
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Aug 2022",
    points: [
      "Worked on experimenting with DDoS attacks on several video games and testing their efficiency.",
      "Responsible for coming up with a research plan, including novel efficiency tests.",
      "Authored a paper on the findings, which was presented at the IEEE AI-DCS 2024 workshop.",
    ],
  },
  {
    title: "Junior Software Engineer",
    company_name: "AtaaTech",
    icon: ataatech, //TODO: Add icon for AtaaTech
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Jul 2022",
    points: [
      "Developed a Twitter data extractor, an educational Telegram bot, and a data dashboard.",
      "Authored comprehensive documentation for all developed software.",
      "Created a 1-hour instructional video to educate novices on the fundamentals of cybersecurity.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "MeetUp",
    description:
      "An iOS social networking app crafted for university students to build profiles and extend or accept hangout invites, promoting spontaneous on-campus interactions.",
    tags: [
      {
        name: "Swift",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Cocoapods",
        color: "pink-text-gradient",
      },
    ],
    image: meetup,
    source_code_link: "https://github.com/QAGCodes/MeetUp",
  },
  {
    name: "IMS",
    description:
      "An Inventory Management System (IMS) developed alongside my colleague. A demo is available on the GitHub repository!",
    tags: [
      {
        name: "nextJS",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: mzeeijProject,
    source_code_link: "https://github.com/QAGCodes/Mzeeij",
  },
  {
    name: "More on my Github!",
    description: "You can find more projects by clicking on the Github icon!",
    tags: [],
    image: github_black,
    source_code_link: "https://github.com/QAGCodes",
  },
];

const navBarName = "Qusai Ghabrah";

const overviewContent = `
Hi, I'm Qusai Ghabrah - an alumnus of Purdue University and KAUST, with a master's in Computer Science. My passion for software engineering, web development, and cybersecurity drives me to explore and innovate constantly. Throughout my academic and professional journey, I've authored impactful design documents, optimized systems, and published research, all while pushing the boundaries of technology. Ultimately, my goal is to establish a pioneering tech company in Saudi Arabia, making an impact on the global stage. Outside of my professional ambitions, I find joy in chess, music, and spending time with friends. These passions keep me balanced and inspire me to bring creativity into my work. Welcome to my journey as I strive to redefine the future of technology, one project at a time.`;

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  navBarName,
  overviewContent,
};
