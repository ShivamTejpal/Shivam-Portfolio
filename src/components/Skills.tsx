import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 }
      ]
    },
    {
      category: "Automation Tools",
      skills: [
        { name: "Selenium WebDriver", level: 95 },
        { name: "TestNG", level: 85 },
        { name: "Maven", level: 80 }
      ]
    },
    {
      category: "Testing",
      skills: [
        { name: "Automation Testing", level: 90 },
        { name: "API Testing (Postman)", level: 85 },
        { name: "Bug Tracking", level: 88 },
        { name: "SDLC", level: 85 },
        { name: "STLC", level: 90 }
      ]
    },
    {
      category: "Database",
      skills: [
        { name: "SQL", level: 85 },
        { name: "MySQL", level: 80 }
      ]
    },
    {
      category: "Tools",
      skills: [
        { name: "Git", level: 85 },
        { name: "GitHub", level: 85 },
        { name: "Jira", level: 90 },
        { name: "WordPress", level: 75 },
        { name: "Canva", level: 80 }
      ]
    },
    {
      category: "Methodologies",
      skills: [
        { name: "Agile Scrum", level: 85 }
      ]
    }
  ];

  const softSkills = [
    "Effective Communication",
    "Teamwork", 
    "Creative Thinking",
    "Problem Solving",
    "Attention to Detail",
    "Time Management"
  ];

  const interests = [
    "Fitness Enthusiast",
    "Technology", 
    "Trekking",
    "Chess"
  ];

  return (
    <section className="w-full py-12 bg-gray-50" id="skills">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="flex items-center gap-4">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">05</span>
              <span>Skills</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-12 text-center">
          Technical Skills
        </h2>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-elegant">
              <h3 className="text-xl font-semibold mb-6 text-pulse-500">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-pulse-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills & Interests */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Soft Skills */}
          <div className="bg-white rounded-xl p-6 shadow-elegant">
            <h3 className="text-xl font-semibold mb-6 text-pulse-500">
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-gradient-to-r from-pulse-100 to-orange-100 text-pulse-700 rounded-full text-sm font-medium border border-pulse-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="bg-white rounded-xl p-6 shadow-elegant">
            <h3 className="text-xl font-semibold mb-6 text-pulse-500">
              Interests
            </h3>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-pulse-500 to-orange-500 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Collaborate</h3>
            <p className="text-lg leading-relaxed">
              With expertise in automation testing, full-stack development, and a passion for 
              continuous learning, I'm excited to contribute to innovative projects and help 
              teams deliver high-quality software solutions.
            </p>
            <a 
              href="#contact" 
              className="inline-block mt-6 px-6 py-3 bg-white text-pulse-500 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;