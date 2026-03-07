//Data
const myData = [
  {
    id: 1,
    platform: "GitHub",
    title: "My Open Source Projects",
    url: "https://github.com/shrinivas-sn",
    icon: "💻",
    theme: "#333",
  },
  {
    id: 2,
    platform: "LinkedIn",
    title: "Professional Network",
    url: "https://www.linkedin.com/in/shrinivas-nemagoudar-29a567219/",
    icon: "👤",
    theme: "#0077b5",
  },
  {
    id: 3,
    platform: "Portfolio",
    title: "OS Hacker Theme Website",
    url: "https://sites.google.com/kletech.ac.in/shrinivassportfolio/home/",
    icon: "🚀",
  },
  {
    id: 4,
    platform: "Project",
    title: "Student portal Web application",
    url: "https://ghs-kotabagi-website.web.app/",
    icon: "🎓",
    theme: "#e67e22",
  },
];

function App() {
  return (
    <div>
      <Header />
      <Links />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <ul>
      <div id="lib">
        <li>Link In Bio</li>
      </div>
      <div id="about">
        <li>Home</li>
        <li>About</li>
        <li>Links</li>
        <li>Extra</li>
      </div>
    </ul>
  );
}

function Links() {
  return (
    <div id="data-div">
      {myData.map(function (data) {
        return (
          <div className="data-box">
            <p>
              {" "}
              {data.id} {data.icon}
            </p>
            <p> {data.platform}</p>
            <p> {data.title}</p>
            <a href={data.url} target="_blank" rel ="noreferrer">
              <p>{data.platform}</p>
            </a>
          </div>
        );
      })}
      ;
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      2026 All Rights Reserved. <br></br>
      Contact Email - shrinusn2001@gmail.com
    </div>
  );
}

export default App;
