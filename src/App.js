// import logo from './logo.svg';
import './App.css';
import Greetings from './Components/greeting'; 
import ProfileCard from './Components/Profile';
import './greeting.css';
import './ProfileCard.css'

function App() {
  return (
    <div>
      <Greetings name="john"/>
      <Greetings name="Sam"/>
      <Greetings name="Doe"/>
      <ProfileCard name = "Rohan" age = {26} bio = "Chatbot developer"/>
      <ProfileCard name = "Saket" age = {25} bio = "Chatbot developer"/>
      <ProfileCard name = "Mrunali" age = {22} bio = "Chatbot developer"/>
      <ProfileCard name = "Sagar" age = {23} bio = "Chatbot developer"/>
    </div>
  
  
  );
}

export default App;