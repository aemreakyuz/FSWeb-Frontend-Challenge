import "./App.css";
import { Images } from "./assets/photos/Images";

function App() {
  return (
    <div className="App">
      <img src={Images.profile.profilePhoto} alt="" />
    </div>
  );
}

export default App;
