import React from "react";

const About: React.FC = () => {
  return (
    <div
      id="about"
      className="grid h-fit w-full snap-center grid-cols-1 flex-col place-items-center justify-items-center px-4 pt-14 md:h-screen md:grid-cols-2"
    >
      <img src="/svg/about.svg" alt="about" className="hidden h-[500px] w-[500px] md:block" />
      <div className="flex flex-col items-start justify-start gap-3 px-5">
        <h2 className="font-ubuntu text-xl font-bold ">Overview</h2>
        <ul className="list-disc text-justify font-kanit text-xl  leading-8">
          <li>
            Hello! I'm Ali Seyedi, an enthusiastic Front-End Web Developer with a year of hands-on
            experience.
          </li>
          <li>
            My journey in this dynamic field has been driven by a relentless passion for learning.
            Through a combination of self-study, leveraging online resources like YouTube tutorials
            and diving deep into documentation, I've honed my skills in crafting interactive and
            responsive user interfaces.
          </li>
          <li>
            I'm proud to have actively contributed to open-source projects on GitHub, where I trace
            code and collaborate with the community to expand my knowledge and skill set.
          </li>
          <li>
            With a keen eye for design and the ability to turn ideas into captivating digital
            experiences, I'm dedicated to creating pixel-perfect websites that leave a lasting
            impact. Let's collaborate and bring your digital visions to life!
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
