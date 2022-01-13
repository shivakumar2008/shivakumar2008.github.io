import linkedin from './icons/linkedin.png';
import github from './icons/github.png';
import './App.css';

function App() {

  const duration = new Date(2014, 6, 10) - new Date();
  const lapsedTime = parseDuration(duration);

  return (
    <div className="App">
      <header className="App-header">
          <h1>Shiv Kumar Chintapalli</h1>
          <p>Exploring things for <b><em>{lapsedTime.years} years, {lapsedTime.months} months, {lapsedTime.days} days. </em></b>
            I am an enthusiast, everything about tech and nature excites me. Although there is a lot to keep in my mind, I just keep the references... <em>small memory</em>.
          </p>
      </header>
      <main className = "App-body">
        <p>My Powers: </p>
          <ul>
            <li>Spring boot</li>
            <li>Vaadin</li>
            <li>ReactJs</li>
          </ul>

          <p>I am trying to learn:</p>
          <ul>
            <li>AWS</li>
            <li>Angular</li>
            <li>Containerization</li>
          </ul>

          <p>My Hobbies</p>
          <ul>
            <li>Travelling</li>
            <li>Googleing</li>
            <li>Reading, not books</li>
          </ul>
      </main>
      <footer>
        <ul className="footer-social-icons">
          <li><a href="https://www.linkedin.com/in/shiv-kumar-chintapalli/" rel="noreferrer noopener" target="_blank"><img src={linkedin} alt="linkedin redirect"/></a></li>
          <li><a href="https://github.com/shivakumar2008" rel="noreferrer noopener" target="_blank"><img src={github} alt="github redirect"/></a></li>
        </ul>
      </footer>
    </div>
  );
}

function parseDuration(diff){
  var seconds = Math.trunc(diff / 1000),
    minutes = Math.trunc(seconds / 60),
    hours   = Math.trunc(minutes / 60),
    days    = Math.trunc(hours / 24),
    months  = Math.trunc(days / 30),
    years   = Math.trunc(days / 365);

    seconds %= 60;
    minutes %= 60;
    hours %= 24;
    days %= 30;
    months %= 12;

  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds
  };
}

export default App;
