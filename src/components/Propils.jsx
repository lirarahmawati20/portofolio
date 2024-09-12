import { useState } from "react";

function Profile() {
  const [activeSection, setActiveSection] = useState("skills");

  return (
    <div className="container mx-auto p-4 sm:p-6">
      {/* Profile Section */}
      <div className="bg-gray-800 text-white p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg mb-10 font-serif">
        <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold mb-4 sm:mb-2 text-center lg:text-left">
          About Me
        </h1>
        <p className="text-base sm:text-lg mb-4 sm:mb-6 text-center lg:text-left leading-relaxed">
          I am a final semester D3 Informatics Management student with two years
          of programming experience. I have mastered several programming
          languages and frameworks, especially JavaScript, Node.js, React, and
          Java with great enthusiasm. I have strong skills in teamwork and
          independent work. In addition, I have leadership skills, communication
          skills, problem-solving skills, and the ability to write effective,
          efficient, and readable code. I am highly motivated to learn and
          develop further.
        </p>
        <p className="text-base sm:text-lg text-center lg:text-left leading-relaxed">
          I keep up-to-date with the latest technologies and continuously hone
          my Frontend and Backend development skills. My goal is to become a
          versatile developer, capable of contributing to the ever-evolving IT
          industry.
        </p>

        {/* Section Buttons */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-2 my-4 sm:my-6">
          {[
            "skills",
            "experience",
            "education",
            "organization",
            "employment",
          ].map((section) => (
            <button
              key={section}
              className={`${
                activeSection === section
                  ? "bg-slate-600 hover:bg-slate-700"
                  : "bg-slate-400 hover:bg-slate-500"
              } text-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg transition duration-300 text-sm sm:text-base`}
              onClick={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

        {/* Section Content */}
        <div className="mt-6 sm:mt-10 lg:text-sm">
          {activeSection === "skills" && (
            <section id="skills">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                Skills
              </h3>
              <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-base sm:text-lg">
                <li>
                  <strong>Web Development:</strong> HTML, CSS, JavaScript,
                  Node.js, React, TypeScript
                </li>
                <li>
                  <strong>Programming Languages:</strong> C, C++, Java,
                  JavaScript
                </li>
                <li>
                  <strong>Frameworks & Tools:</strong> Express, Tailwind CSS,
                  Vite, REST API
                </li>
                <li>
                  <strong>Databases:</strong> MySQL, PostgreSQL, MariaDB, SQL
                  Server
                </li>
                <li>
                  <strong>Version Control:</strong> Git, GitHub
                </li>
                <li>
                  <strong>IDE & Editors:</strong> VSCode, IntelliJ IDEA
                </li>
                <li>
                  <strong>Software:</strong> Microsoft Office (Word, Excel,
                  PowerPoint)
                </li>
              </ul>
            </section>
          )}

          {activeSection === "experience" && (
            <section id="experience">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                Experience
              </h3>
              <p className="text-base sm:text-lg mb-4">
                <strong>Informatics Management Student Association</strong> (Oct
                2022 - Present) - Member
              </p>
              <p className="text-base sm:text-lg">
                <strong>English Training Division</strong> (Sep 2023 - Aug 2024)
                - Coordinator
              </p>
            </section>
          )}

          {activeSection === "education" && (
            <section id="education">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                Education
              </h3>
              <p className="text-base sm:text-lg mb-4">
                <strong>Pasim National University</strong> (2022 - Present) - D3
                Informatics Management, GPA: 3.62
              </p>
              <p className="text-base sm:text-lg">
                <strong>SMK Negeri 1 Kawali</strong> (2018 - 2021) - Software
                Engineering, Final Score: 85,25
              </p>
            </section>
          )}

          {activeSection === "organization" && (
            <section id="organization">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                Organization
              </h3>
              <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-base sm:text-lg">
                <li>
                  <strong>
                    HIMAMI (Informatics Management Student Association)
                  </strong>{" "}
                  - Member (2022 - Present)
                </li>
                <li>
                  <strong>
                    BEMFIK (Faculty of Computer Science Student Executive Body)
                  </strong>{" "}
                  - Public Relations (2022 - 2024)
                </li>
                <li>
                  <strong>Forspi (Islamic Student Association Forum)</strong> -
                  General Secretary (2024 - Present)
                </li>
              </ul>
            </section>
          )}

          {activeSection === "employment" && (
            <section id="employment">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                Employment
              </h3>
              <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-base sm:text-lg">
                <li>
                  <strong>Universitas Nasional PASIM</strong> - Assistant
                  Lecturer
                </li>
                <li>
                  <strong>Pemberdayaan Umat Berkelanjutan (PUB)</strong> - Tutor
                  of HTML, CSS & JavaScript
                </li>
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
