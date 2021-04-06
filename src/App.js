import './App.css';
import AudioButton from './Components/AudioButton';
import CrawlingText from './Components/CrawlingText';
import IdentityCard from './Components/IdentityCard';

function App () {

  function playAudio () {
     const audioEl = document.getElementsByClassName("AudioElement")[0];
    audioEl.play();
  } 

    return ( 
      <div>
        <AudioButton playAudio={playAudio}
        />
        <CrawlingText>
          <IdentityCard/>         
        </CrawlingText>
      </div>                  
  );
  }

export default App;
