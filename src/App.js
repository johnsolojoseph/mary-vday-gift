import './App.css';
import Header from './components/Header';
import FallingStars from './components/FallingStars';
import LoveJar from './components/LoveJar';
import MessageInsightsGraph from './components/MessageInsightsGraph';
import SubHeader from './components/SubHeader';
import FunFacts from './components/FunFacts';
import CardContainer from './components/CardContainer';

function App() {
  return (
    <div className="App">
      <div className="hero-section">
        <FallingStars />
        <div className="hero-content">
          <Header
            color={"white"}
            text={"Dating Wrapped 2024"}
          >
          </Header>
          <p>Happy Valentine's Day, Mary!</p>
        </div>
      </div>

      <div className='section' >
        <SubHeader color={"white"}
          text={"Memorable Moments"}>
        </SubHeader>
        <CardContainer></CardContainer>

      </div>

      <div className='section' >
        <SubHeader color={"white"}
          text={"Top Words and Emojis from iMessage"}>
        </SubHeader>
        <MessageInsightsGraph></MessageInsightsGraph>

      </div>


      <div className='section' >
        <SubHeader color={"white"}
          text={"Fun Facts"}>
        </SubHeader>
        <FunFacts></FunFacts>
      </div>

      <div className='section'>
        <SubHeader color={"white"}
          text={"Our Playlist"}>
        </SubHeader>

        <iframe src="https://open.spotify.com/embed/playlist/2NlB0mdR6BCsNe1J668WLy?utm_source=generator" width="80%" height="600" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>


      </div>
      <div className='section'>

      </div>
      <div className='section' style={{ textAlign: "center" }}>
        <SubHeader color={"white"}
          text={"Jar of Reasons Why I Love You"}>
        </SubHeader>
        <LoveJar></LoveJar>
      </div>



    </div>
  );
}

export default App;
