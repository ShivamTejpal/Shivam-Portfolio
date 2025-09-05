import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "ML Data Associate",
      company: "Amazon",
      type: "Contract (3 months)",
      period: "Sep 2024 - Nov 2024",
      description: [
        "Analyzed large dataset to facilitate machine learning model development",
        "Optimized Annotation workflow reducing processing time by 15%", 
        "Delivered high-quality annotated data under stringent deadline"
      ],
      skills: ["Machine Learning", "Data Analysis", "Data Annotation", "Workflow Optimization"]
    },
    {
      title: "Software Tester",
      company: "AiVariant",
      type: "Full-time",
      period: "Apr 2025 - Jul 2025",
      description: [
        "Executed end-to-end automation testing of web applications by designing detailed test cases, writing test scenarios, and identifying functional defects aligned with business requirements",
        "Gained practical experience in STLC, SDLC, and Bug Life Cycle while using Jira for test case management, defect tracking, and reporting under an Agile Scrum environment"
      ],
      skills: ["Selenium", "Java", "Jira", "STLC", "SDLC", "Agile Scrum", "Automation Testing"]
    }
  ];

  return (
    <section className="w-full py-12 bg-gray-50" id="experience">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="flex items-center gap-4">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">03</span>
              <span>Experience</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-12 text-center">
          Work Experience
        </h2>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-xl p-6 sm:p-8 shadow-elegant hover:shadow-elegant-hover transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">{exp.title}</h3>
                  <p className="text-lg font-medium text-pulse-500">{exp.company}</p>
                  <p className="text-sm text-gray-600">{exp.type}</p>
                </div>
                <div className="text-sm sm:text-base text-gray-600 sm:text-right">
                  {exp.period}
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {exp.description.map((desc, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pulse-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-pulse-100 text-pulse-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center">Certifications & Training</h3>
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-elegant">
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-pulse-500">QA Trainee Manual and Automation Testing | ExcelR</h4>
                <p className="text-gray-700 mt-2">
                  Comprehensive training covering writing and executing test cases for web applications, 
                  automating test scripts using Java, Selenium WebDriver, Maven, and API testing with Postman.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Quality Assurance", "Manual Testing", "Automation Testing", "Selenium", "Java", "Maven", "Postman", "API Testing"].map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;