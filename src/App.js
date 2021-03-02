import './App.css';
import PropTypes from "prop-types";
import ProfileComponent from './Profile/ProfileComponent';
import myImage from './Profile/img.jpg';

function App() {

  const handelName = (name ) => {
    alert(`Hi, I am ${name}`)
}

const imgStyle = {
  margin: '16px',
  padding: '16px',
  boxSizing: 'border-box',
  borderRadius: '5px',
  boxShadow: '0 2px 5px cyan'
}

  return (
    <div className="App">
      <ProfileComponent fullName="Ahmed ZNOUDA" bio="Born on 03th May, 1991 in Tunisia" 
          profession="Full Stack JS Developer" myName= {handelName}> <img src={myImage} alt="image" style={imgStyle}/> </ProfileComponent>
    </div>
  );
}

export default App;
