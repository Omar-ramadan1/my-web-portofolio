import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  //mobile,
  backend,
 // creator,
  flutter,
 // web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  //redux,
  //tailwind,
  nodejs,
  mongodb,
  git,
 // figma,
 // docker,
  atadel,
  airdefence,
 // hwaya,
  Bot,
  Face_Auth,
  alex,
  hemada,

  
  hotlier,
  
  Fel,
  DetectId,
  //kafey_rep,
  pacademy,
  
  //Atadel,
  apple,
  playstore,
  algorithm,
  node,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Senior Flutter Developer",
    icon: flutter,
  },
  
  {
    title: "Junior node js Developer",
    icon: node,
  },
  {
    title: "entry level Golang Developer",
    icon: backend,
  },
  
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "flutter",
    icon: flutter,
  },
  {
    name: "apple",
    icon: apple,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "playstore",
    icon: playstore,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences: TExperience[] = [
  {
    title: "Flutter Developer",
    companyName: "BOT",
    icon: Bot,
    iconBg: "#383E56",
    date: "March 2023 - present",
    points: [
      "added of In app purchase , Store functionality include handling purchases, most of Groups functionality, fixing bugs and performance issues (main role) and integrated UI designs in an entertainment FootBall App",
      "Participated in developing ERP mobile application for Transfering money, which I was responsible for receiving, filtering and delivering the data for both Frontend Team and Backend team as the application has local storage 	and update the server when there is connection available",
      "Participated in facial recognition app and enhanced the system to detect fake user by adding a liveness AI detector",
    ],
  },
  {
    title: "Flutter Developer",
    companyName: "Pixel Stamp",
    icon: atadel,
    iconBg: "#ffffffff",
    date: "December 2021 – February 2022",
    points: [
      "Developed an e-learning platform app called Pixel Academy and Hemada Academy with 10k+ downloads, using Flutter and Firebase",
      "Fixed memory leaks and performance issues in the app, resulting in a 30% increase in app speed and a 20% decrease in memory usage.",
      "Successfully identified and resolved critical bugs in a production app, resulting in improved user experience.",
      "Implemented UI/UX design changes to enhance the user interface and increase user engagement and satisfaction.",
      "Collaborated with cross-functional teams to ensure the timely resolution of issues and deployment of updates.",
    ],
  },
  {
    title: "System Administrator",
    companyName: "Egyptian Navy",
    icon: airdefence,
    iconBg: "#383E56",
    date: "October 2020 - August 2021",
    points: [
      "Support in maintaining hardware, software, and other systems",
      "Assist with troubleshooting issues and provide technical support",
      "Organize and maintain IT resources",
    ],
  },
  {
    title: "Intern",
    companyName: "algorithm",
    icon: algorithm,
    iconBg: "#ffffffff",
    date: "July 2018 - December 2018",
    points: [
      "Gained hands-on experience with GitHub for version control, collaborating on code repositories, and managing pull requests, which enhanced my understanding of collaborative development practices.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Engaged in code reviews and pair programming sessions, which provided insights into best practices, coding standards, and team collaboration techniques.",
      
     
    ],
  },{
    title: "Bachelor's degree student",
    companyName: "Alexandria university",
    icon: alex,
    iconBg: "#ffffffff",
    date: "October 2016 - May 2020",
    points: [
      "Actively participated in the Management Information Systems Club, collaborating with peers to explore the latest trends and technologies in the field of information systems.",
      "Engaged in discussions and presentations on emerging technologies like cloud computing and big data analytics, promoting knowledge sharing and continuous learning among members.",
      "Engaged in code reviews and pair programming sessions, which provided insights into best practices, coding standards, and team collaboration techniques.",
      
     
    ],
  },
];

const testimonials: TTestimonial[] = [
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

const projects: TProject[] = [
  {
    name: "FEL",
    description:
      "Football Prediction League is a game to earn points by predicting the results of your favorite league matches",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
    ],
    image: Fel,
    sourceCodeLink: "https://github.com/",
    AppleStore: "https://apps.apple.com/us/app/fel-league/id6464472764",
    PlayStore: "https://play.google.com/store/apps/details?id=com.felapp.sports.football_appnew&hl=en",
  },
 
  // {
  //   name: "Atadel",
  //   description:
  //     "Atadel is a technological platform that connects you with over 41,000 products and brands from your favorite major & local retailers. \n Grocery shopping is essential, but we also know how stressful it is. Atadel's solution will ensure that you can make a quick & seamless trip to the store without leaving your home.",
  //   tags: [
  //     {
  //       name: "flutter",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Firebase",
  //       color: "green-text-gradient",
  //     },
  //   ],
  //   image: Atadel,
  //   sourceCodeLink: "https://github.com/",
  //   AppleStore: "https://apps.apple.com/ca/app/atadel-grocery-delivery/id1575892325",
  //   PlayStore: "https://play.google.com/store/apps/details?id=com.atadel.consumer",
  // },
  {
    name: "Pixel Academy",
    description:
      "Pixel Academy is an innovative educational app designed to bridge the gap between teachers and students.\n \n Pixel Academy, teachers can effortlessly share lectures, exams, and questions, while students can easily access and respond to them. This seamless interaction fosters a dynamic learning environment.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
    ],
    image: pacademy,
    sourceCodeLink: "https://github.com/",
    AppleStore: "",
    PlayStore: "https://play.google.com/store/apps/details?id=com.androidandios.pixelacademy&hl=en&gl=US",
  },
  {
    name: "face authentication",
    description:
      "Managing external sites and the presence of the fingerprint device is difficult \n\n"
      +"Monitor employees throughout the day and determine their presence during working hours, because attendance registration is by face and location \n\n"
      +"Detailed and accurate reports on everything related to attendance and departure daily-week-monthly",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
    ],
    image: Face_Auth,
    sourceCodeLink: "https://github.com/",
    AppleStore: "",
    PlayStore: "https://play.google.com/store/apps/details?id=com.Bot.face_auth&hl=en",
  },{
    name: "ID Scanner",
    description:
      "ID Scanner is a private app designed to scan passports, visas, and local IDs, with a focus on Arabic identification documents \n\n"
      +"It is used by hotels and other businesses that need to efficiently collect customer data for bookings \n\n"
      +" The app streamlines the data entry process, reducing manual errors and saving time for staff, making it a valuable tool for establishments requiring accurate and quick ID verification \n\n"
   
    +"The app is not available on the Play Store as it is tailored for private business use \n\n",
      tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
    ],
    image: DetectId,
    sourceCodeLink: "https://github.com/",
    AppleStore: "",
    PlayStore: "https://bot-sys.com/passport-id-scanner-app/",
  },
  {
    name: "Hotlier",
    description:
      "Hotlier is a cutting-edge app designed to streamline the booking process for hotels and guests in Saudi Arabia \n\n"
      +"With Hotlier, guests can easily book rooms, while hotels can upload and manage their offers seamlessly \n\n"
      +"This app enhances the hospitality experience by providing a user-friendly platform for both parties.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
    ],
    image: hotlier,
    sourceCodeLink: "https://github.com/",
    AppleStore: "https://appadvice.com/app/d9-87-d9-88-d8-aa-d9-84-d9-8a-d8-b1-d9-83-d8-a7-d8-b1-d8-af/1543597269",
    PlayStore: "https://apkpure.com/%D9%87%D9%88%D8%AA%D9%84%D9%8A%D8%B1-%D9%83%D8%A7%D8%B1%D8%AF/com.hoteliercard",
  },{
    name: "hemada academy",
    description:
      "Managing external sites and the presence of the fingerprint device is difficult \n\n"
      +"Monitor employees throughout the day and determine their presence during working hours, because attendance registration is by face and location \n\n"
      +"Detailed and accurate reports on everything related to attendance and departure daily-week-monthly",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
    ],
    image: hemada,
    sourceCodeLink: "https://github.com/",
    AppleStore: "",
    PlayStore: "https://play.google.com/store/apps/details?id=com.pixelstampandhamida.hemidaacademy&hl=ar&gl=US",
  },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   sourceCodeLink: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   sourceCodeLink: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
