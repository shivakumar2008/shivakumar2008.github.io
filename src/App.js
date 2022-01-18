import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub }  from '@fortawesome/free-brands-svg-icons';
import { faThumbsUp} from '@fortawesome/free-solid-svg-icons';

function App() {

  const duration = new Date() - new Date(2014, 6, 10);
  const lapsedTime = parseDuration(duration);

  return (
    <div className="App">
      <div className="sticky-header">Under Construction... More, more things to come</div>
      <header className="App-header">
        <h1>Shiv Kumar Chintapalli</h1>
        {/* <FontAwesomeIcon color='white' size='xs' icon={faThumbsUp} /> */}
        <p>Exploring things for <b><em>{lapsedTime.years} years, {lapsedTime.months} months and {lapsedTime.days} days approx. </em></b>
          I am an enthusiast, everything about tech and nature excites me. Although there is a lot to keep in mind, I just keep the references... <em>small memory</em>.
        </p>
      </header>
      <main className="App-body">
        <section id="skills">
          <div className="main-layout-block" id="left-up">
            <h3>Powers which I used the most</h3>
            <ul>
              <li>Spring boot</li>
              <li>Vaadin</li>
              <li>Jasper</li>
            </ul>
          </div>
          <div className="main-layout-block right-align" id="right-up">
            <h3>Powers sparsely used</h3>
            <ul>
              <li>AI/ML</li>
              <li>Microservices</li>
              <li>ReactJs</li>
            </ul>
          </div>
        </section>

        <section id="learning">
          <div className="main-layout-block" id="left-down">
            <h3>Learning how to use these powers</h3>
            <ul>
              <li>Angular</li>
              <li>Cloud</li>
              <li>Devops</li>
            </ul>
          </div>
          <div className="main-layout-block right-align" id="right-down">
            <h3>My Hobbies, when I am not using powers</h3>
            <ul>
              <li>Travelling</li>
              <li>Googleing</li>
              <li>Reading, not books</li>
            </ul>
          </div>
        </section>
      </main>
      <footer>
        <ul className="footer-social-icons">
          <li><a href="https://www.linkedin.com/in/shiv-kumar-chintapalli/" rel="noreferrer noopener" target="_blank"><FontAwesomeIcon color='grey' size='lg' icon={faLinkedinIn} /></a></li>
          <li><a href="https://github.com/shivakumar2008" rel="noreferrer noopener" target="_blank"><FontAwesomeIcon color='grey' size='lg' icon={faGithub} /></a></li>
        </ul>
        {/* <p className='people-count'>People visited: <span id="visit-count"></span></p> */}
      </footer>
    </div>
  );
}

function parseDuration(diff) {
  var seconds = Math.trunc(diff / 1000),
    minutes = Math.trunc(seconds / 60),
    hours = Math.trunc(minutes / 60),
    days = Math.trunc(hours / 24),
    months = Math.trunc(days / 30),
    years = Math.trunc(days / 365);

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
