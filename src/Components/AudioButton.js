import { Component } from "react";
import PlayButton from "../Files/playbutton.svg";
import PauseButton from "../Files/pausebutton.svg";
import Styles from "../Styles/AudioButton.module.css";

class AudioButton extends Component {
  constructor() {
    super();
    this.state = {
      isAudioOn: false,
    };
  }

  playAudio = () => {
    const audioEl = document.getElementsByClassName("AudioElement")[0];
    audioEl.play();
    this.setState({ isAudioOn: true });
  };

  pauseAudio = () => {
    const audioEl = document.getElementsByClassName("AudioElement")[0];
    audioEl.pause();
    this.setState({ isAudioOn: false });
  };

  render() {
    const { isAudioOn } = this.state;
    return (
      <div>
        <audio className="AudioElement">
          <source src="https://ia903204.us.archive.org/16/items/StarWarsThemeSongByJohnWilliams/Star%20Wars%20Theme%20Song%20By%20John%20Williams.mp3"></source>
        </audio>

        {isAudioOn ? (
          <button
            className={Styles.PauseButton}
            type="button"
            onClick={this.pauseAudio}
          >
            <p>
              <img alt="pause button" src={PauseButton} />
            </p>
            <p>PAUSE THEME SONG</p>
          </button>
        ) : (
          <button
            className={Styles.PlayButton}
            type="button"
            onClick={this.playAudio}
          >
            <p>
              <img alt="play button" src={PlayButton} />
            </p>
            <p>PLAY THEME SONG</p>
          </button>
        )}
      </div>
    );
  }
}

export default AudioButton;
