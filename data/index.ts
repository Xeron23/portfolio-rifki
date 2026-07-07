export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Tech", link: "#tech" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize clean architecture and system automation.",
    description:
      "3rd-year Software Engineering student focused on building robust APIs, secure auth, and automated bots to optimize operational workflows.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full object-cover object-center",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
  // {
  //   id: 4,
  //   title: "Tech enthusiast with a passion for development.",
  //   description: "",
  //   className: "lg:col-span-2 md:col-span-3 md:row-span-1",
  //   imgClassName: "",
  //   titleClassName: "justify-start",
  //   img: "/grid.svg",
  //   spareImg: "/b4.svg",
  // },

  // {
  //   id: 5,
  //   title: "Currently building a JS Animation library",
  //   description: "The Inside Scoop",
  //   className: "md:col-span-3 md:row-span-2",
  //   imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
  //   titleClassName: "justify-center md:justify-start lg:justify-center",
  //   img: "/b5.svg",
  //   spareImg: "/grid.svg",
  // },
  // {
  //   id: 6,
  //   title: "Do you want to start a project together?",
  //   description: "",
  //   className: "lg:col-span-2 md:col-span-3 md:row-span-1",
  //   imgClassName: "",
  //   titleClassName: "justify-center md:max-w-full max-w-60 text-center",
  //   img: "",
  //   spareImg: "",
  // },
];

export const projects = [
  {
    id: 1,
    title: "Rest Api - Mood journal",
    des: "REST API journaling end-to-end dengan Express + Prisma: autentikasi JWT, reset password email (Nodemailer), CRUD jurnal, dan insight/rekomendasi dari analisis Groq.",
    img: "/recentProject/humic.svg",
    iconLists: ["/icons/Express.svg", "/icons/nodejs.svg", "/icons/MySQL.svg",],
    link: "https://github.com/Xeron23/journaling_humic",
  },
  {
    id: 2,
    title: "Rest Api - Hiji Digital Course Web Builder",
    des: "A web-based platform to build websites using a web builder, offering a digital course catalog (free & paid) with a subscription system. Includes product/course pages and Facebook Pixel integration to track events when users click products.",
    img: "/recentProject/Hiji.svg",
    iconLists: ["/icons/Express.svg", "/icons/nodejs.svg", "/icons/MongoDB.svg"],
    link: "https://app.diagrams.net/#G1MCnIGk3V8je1kFp0I_jW3PFBpV5VOTJw#%7B%22pageId%22%3A%22sJbnaeJLdAiVgOLY_JB1%22%7D",
  },
  {
    id: 3,
    title: "Simple clone netflix - flix",
    des: "A simple Netflix style clone with subscriptions based, device limits per plan, and background jobs for automated access control.",
    img: "/recentProject/flix.png",
    iconLists: ["/icons/Laravel.svg", "/icons/tail.svg", "/icons/MySQL.svg"],
    link: "https://latihan-laravel-flix.xianly.cloud/login",
  },
  {
    id: 4,
    title: "Rest Api - SoulSpace Mental Health",
    des: "AI powered mental health platform with JWT auth, mood detection via facial expressions, journal sentiment analysis, meditation video recommendations, and emotion statistics/insights powered by Groq. Includes an anonymous chat forum and S3-compatible file storage.",
    img: "/recentProject/soulSpace.svg",
    iconLists: ["/icons/Express.svg", "/icons/nodejs.svg", "/icons/MySQL.svg"],
    link: "https://soulspace.xianly.cloud/login",
  },
];

export const techStack = [
  { name: "Node.js", title: "Backend Runtime", icon: "/icons/nodejs.svg" },
  { name: "Express.js", title: "REST API Framework", icon: "/icons/Express.svg" },
  { name: "Nest.js", title: "TypeScript Backend", icon: "/icons/Nest.js.svg" },
  { name: "TypeScript", title: "Language", icon: "/icons/TypeScript.svg" },
  { name: "Laravel", title: "ORM", icon: "/icons/Laravel.svg" },
  { name: "MySQL", title: "Database", icon: "/icons/MySQL.svg" },
  { name: "PostgreSQL", title: "API Testing", icon: "/icons/PostgresSQL.svg" },
  { name: "MongoDB", title: "Containerization", icon: "/icons/MongoDB.svg" },
  { name: "Docker", title: "Containerization", icon: "/icons/Docker.svg" },
];


export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    link: 'https://github.com/Xeron23',
    img: "/git.svg",
  },
  {
    id: 2,
    link: 'https://www.linkedin.com/in/muhammad-rifki-anandita-32b481287/',
    img: "/link.svg",
  },
];