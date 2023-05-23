import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  woven,
  purdue,
  kaust,
  carrent,
  jobit,
  tripguide,
  threejs,
  c,
  cocoa,
  swift,
  github,
  ruby,
  rails,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Ruby on Rails Developer",
    icon: backend,
  },
  {
    title: "IOS App Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "cocoa",
    icon: cocoa,
  },
  {
    name: "swift",
    icon: swift,
  },
  {
    name: "rails",
    icon: rails,
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
I am a skilled software engineer with expertise in web and iOS application development. I am passionate about creating innovative and user-friendly products that cater to people's needs. With a keen interest in staying updated with the latest technologies, I am constantly exploring emerging trends to ensure cutting-edge solutions. Through this portfolio, I invite you to explore my work and experience. Let's connect and transform your ideas into exceptional digital experiences!
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
