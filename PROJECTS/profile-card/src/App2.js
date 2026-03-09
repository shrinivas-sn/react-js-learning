function App2() {
  return (
    <div className="card2">
      <p id="title">
        This Profile is card is created using map function
        <br /> rather than props method
      </p>
      <div className="container">
        <Image />
        <Name />
        <p className="data">
          I am a Student at KLE Technological universiyt Hubballi Currently
          working as an Intern in Avantro Labs at KLE Tech Park Hubballi for 6
          months of Internship
        </p>
        <Skill />
      </div>
    </div>
  );
}

function Image() {
  return <img src="image.jpg" className="avatar" alt="profile"></img>;
}

function Name() {
  return <p id="name">Shrinivas Nemagoudar</p>;
}

//Displaying skill using map function Array 1
// const skills = [
//   {
//     skill1: "HTML 👍",
//     skill2: "CSS 👍",
//     skill3: "JavaScript 👍",
//     skill4: "Web Developer 👍",
//     skill5: "Problem Solver 👍",
//     skill6: "Intern",
//     skill7: "Engineering",
//   },
// ];

// function Skill() {
//   return (
//     <div>
//       {skills.map(function (skill) {
//         return (
//           <div className="skills">
//             <div className="skill">{skill.skill1}</div>
//             <div className="skill">{skill.skill2}</div>
//             <div className="skill">{skill.skill3}</div>
//             <div className="skill">{skill.skill4}</div>
//             <div className="skill">{skill.skill5}</div>
//             <div className="skill">{skill.skill6}</div>
//             <div className="skill">{skill.skill7}</div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

//Displaying skill using map function Array 1
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "Intermediate",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "Intermediate",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "Intermediate",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#17bb51",
  },
];

function Skill() {
  return (
    <div>
      {skills.map(function (skill) {
        return (
          <div style={{ background: skill.color }} className="skills2">
            <div className="skill-box">{skill.skill}</div>
            <p>{'->'}</p>
            <div className="skill-box">{skill.level}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App2;
