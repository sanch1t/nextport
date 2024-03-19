import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "Talent500",
      role: "Content Intern",
      url: "https://talent500.co",
      start: "Aug '22",
      end: "Jan '23",
      shortDescription: [
        "Did meticulous research for veritable and accurate articles.",
        "Throughout my work, I've utilized various SEO technologies, implementing thorough data analytics for better outreach.",
        "I've also managed and worked with a small team that includes Frontend Developer Interns, and UI/UX Developers.",
        "Additionally, I've represented the company in client meetings, communicating effectively on their behalf.",
      ],
    },
    {
      name: "Dexly",
      role: "Web UIUX Intern",
      url: "https://www.linkedin.com/company/dexly/",
      start: "Dec '21",
      end: "Apr '22",
      shortDescription: [
        "Write modern, performant, maintainable code for a diverse array of client and internal projects",
        "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
        "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
      ],
    },
    {
      name: "The BigPitchr",
      role: "Web Developer",
      url: "https://www.linkedin.com/company/association-of-computer-engineering-students/",
      start: "Dec '21",
      end: "Jan '22",
      shortDescription: [
        "Craft cutting-edge, efficient, and sustainable code for an extensive range of client and in-house initiatives.",
        "Utilize an assortment of programming languages, platforms, frameworks, and CMSs—including but not limited to TypeScript, React, WordPress, and Node.",
        "Foster effective communication among cross-functional teams comprising engineers, designers, producers, and clientele, facilitating seamless collaboration and project delivery on a continual basis."
      ],
    },
    {
      name: "IProCo",
      role: "Content Intern",
      url: "https://developer.salesforce.com",
      start: "Dec '21",
      end: "Mar '22",
      shortDescription: [
        "Learnt Salesforce Fundamentals ,Organizational Setup and Relationship & Process Automation.",
        "Understood Types Of Flows & Security Apex, Testing & Debugging in Salesforce environments.",
        "Worked around VS Code Setups & CLI Setups as well as undertaking Lightning Web Components (LWC) & API."
        
      ],
    },
    {
      name: "Salesforce ",
      role: "Salesforce Developer",
      url: "https://developer.salesforce.com",
      start: "Nov '23",
      end: "Jan '24",
      shortDescription: [
        "Learnt Salesforce Fundamentals ,Organizational Setup and Relationship & Process Automation.",
        "Understood Types Of Flows & Security Apex, Testing & Debugging in Salesforce environments.",
        "Worked around VS Code Setups & CLI Setups as well as undertaking Lightning Web Components (LWC) & API."
      ],
    },
    {
      name: "BharatIntern ",
      role: "Data Scientist",
      url: "https://bharatintern.live/about-1/",
      start: "Jan '24",
      end: "Feb '24",
      shortDescription: [
        "While still a student, I founded a web hosting company that offered affordable hosting services.",
        "With over 300 customers, the business thrived until I graduated and sold it to another company.",
      ],
    },
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
