import "./App.css";
import Profile from "./profile/Profile";
import photo from "./profile/photo.jpg";

function App() {
  const fullName = "Fat freddy's Drop" 
  const handleName  = () => { alert(`Hello ${fullName}`) }
  const bio =
    "New Zealand seven-piece band from Wellington, whose musical style has been characterised as any combination of dub, reggae, soul, jazz, rhythm and blues, and techno.";
  return (
    <div className="App">
      <Profile fullName={fullName} bio={bio} handleName ={handleName}>
        <img src={photo} alt="Band Pic" />
      </Profile>
    </div>
  );
}

export default App;
