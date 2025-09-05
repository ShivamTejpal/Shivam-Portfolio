import React from "react";

const About = () => {
  return (
    <section className="w-full py-12 bg-white" id="about">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="flex items-center gap-4">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">02</span>
              <span>About</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
              About Me
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                I'm a <strong className="text-pulse-500">Computer Science Engineering</strong> graduate from 
                DY Patil International University with a strong foundation in software development, 
                automation testing, and machine learning.
              </p>
              
              <p>
                With hands-on experience as an <strong>ML Data Associate at Amazon</strong> and 
                <strong> Software Tester at AiVariant</strong>, I specialize in creating efficient, 
                scalable solutions and ensuring high-quality software delivery.
              </p>
              
              <p>
                My expertise spans across <strong>Java, Python, Selenium, and modern web technologies</strong>, 
                with a passion for automation testing, API development, and data analysis. 
                I thrive in Agile environments and enjoy solving complex problems through innovative technology solutions.
              </p>
            </div>

            {/* Education */}
            <div className="bg-gray-50 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-semibold mb-4 text-pulse-500">Education</h3>
              <div className="space-y-2">
                <h4 className="font-semibold">Bachelor of Technology - Computer Science Engineering</h4>
                <p className="text-gray-600">DY Patil International University, Pune</p>
                <p className="text-gray-500">CGPA: 7.72 (2020-2024)</p>
                <p className="text-sm text-gray-600 mt-2">
                  Relevant Coursework: Data Analysis, Software Engineering, Operating Systems, 
                  Algorithms, Artificial Intelligence
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Contact info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-pulse-50 to-orange-100 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-pulse-500">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-pulse-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📧</span>
                  </div>
                  <a href="mailto:shivamtejpal86@gmail.com" className="text-gray-700 hover:text-pulse-500 transition-colors">
                    shivamtejpal86@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-pulse-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📱</span>
                  </div>
                  <span className="text-gray-700">7350037378</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-pulse-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📍</span>
                  </div>
                  <span className="text-gray-700">Pune, India</span>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <a 
                  href="https://github.com/shivamtejpal86" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-pulse-500 text-white rounded-lg hover:bg-pulse-600 transition-colors text-sm"
                >
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com/in/shivam-tejpal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-pulse-500 text-pulse-500 rounded-lg hover:bg-pulse-50 transition-colors text-sm"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;