const userData = {
  name: "Abhinav Rajesh",
  description: "Software Engineer",
  social: {
    twitter: "https://twitter.com/_AbhinavRajesh_",
    github: "https://github.com/AbhinavRajesh",
    linkedin: "https://linkedin.com/in/abhinavrajesh",
    email: "mailto:abhinavrajesh49@gmail.com",
    website: "https://abhinavrajesh.com",
  },
};

const analytics = {
  gaId: process.env.NEXT_PUBLIC_GA_ID as string,
};

const config = {
  userData,
  analytics,
};

export default config;
