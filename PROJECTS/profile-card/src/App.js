import "./index.css";

function App() {
  return (
    <div className="card">
      <Image />
      <h1>Shrinivas Nemagoudar</h1>
      <p className="data">
        I am a Student at KLE Technological universiyt Hubballi Currently
        working as an Intern in Avantro Labs at KLE Tech Park Hubballi for 6
        months of Internship
      </p>
      <Skills />
    </div>
  );
}

function Image() {
  return <img src="image.jpg" className="avatar" alt="profile"></img>;
}

function Skills() {
  return (
    <div className="skills">
      <Skill name="HTML 👍" />
      <Skill name="CSS 👍" />
      <Skill name="JavaScript 💬" />
      <Skill name="Web Developer" />
      <Skill name="Problem Solver" />
      <Skill name="Intern 👊" />
      <Skill name="Engineering 💬" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill">
      <p>{props.name}</p>
    </div>
  );
}

export default App;
