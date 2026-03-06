import "./index.css";

function App() {
  return (
    <div className="card">
      <Image />
      <h1>Shrinivas Nemagoudar</h1>
      <p class = "data">
        I am a Student at KLE Technological universiyt Hubballi Currently
        working as an Intern in Avantro Labs at KLE Tech Park Hubballi for 6 months
        of Internship
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
    <div className="skill">
      <button class="button">HTML 👍</button>
      <button class="button">CSS 👍</button>
      <button class="button">JavaScript 😑</button>
      <button class="button">Web Developer</button>
      <button class="button">Problem Solver</button>
      <button class="button">Intern 👊</button>
      <button class="button">Engineering 👍</button>
    </div>
  );
}

export default App;
