import "./index.css";

function App() {
  return (
    <div className="container">
      <Image />
      <p>Shrinivas Nemagoudar</p>
      <p>
        I am a Student at KLE Technological universiyt Hubballi Currently
        working as an Intern in Avantro Labs KLE Tech Park Hubballi for 6 months
        of Internship
      </p>
      <Skills />
    </div>
  );
}

function Image() {
  return (
    <div class="image">
      <img src="image.jpg" alt="profile"></img>
    </div>
  );
}

function Skills() {
  return (
    <div className="skills">
      <button class = "button">HTML</button>
      <button class = "button">CSS</button>
      <button class = "button">JavaScript</button>
      <button class = "button">Web Developer</button>
      <button class = "button">Problem Solver</button>
      <button class = "button">Intern</button>
      <button class = "button">Engineering</button>
    </div>
  );
}

export default App;
