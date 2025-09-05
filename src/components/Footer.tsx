
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-12">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Shivam Tejpal</h3>
            <p className="text-gray-300 leading-relaxed">
              Software Developer specializing in automation testing and full-stack development. 
              Passionate about creating efficient, scalable solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#experience" className="block text-gray-300 hover:text-white transition-colors">Experience</a>
              <a href="#projects" className="block text-gray-300 hover:text-white transition-colors">Projects</a>
              <a href="#skills" className="block text-gray-300 hover:text-white transition-colors">Skills</a>
              <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <div className="space-y-3">
              <a 
                href="mailto:shivamtejpal86@gmail.com" 
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                shivamtejpal86@gmail.com
              </a>
              <div className="flex gap-4 mt-4">
                <a 
                  href="https://github.com/shivamtejpal86" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/shivam-tejpal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Shivam Tejpal. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Built with ❤️ using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
