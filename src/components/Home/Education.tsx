interface EducationList {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  score: string;
}

const educationList: EducationList[] = [
  {
    title: "Bachelor of Technology",
    company: "School of Engineering, CUSAT",
    location: "Ernakulam, Kerala, India",
    startDate: "2019",
    endDate: "2023",
    score: "9.05 GPA",
  },
  {
    title: "Higher Secondary Education in CS(AISSCE)",
    company: "Saraswathi Vidyaniketan",
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
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-lg font-bold">{education.title}</h3>
              <p className="text-sm text-secondary">
                {education.startDate} — {education.endDate}
              </p>
            </div>
            <p className="text-sm text-secondary">{education.location}</p>
            <p className="text-sm text-secondary">{education.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
