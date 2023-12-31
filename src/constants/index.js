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
  carrent,
  jobit,
  tripguide,
  nextjs,
  postgresql,
  sqlite,
  github_black,
  c,
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
    title: "Teaching Assistant",
    company_name: "Purdue",
    icon: purdue,
    iconBg: "#383E56",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
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
