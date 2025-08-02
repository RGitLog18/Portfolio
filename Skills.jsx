import "./Skills.css";
import React, { useState } from "react";
import styled from "styled-components";
// // import { FaJava, FaPython, FaDatabase } from "react-icons/fa"; // FaDatabase for MySQL
// import { SiMysql, SiJupyter, SiApachemaven } from "react-icons/si"; // SiMysql for MySQL, SiJupyter for JDBC, Maven if needed
// import { DiSwing } from "react-icons/di";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";

// Utility to shuffle array
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

function Skills({ darkmode, changeTheme }) {
  const [selectedCategory, setSelectedCategory] = useState("web");

  const skillsData = {
    web: [
      { name: "HTML5", icon: <FaHtml5 size={40} className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt size={40} className="text-blue-500" /> },
      { name: "React", icon: <FaReact size={40} className="text-cyan-400" /> },
      { name: "MongoDB", icon: <FaDatabase size={40} className="text-green-500" /> },
      { name: "Express.js", icon: <FaNodeJs size={40} className="text-gray-500" /> },
      { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-600" /> },
    ],
    software: [
      { name: "Java", icon: <FaJava size={40} className="text-red-600" /> },
  // { name: "Python", icon: <FaPython size={40} className="text-yellow-400" /> },
  // { name: "MySQL", icon: <SiMysql size={40} className="text-blue-600" /> },
  // { name: "JDBC", icon: <SiJupyter size={40} className="text-orange-500" /> }, // JDBC fallback
  // { name: "Java Swing", icon: <DiSwing size={40} className="text-purple-600" /> }, // Custom Swing icon
    ],
    more: [
      { name: "Git", icon: <FaGitAlt size={40} className="text-orange-600" /> },
      { name: "GitHub", icon: <FaGithub size={40} className="text-white" /> },
    ],
  };

  const StyledWrapper = styled.div`
    .glass-radio-group {
      --bg: rgba(81, 23, 148, 0.06);
      --text: #e5e5e5;

      display: flex;
      position: relative;
      background: var(--bg);
      border-radius: 1rem;
      backdrop-filter: blur(12px);
      box-shadow: inset 1px 1px 4px rgba(255, 255, 255, 0.2),
        inset -1px -1px 6px rgba(0, 0, 0, 0.3),
        0 4px 12px rgba(0, 0, 0, 0.15);
      overflow: hidden;
      width: 90vw;
      margin-left: 2vw;
      height: 4rem;
      font-family: "Poppins", sans-serif;
    }

    .glass-radio-group label {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 80px;
      font-size: 5vh;
      padding: 0.8rem 1.6rem;
      cursor: pointer;
      font-weight: 600;
      letter-spacing: 0.3px;
      color: var(--text);
      position: relative;
      z-index: 2;
      transition: color 0.3s ease-in-out;
    }

    .glass-radio-group label.active {
      color: white;
    }

    .glass-radio-group label:hover {
      color: #fff;
    }

    .glass-glider {
      position: absolute;
      top: 0;
      bottom: 0;
      width: calc(100% / 3);
      border-radius: 1rem;
      z-index: 1;
      transition: transform 0.4s ease-in-out, background 0.4s ease-in-out,
        box-shadow 0.4s ease-in-out;
    }

    .glass-glider.web {
      transform: translateX(0%);
      background: linear-gradient(135deg, rgba(82, 22, 150, 0.33), rgb(146, 56, 206));
      box-shadow: 0 0 18px rgba(160, 216, 255, 0.5),
        0 0 10px rgba(14, 28, 99, 0.83) inset;
    }

    .glass-glider.software {
      transform: translateX(100%);
      background: linear-gradient(135deg, rgba(82, 22, 150, 0.33), rgb(146, 56, 206));
      box-shadow: 0 0 18px rgba(160, 216, 255, 0.5),
        0 0 10px rgba(14, 28, 99, 0.83) inset;
    }

    .glass-glider.more {
      transform: translateX(200%);
      background: linear-gradient(135deg, rgba(82, 22, 150, 0.33), rgb(146, 56, 206));
      box-shadow: 0 0 18px rgba(160, 216, 255, 0.5),
        0 0 10px rgba(14, 28, 99, 0.83) inset;
    }

    .skill-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
      margin-top: 2rem;
      padding: 1rem;
    }

    .skill-card {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      border-radius: 1rem;
      padding: 1rem;
      text-align: center;
      color: #fff;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 0 35px rgba(120, 209, 209, 0.3);
    }

    .skill-card:hover {
      transform: translateY(-5px) scale(1.05);
      box-shadow: 0 0 25px rgba(132, 0, 255, 0.6);
    }

    .skill-card p {
      margin-top: 0.5rem;
      font-weight: 600;
      font-size: 1rem;
    }

    @media (max-width: 768px) {
      .skill-list {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 480px) {
      .skill-list {
        grid-template-columns: repeat(1, 1fr);
      }

      .glass-radio-group label {
        font-size: 4vh;
      }
    }
  `;

  // Shuffle skills every time selectedCategory changes
  const shuffledSkills = shuffleArray(skillsData[selectedCategory]);

  return (
    <StyledWrapper>
      <div className="Skills">
        <div className="glowing-line"></div>
        <h1 className="Skills-title">Efficient in:</h1>

        <div className="Skills-container">
          <div className="skill-description">
            <div className="glass-radio-group">
              <label
                className={selectedCategory === "web" ? "active" : ""}
                onClick={() => setSelectedCategory("web")}
              >
                Web
              </label>
              <label
                className={selectedCategory === "software" ? "active" : ""}
                onClick={() => setSelectedCategory("software")}
              >
                Software
              </label>
              <label
                className={selectedCategory === "more" ? "active" : ""}
                onClick={() => setSelectedCategory("more")}
              >
                More
              </label>
              <div className={`glass-glider ${selectedCategory}`} />
            </div>
          </div>

          <div className="skill-list">
            {shuffledSkills.map((skill, index) => (
              <div key={index} className="skill-card">
                {skill.icon}
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

export default Skills;
