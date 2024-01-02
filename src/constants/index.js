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
    title: "React Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "NextJS Developer",
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
];

const experiences = [
  {
    title: "Front-End Engineer",
    company_name: "Mzeeij",
    icon: mzeeij, //TODO:
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Present",
    points: [
      "Responsible for developing the front-end of Mzeeij's IMS system using NextJS.",
      "Leading technical documentation efforts including sprint planning and requirments' collection.",
    ],
  },
  {
    title: "Teaching Assistant",
    company_name: "Purdue",
    icon: purdue,
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
    icon: woven,
    iconBg: "#E6DEDD",
    date: "May 2022 - Aug 2022",
    points: [
      "Worked with Ruby on Rails to create an efficent internal tool for filtering candidates.",
      "Automated over 50% of the candidate selection process.",
      "Provided solutions during weekly meetings that were implemented.",
    ],
  },
  {
    title: "Research Intern",
    company_name: "KAUST",
    icon: kaust,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Aug 2022",
    points: [
      "Worked on experimenting with DDoS attacks on several video games and testing their efficiency.",
      "Responsible for coming up with a research plan, including novel efficiency tests.",
    ],
  },
  {
    title: "Junior Software Engineer",
    company_name: "AtaaTech",
    icon: ataatech, //TODO:
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
    name: "IMS System",
    description:
      "An Inventory Managment System (IMS) that is under progress in my job with Mzeeij company. Github link is not provided as instructed by the company but a demo will be available soon!",
    tags: [
      {
        name: "nextJS",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: mzeeijProject,
    source_code_link: "https://github.com/QAGCodes",
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
Hello! I'm Qusai, a Purdue alumnus and a current Computer Science master's student at KAUST, with a deep-seated passion for software engineering, web development, and cybersecurity. My academic pursuits are fueled by a continual exploration of and dabbling in technologies and a personal ambition to innovate and lead in the tech industry. Beyond my professional aspirations to establish a groundbreaking tech company in Saudi Arabia, I find joy and inspiration in chess, music, and camaraderie with friends. Welcome to my journey, where each step is a stride towards redefining technology's future.
`;

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  navBarName,
  overviewContent,
};
