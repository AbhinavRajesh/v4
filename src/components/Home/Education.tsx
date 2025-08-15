interface EducationList {
  title: string;
  major: string;
  school: string;
  location: string;
  startDate: string;
  endDate: string;
  score: string;
}

const educationList: EducationList[] = [
  {
    title: "Bachelor of Technology",
    major: "Computer Science & Engineering",
    school: "School of Engineering, CUSAT",
    location: "Ernakulam, Kerala, India",
    startDate: "2019",
    endDate: "2023",
    score: "9.05 GPA (out of 10)",
  },
  {
    title: "Higher Secondary Education",
    major: "CS(AISSCE)",
    school: "Saraswathi Vidyaniketan",
    location: "Ernakulam, Kerala, India",
    startDate: "2017",
    endDate: "2019",
    score: "88.8%",
  },
];

const Education = () => {
  return (
    <div className="flex flex-col gap-4 mt-8 font-sans">
      <h2 className="text-heading font-bold">Education</h2>
      <div className="flex flex-col gap-4">
        {educationList.map((education) => (
          <div key={education.title} className="flex flex-col">
            <div className="flex flex-col md:flex-row md:gap-1">
              <h3 className="text-lg font-bold">{education.title}</h3>
              <span className="hidden md:block font-bold text-lg"> - </span>
              <h4 className="text-sm md:text-lg md:font-bold">
                {education.major}
              </h4>
            </div>
            <div className="flex flex-col md:flex-row">
              <p className="text-sm text-secondary">{education.school}</p>
              <span className="hidden md:block text-sm text-secondary pr-1">
                ,
              </span>
              <p className="text-sm text-secondary">{education.location}</p>
            </div>
            <p className="text-sm text-secondary">{education.score}</p>
            <p className="text-sm text-secondary">
              {education.startDate} — {education.endDate}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
