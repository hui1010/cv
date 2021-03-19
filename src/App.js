import {BrowserRouter as Router, Route} from 'react-router-dom';

import Experience from './components/Experience';
import Projects from './components/Projects';
import PL from './components/PersonalLetter';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import {Container, Row, Col} from 'react-bootstrap'


function App() {

  return (
    
    <Router>  
      <div className="App">
        <div className="left">
          <Navbar />
        </div>
        <div className="main">
          <Route path="/" exact component={Experience}/>
          <Route path="/skills" component={Skills}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/personal_letter" component={PL}/>
        </div>
        <div className="right">
        <About />
        </div>
      </div>
    </Router> 
  );
}

export default App;
