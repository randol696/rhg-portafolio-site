//import logo from './logo.svg';
import './Assets/Styles/style.css';
import HeaderSideBar from './Layouts/Header/header';
import Main from './Layouts/Main/main';

function App() {
  return (
    <>
    <div className="header-bar">
      <h1>RANDOL GONZALEZ</h1>
      <Navigation /> 
    </div>
   
    <div className="mainContainer">
      <div className="leftSide">
        <HeaderSideBar />
        
      </div>
    
      <div className="rightSide">
     
        <Main />
        
      </div>
   
    </div>
    </>
  );
}

function Navigation(){

  return (
      <ul className="navigation-menu">
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#experience">EXPERIENCE</a></li>
              <li><a href="#projects">PROJECTS</a></li>
      </ul>

  );
}
export default App;
