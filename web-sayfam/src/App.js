import "./App.css";
import { Images } from "./assets/photos/Images";

function App() {
  const skillsData = [
    { image: Images.skills.jsLogo, title: "JAVASCRIPT" },
    { image: Images.skills.reactLogo, title: "REACT" },
    { image: Images.skills.reduxLogo, title: "REDUX" },
    { image: Images.skills.nodeLogo, title: "NODE" },
    { image: Images.skills.vsCodeLogo, title: "VSCODE" },
    { image: Images.skills.figmaLogo, title: "FIGMA" },
  ];
  return (
    <div className="App">
      <div className="header">
        <img src={Images.profile.profilePhoto} alt="" />
      </div>
      <div className="skills__title">
        <h2>Skills</h2>
      </div>
      <div className="skills">
        <div className="skills__content"></div>
        {skillsData.map((skill, index) => (
          <div className="skill" key={index}>
            <img src={skill.image} alt="" />
            <h3>{skill.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
